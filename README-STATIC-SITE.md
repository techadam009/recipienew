# American Eats - Static Website

A comprehensive recipe website featuring classic American dishes with a warm, appetizing design.

## Files Included

### HTML Pages
- `index.html` - Home page with hero slider and recipe grid
- `recipe-detail.html` - Recipe detail page
- `contact.html` - Contact page with form
- `terms.html` - Terms and Conditions
- `privacy.html` - Privacy Policy

### CSS
- `styles.css` - All styling and responsive design

### JavaScript
- `scripts/data.js` - Recipe data (10 recipes)
- `scripts/main.js` - Home page functionality
- `scripts/recipe-detail.js` - Recipe detail page functionality
- `scripts/contact.js` - Contact form handling

## How to Use

### Option 1: Using a Local Web Server (Recommended)

For the site to work properly, you need to run it through a web server. Here are several easy methods:

#### Method A: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open: http://localhost:8000

#### Method B: Node.js (http-server)
```bash
npx http-server -p 8000
```
Then open: http://localhost:8000

#### Method C: PHP
```bash
php -S localhost:8000
```
Then open: http://localhost:8000

#### Method D: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 2: Upload to Web Hosting

Simply upload all files to your web hosting provider (maintaining the folder structure):
- All HTML files in root
- `styles.css` in root
- `scripts/` folder with all JS files

Compatible with:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Features

✅ Sticky header with navigation
✅ Auto-rotating hero slider (4 featured recipes)
✅ Search functionality
✅ Recipe grid (10 recipes)
✅ Dynamic recipe detail pages
✅ Contact form with validation
✅ Terms & Privacy pages
✅ Back to top button
✅ Fully responsive design
✅ Smooth animations
✅ Toast notifications

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Customization

### Adding New Recipes
Edit `scripts/data.js` and add new recipe objects to the `recipes` array:

```javascript
{
    id: 11, // Unique ID
    title: "Your Recipe Name",
    description: "Description...",
    image: "https://your-image-url.com/image.jpg",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: 4,
    featured: false, // Set to true for hero slider
    ingredients: ["ingredient 1", "ingredient 2"],
    instructions: ["step 1", "step 2"]
}
```

### Changing Colors
Edit the CSS variables in `styles.css`. The main colors used are:
- Primary: #f97316 (orange)
- Secondary: #dc2626 (red)
- Accent: #fed7aa (light orange)

### Modifying Images
Replace image URLs in `scripts/data.js` with your own image URLs or local paths.

## Troubleshooting

### Recipes Not Showing
- Make sure you're running through a web server (not opening file:// directly)
- Check browser console for errors (F12)
- Ensure all files are in correct folders

### Images Not Loading
- Check your internet connection (images are from Unsplash)
- Replace with local images if needed

### Slider Not Working
- Ensure `scripts/data.js` is loading before `scripts/main.js`
- Check that at least 1 recipe has `featured: true`

## License

Copyright © 2025 American Eats. All rights reserved.
