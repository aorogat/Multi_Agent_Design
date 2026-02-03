# MAFBench Website

A modern, highly visual website for the MAFBench research paper on multi-agent LLM frameworks.

## Structure

```
/
├── index.html          # Home page
├── design.html         # Why Design Matters
├── architecture.html   # Architecture Guide
├── results.html        # Results with interactive charts
├── mafbench.html       # MAFBench benchmark page
├── paper.html          # Paper & Code
├── blog.html           # Blog/Insights
├── about.html          # About page
├── styles/
│   └── main.css        # Custom styles
├── scripts/
│   ├── main.js         # Shared JavaScript
│   └── results.js      # Chart functionality
└── WEBSITE_README.md   # This file
```

## Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Responsive**: Mobile-friendly across all pages
- **Interactive Charts**: Results page with Chart.js visualizations
- **Smooth Navigation**: Sticky navbar with mobile menu
- **Visual Storytelling**: Diagrams and visual elements throughout
- **SEO-Friendly**: Semantic HTML structure

## Technologies

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Chart.js**: Interactive charts for results
- **Font Awesome**: Icons
- **Vanilla JavaScript**: No framework dependencies

## Getting Started

1. Open `index.html` in a web browser
2. All pages are static HTML files - no build process required
3. For local development, use a simple HTTP server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```

## Customization

### Colors
The site uses an indigo color scheme. To change colors:
- Update Tailwind classes (e.g., `text-indigo-600` → `text-blue-600`)
- Modify CSS variables in `styles/main.css` if needed

### Content
- All content is in HTML files - edit directly
- Charts data is in `scripts/results.js`
- Update GitHub links to point to your repository

### Adding Pages
1. Create new HTML file
2. Copy navbar and footer from existing pages
3. Update navigation links in all pages

## Deployment

The site is static and can be deployed to:
- **GitHub Pages**: Push to a repository and enable Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **Any static hosting**: Upload all files

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11 not supported (uses modern CSS/JS)

## Notes

- The floating "Read the Paper" button appears on all pages
- Charts require Chart.js CDN (already included)
- All external resources use CDN links
- Update paper.pdf link in `paper.html` when available

## License

Same as the MAFBench research project.

