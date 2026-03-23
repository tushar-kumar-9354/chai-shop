# Chai Wala ☕

A beautiful Flask web application for an authentic Indian chai shop with a rich, warm design aesthetic.

![Chai Wala](https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800)

## Features

- **Multiple Pages**: Home, Menu, About, Contact
- **Pre-loaded Menu**: 12 authentic chai varieties with descriptions and prices
- **Shopping Cart**: Add, remove, update quantities with session-based storage
- **Category Filtering**: Filter chai by Classic, Premium, Fusion, or Herbal
- **Quick View Modal**: See detailed item information before adding to cart
- **Responsive Design**: Works beautifully on mobile and desktop
- **Warm Chai Theme**: Rich brown/golden color palette with steam animations

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
git clone <your-repo-url>
cd chai_shop
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

## Project Structure

```
chai_shop/
├── app.py              # Flask application with routes
├── requirements.txt    # Python dependencies
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
    └── contact.html    # Contact page
```

## Deploy to GitHub

1. Create a new repository on GitHub
2. Initialize git and push:
```bash
cd chai_shop
git init
git add .
git commit -m "Initial commit - Chai Wala Flask app"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Fredoka, Playfair Display (Google Fonts)
- **Images**: Unsplash CDN

## License

MIT License - Feel free to use this project for learning or as a starting point for your own chai shop!
