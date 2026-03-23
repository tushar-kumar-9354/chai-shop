from flask import Flask, render_template, request, jsonify, session
import os

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'chai-wala-secret-2024')

# Pre-loaded chai menu items
MENU_ITEMS = [
    {"id": 1, "name": "Masala Chai", "price": 30, "category": "classic", "description": "Our signature spiced tea with cardamom and ginger", "image": "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300", "rating": 4.9},
    {"id": 2, "name": "Adrak Chai", "price": 25, "category": "classic", "description": "Fresh ginger blended with CTC tea leaves", "image": "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300", "rating": 4.8},
    {"id": 3, "name": "Elaichi Chai", "price": 35, "category": "classic", "description": "Cardamom-infused premium green tea", "image": "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=300", "rating": 4.7},
    {"id": 4, "name": "Kesar Chai", "price": 45, "category": "premium", "description": "Saffron-enriched royal tea", "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300", "rating": 4.9},
    {"id": 5, "name": "Mint Chai", "price": 35, "category": "fusion", "description": "Refreshing mint with classic chai spices", "image": "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=300", "rating": 4.6},
    {"id": 6, "name": "Rooh Afza Chai", "price": 40, "category": "fusion", "description": "Rose-flavored sweet tea with condensed milk", "image": "https://images.unsplash.com/photo-1579019163248-e7761241d85a?w=300", "rating": 4.8},
    {"id": 7, "name": "Cutting Chai", "price": 15, "category": "classic", "description": "Half glass of strong masala chai", "image": "https://images.unsplash.com/photo-1579017331263-ef82f7bb0be2?w=300", "rating": 4.5},
    {"id": 8, "name": "Bombay Chai", "price": 30, "category": "classic", "description": "Strong Bombay-style chai with extra sugar", "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300", "rating": 4.7},
    {"id": 9, "name": "Tulsi Chai", "price": 35, "category": "herbal", "description": "Holy basil infused herbal tea", "image": "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300", "rating": 4.6},
    {"id": 10, "name": "Kashmiri Kahwa", "price": 50, "category": "premium", "description": "Traditional Kashmir green tea with almonds", "image": "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=300", "rating": 4.9},
    {"id": 11, "name": "Irani Chai", "price": 40, "category": "classic", "description": "Thick Iranian-style tea with salt", "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300", "rating": 4.8},
    {"id": 12, "name": "Paanch Paat Chai", "price": 25, "category": "classic", "description": "Five-leaf special with lemongrass", "image": "https://images.unsplash.com/photo-1579017331263-ef82f7bb0be2?w=300", "rating": 4.7},
]

# Initialize cart in session
def get_cart():
    if 'cart' not in session:
        session['cart'] = {}
    return session['cart']

def save_cart(cart):
    session['cart'] = cart
    session.modified = True

@app.route('/')
def home():
    featured = MENU_ITEMS[:4]
    return render_template('home.html', featured=featured, menu_items=MENU_ITEMS)

@app.route('/menu')
def menu():
    category = request.args.get('category', 'all')
    if category == 'all':
        filtered = MENU_ITEMS
    else:
        filtered = [item for item in MENU_ITEMS if item['category'] == category]
    return render_template('menu.html', menu_items=filtered, current_category=category, categories=['all', 'classic', 'premium', 'fusion', 'herbal'])

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/api/cart', methods=['GET'])
def get_cart_api():
    cart = get_cart()
    cart_items = []
    total = 0
    for item_id, quantity in cart.items():
        item = next((i for i in MENU_ITEMS if i['id'] == int(item_id)), None)
        if item:
            cart_items.append({
                'id': item['id'],
                'name': item['name'],
                'price': item['price'],
                'quantity': quantity,
                'subtotal': item['price'] * quantity
            })
            total += item['price'] * quantity

    return jsonify({
        'items': cart_items,
        'total': total,
        'count': sum(cart.values())
    })

@app.route('/api/cart', methods=['POST'])
def add_to_cart():
    data = request.get_json()
    item_id = str(data.get('item_id'))
    quantity = data.get('quantity', 1)

    cart = get_cart()
    cart[item_id] = cart.get(item_id, 0) + quantity
    save_cart(cart)

    return jsonify({'success': True, 'cart_count': sum(cart.values())})

@app.route('/api/cart/<int:item_id>', methods=['DELETE'])
def remove_from_cart(item_id):
    cart = get_cart()
    item_id_str = str(item_id)
    if item_id_str in cart:
        del cart[item_id_str]
        save_cart(cart)

    return jsonify({'success': True, 'cart_count': sum(cart.values())})

@app.route('/api/cart', methods=['DELETE'])
def clear_cart():
    save_cart({})
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
