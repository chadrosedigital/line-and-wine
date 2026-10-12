# Line & Wine

A responsive five-page static website for the South African line dancing community. No framework, installation, database, or build step is required.

## Preview locally

Serve the `dist` folder with any static web server, for example `python3 -m http.server 4173 --directory dist`, then visit http://localhost:4173. You can also open `dist/index.html` directly.

## GitHub and Vercel

1. Create a GitHub repository and upload the contents of this folder, keeping `dist` and `vercel.json` at the repository root.
2. In Vercel, add a new project and import that repository.
3. Choose the **Other** framework preset. Leave the build command empty and set the output directory to **dist**. No install command or environment variables are needed.
4. Deploy. The included `vercel.json` specifies the output directory and clean URLs.

If uploading the ZIP, extract it first and use the `line-and-wine` folder as the repository root. This ZIP is a source export; creating it does not update GitHub or Vercel.

## Pages

- `dist/index.html` — Home
- `dist/our-story.html` — Story and founders
- `dist/classes.html` — Regional class enquiries and FAQs
- `dist/events.html` — Social events and corporate functions
- `dist/gallery.html` — Filterable gallery with enlarged image view

Shared styling and behaviour are in `dist/styles.css` and `dist/script.js`.

## Contact information

Email: michelleschmidt02@gmail.com
WhatsApp: 074 898 5679 (international link: +27 74 898 5679)

All contact actions open the visitor's email app or WhatsApp. There is no form or stored customer information.

## Photos and latest updates

Includes Michelle's and Allison's portraits, three supplied community photos, the updated homepage and Our Story imagery, and the real-photo gallery. Footer buttons say “WhatsApp” on all five pages.

All image files are included in `dist/assets`. The original `community.jpg` and `steps.jpg` are illustrative images; see IMAGE-NOTES.md. Founder portraits use top alignment, and new community photographs retain their full composition.

Edit gallery entries in `dist/gallery.html` using the existing `gallery-item` buttons, image paths, alt text, captions and categories.

Class schedules, exact venues, fees and event dates are handled through the site's contact links.

## Design and accessibility

Cream, wine, coral, sage, and warm yellow. Responsive layouts, mobile navigation, visible keyboard focus, native FAQ disclosures, labelled gallery filters, keyboard-dismissible image dialog, and reduced-motion support. Google Fonts loads DM Sans and Playfair Display; system fallbacks work if unavailable. All imagery is stored locally.
