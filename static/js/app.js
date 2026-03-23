// Chai Wala - Cart & Navigation Functions

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Update cart count badge
async function updateCartCount() {
    try {
        const res = await fetch('/api/cart');
        const data = await res.json();
        const countEl = document.getElementById('cartCount');
        if (countEl) {
            countEl.textContent = data.count;
        }
    } catch (e) {
        console.log('Cart API not available');
    }
}

// Open cart modal
function openCart() {
    fetchCartItems();
    document.getElementById('cartModal').classList.add('active');
}

// Close cart modal
function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
}

// Fetch and render cart items
async function fetchCartItems() {
    try {
        const res = await fetch('/api/cart');
        const data = await res.json();
        renderCartItems(data);
    } catch (e) {
        showToast('Unable to load cart', 'error');
    }
}

// Render cart items in modal
function renderCartItems(data) {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');

    if (data.items.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">☕</div>
                <p>Your cart is empty</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Add some delicious chai to get started!</p>
            </div>
        `;
        totalEl.textContent = '₹0';
        return;
    }

    container.innerHTML = data.items.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=150" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="cart-item-price">₹${item.price} × ${item.quantity}</div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="updateCartItem(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateCartItem(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">&times;</button>
        </div>
    `).join('');

    totalEl.textContent = '₹' + data.total;
}

// Add item to cart
async function addToCart(itemId) {
    try {
        const res = await fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item_id: itemId, quantity: 1 })
        });

        if (res.ok) {
            const data = await res.json();
            updateCartCount();
            showToast('Added to cart!', 'success');
        }
    } catch (e) {
        showToast('Unable to add to cart', 'error');
    }
}

// Update cart item quantity
async function updateCartItem(itemId, quantity) {
    if (quantity <= 0) {
        await removeFromCart(itemId);
        return;
    }

    try {
        await fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item_id: itemId, quantity: 1 })
        });

        fetchCartItems();
        updateCartCount();
    } catch (e) {
        showToast('Unable to update cart', 'error');
    }
}

// Remove item from cart
async function removeFromCart(itemId) {
    try {
        const res = await fetch(`/api/cart/${itemId}`, {
            method: 'DELETE'
        });

        if (res.ok) {
            fetchCartItems();
            updateCartCount();
            showToast('Removed from cart', 'success');
        }
    } catch (e) {
        showToast('Unable to remove item', 'error');
    }
}

// Clear entire cart
async function clearCart() {
    try {
        await fetch('/api/cart', { method: 'DELETE' });
        fetchCartItems();
        updateCartCount();
        showToast('Cart cleared', 'success');
    } catch (e) {
        showToast('Unable to clear cart', 'error');
    }
}

// Checkout
function checkout() {
    showToast('Order placed successfully! Thank you! 🎉', 'success');
    clearCart();
    setTimeout(() => {
        closeCart();
    }, 1500);
}

// Toast notification system
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Close cart on outside click
document.addEventListener('click', function(e) {
    const cartModal = document.getElementById('cartModal');
    if (e.target === cartModal) {
        closeCart();
    }
});

// Close cart on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCart();
        const quickViewModal = document.getElementById('quickViewModal');
        if (quickViewModal) {
            quickViewModal.classList.remove('active');
        }
    }
});

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
