# Launch Big Brands - Standalone Website

This is a self-contained, Shopify-free version of the Launch Big Brands landing page.

## What Was Changed

### Removed
- All Shopify-specific scripts and dependencies
- Shopping cart functionality (not needed for landing page)
- Shopify checkout and payment processing
- Judge.me reviews integration
- Multiple tracking pixels and analytics (GTM, etc.)
- Unnecessary CSS files and JavaScript libraries

### Added/Modified
- Clean, semantic HTML5 structure
- Single consolidated CSS file (`css/styles.css`)
- Minimal JavaScript for interactivity (`js/main.js`)
- Google Fonts CDN for Assistant font family
- Direct Calendly widget integration

## Features That Still Work

✅ **Hero Section** - Main headline with CTA button  
✅ **Statistics Counter** - Animated counting on scroll  
✅ **Services Grid** - What the company offers  
✅ **Reasons List** - 10 reasons to partner  
✅ **About Section** - Company story with image  
✅ **FAQ Accordion** - Interactive Q&A section  
✅ **Calendly Booking** - Embedded scheduling widget  
✅ **Responsive Design** - Mobile-friendly layout  
✅ **Smooth Scrolling** - Anchor link navigation  

## File Structure

```
launchbigbrands-standalone/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles in one file
├── js/
│   └── main.js         # Interactive features
└── images/             # All image assets
    ├── 1.png
    ├── 2.png
    ├── 3.png
    ├── 4.png
    ├── Untitled_design_16.png    (logo)
    └── Untitled_design_18.png    (about photo)
```

## How to Use

### Option 1: Open Locally
Simply open `index.html` in any modern web browser.

### Option 2: Host on Any Web Server
Upload all files to any web hosting service:
- Netlify (drag & drop)
- Vercel
- GitHub Pages
- Traditional web hosting (cPanel, etc.)

### Option 3: Run Local Server
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Then visit: http://localhost:8000
```

## Customization

### Change Colors
Edit the CSS variables or color values in `css/styles.css`:
- Primary blue: `#2563eb`
- Secondary cyan: `#06b6d4`
- Text dark: `#0f172a`
- Text muted: `#475569`

### Update Content
Edit `index.html` directly. All content is clearly structured with semantic HTML.

### Modify Calendly Link
In `index.html`, find the Calendly widget and update the `data-url`:
```html
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/YOUR-LINK-HERE">
</div>
```

## Benefits vs Shopify

| Feature | Shopify Version | Standalone Version |
|---------|----------------|-------------------|
| Monthly Cost | $29-299+ | $0 (just hosting) |
| Page Load Speed | Slower (many scripts) | Fast (minimal code) |
| Customization | Theme-restricted | Full control |
| Dependencies | Heavy | Minimal |
| Hosting | Shopify only | Anywhere |
| File Size | ~2MB+ | ~50KB (without images) |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- The Calendly widget requires an internet connection
- All images are loaded locally
- No external dependencies except Google Fonts and Calendly
- Works offline (except Calendly and fonts)

## Support

For questions or issues, contact the Launch Big Brands team through the booking calendar.

---

**Created:** October 2025  
**Version:** 1.0  
**License:** Proprietary - Launch Big Brands ™
