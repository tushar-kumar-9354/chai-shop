# Chai Wala ☕

A beautiful Flask web application for an authentic Indian chai shop with user accounts, order tracking, and admin panel.

![Chai Wala](https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800)

## Features

### Customer Features
- **Multiple Pages**: Home, Menu, About, Contact
- **User Login**: Customers can login with name and phone number
- **Pre-loaded Menu**: 12 authentic chai varieties with descriptions and prices
- **Shopping Cart**: Add, remove, update quantities with session-based storage
- **Order Placement**: Place orders with delivery address
- **Order Tracking**: Track all your orders and see their current status
- **Category Filtering**: Filter chai by Classic, Premium, Fusion, or Herbal
- **Quick View Modal**: See detailed item information before adding to cart
- **Responsive Design**: Works beautifully on mobile and desktop

### Admin Features
- **Admin Login**: Secure admin access (username: `admin`, password: `chaiadmin123`)
- **Dashboard**: View order statistics by status
- **Order Management**: View all orders, update status, delete orders
- **Status Updates**: Change order status (Pending → Confirmed → Preparing → Ready → Delivered)
- **Menu Overview**: View all menu items in admin panel

## Chai Menu

| Name | Price | Category | Description |
|------|-------|----------|-------------|
| Masala Chai | ₹30 | Classic | Our signature spiced tea with cardamom and ginger |
| Adrak Chai | ₹25 | Classic | Fresh ginger blended with CTC tea leaves |
| Elaichi Chai | ₹35 | Classic | Cardamom-infused premium green tea |
| Kesar Chai | ₹45 | Premium | Saffron-enriched royal tea |
| Mint Chai | ₹35 | Fusion | Refreshing mint with classic chai spices |
| Rooh Afza Chai | ₹40 | Fusion | Rose-flavored sweet tea with condensed milk |
| Cutting Chai | ₹15 | Classic | Half glass of strong masala chai |
| Bombay Chai | ₹30 | Classic | Strong Bombay-style chai with extra sugar |
| Tulsi Chai | ₹35 | Herbal | Holy basil infused herbal tea |
| Kashmiri Kahwa | ₹50 | Premium | Traditional Kashmir green tea with almonds |
| Irani Chai | ₹40 | Classic | Thick Iranian-style tea with salt |
| Paanch Paat Chai | ₹25 | Classic | Five-leaf special with lemongrass |

## Setup

1. **Clone the repository**
```bash
git clone https://github.com/tushar-kumar-9354/chai-shop.git
cd chai-shop
```

2. **Create virtual environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Run the application**
```bash
python app.py
```

5. **Open in browser**
Navigate to `http://localhost:5000`

## Admin Access

- **URL**: `http://localhost:5000/admin/login`
- **Username**: `admin`
- **Password**: `chaiadmin123`

## Pages

- `/` - Home page with featured chai
- `/menu` - Full menu with category filters
- `/about` - About our chai story
- `/contact` - Contact form
- `/login` - Customer login
- `/orders` - Track your orders (requires login)
- `/admin` - Admin panel (requires admin login)

## Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Data Storage**: JSON file (orders.json)
- **Fonts**: Fredoka, Playfair Display (Google Fonts)
- **Images**: Unsplash CDN

## Project Structure

```
chai_shop/
├── app.py              # Flask application with routes
├── requirements.txt    # Python dependencies
├── orders.json          # Order data storage
├── static/
│   ├── css/
│   │   └── style.css   # Global styles
│   └── js/
│       └── app.js      # Cart and UI functionality
└── templates/
    ├── base.html       # Base template
    ├── home.html       # Home page
    ├── menu.html       # Menu page
    ├── about.html      # About page
    ├── contact.html    # Contact page
    ├── login.html      # Customer login
    ├── orders.html     # Order tracking
    ├── admin.html      # Admin panel
    └── admin_login.html # Admin login
```

## License

MIT License - Feel free to use this project for learning or as a starting point for your own chai shop!
