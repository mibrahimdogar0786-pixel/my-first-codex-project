# Talal Centre Website

Professional bilingual (English/Arabic) landing website for **Talal Centre / مركز طلال للتبريد**.

## Project files

- `index.html` → Page structure, sections, SEO tags, JSON-LD schema.
- `styles.css` → Full responsive styling, colors, cards, layout, mobile sticky CTA bar.
- `script.js` → Language switching (EN/AR), RTL/LTR toggle, localStorage language save, mobile menu.

## How to edit business data

### 1) Phone number and call links
Update all occurrences of:
- Display number: `0531624801`
- Call link: `tel:+966531624801`

Files:
- `index.html` (header, hero, contact, footer, mobile sticky bar)
- `script.js` (`topContact` language text)

### 2) WhatsApp number/link
Update:
- `https://wa.me/966531624801`

Files:
- `index.html` (header CTA, hero CTA, contact, footer, sticky bar)
- `script.js` if text references the number

### 3) Services text
Edit services in:
- `index.html` service cards section (`#services`)
- `script.js` translations for keys:
  - `service1Title/service1Text` ... `service6Title/service6Text`

### 4) Language text (English/Arabic)
All translatable strings live in:
- `script.js` inside `translations.en` and `translations.ar`

Each HTML element with `data-i18n="key"` pulls from translation dictionaries.

### 5) SEO and business schema
Edit in `index.html`:
- `<title>`
- `<meta name="description">`
- `<meta name="keywords">`
- `<script type="application/ld+json">` LocalBusiness fields

## Local preview

Open `index.html` directly in a browser, or run a local static server.

Example with Python:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Push repository to GitHub.
2. In GitHub repo: **Settings → Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** (or your default branch), folder **/ (root)**
4. Save and wait for deployment.
5. Your site will be available on your GitHub Pages URL.

## Notes

- Mobile sticky call/WhatsApp bar appears on small screens for ad conversion.
- Language preference is saved in browser `localStorage` key: `talal_lang`.
