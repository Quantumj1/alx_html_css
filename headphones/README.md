# Headphones — Landing (HTML & CSS)

This folder contains a responsive HTML/CSS landing page implementation inspired by the provided design image.

Files added
- `0-index.html` — the full responsive HTML page.
- `0-styles.css` — stylesheet used by the page.

How to view
1. Open `0-index.html` in your browser (double-click or use "Open With" in your editor).
2. For best results, serve the folder with a static file server (optional):

   - On Windows PowerShell you can run:

```powershell
# start a simple static server with Python 3
python -m http.server 8000; Start-Process "http://localhost:8000/0-index.html"
```

Notes
- The page references an image at `./images/01_headphones_desktop@2x.png`. If your workspace already contains that image under `images/`, the hero and results will show it. If not, replace the background image URLs in `0-styles.css` with a valid image path or color.
- This is a static, accessible-first layout. There is a small mobile menu toggle in the header for narrow viewports.

License
Feel free to reuse and adapt these files for learning and personal projects.
