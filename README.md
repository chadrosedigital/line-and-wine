# Line & Wine

A responsive five-page static website for the South African line dancing community. No framework, installation, database, or build step is required.

## Preview locally

Serve the `dist` folder with any static web server, for example `python3 -m http.server 4173 --directory dist`, then visit http://localhost:4173. You can also open `dist/index.html` directly.

## GitHub and Vercel

1. Create a GitHub repository and upload the contents of this folder, keeping `dist` and `vercel.json` at the repository root.
2. In Vercel, add a new project and import that repository.
3. Choose the **Other** framework preset. Leave the build command empty and set the output directory to **dist**. No install command or environment variables are needed.
4. Deploy. The included `vercel.json` specifies the output directory and clean URLs.

Extract the ZIP first. Upload the contents of the `line-and-wine` folder, not the ZIP itself, to GitHub. The repository root must contain `dist/`, `vercel.json`, and this README. In Vercel leave Root Directory at the repository root. For an existing repository, replace the corresponding files and add all assets.

This export includes the latest real community photographs and the Facebook footer link on all five pages. It is ready for upload; creating this ZIP does not push to GitHub or deploy to Vercel.

Vercel settings are included in `vercel.json`: Framework **Other**, Output Directory **dist**, and no build or install commands. No environment variables are required. See [Vercel configuration documentation](https://vercel.com/docs/project-configuration/vercel-json).

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

## Photographs

The site uses real Line & Wine photographs, including eight owner-supplied community photos added in October 2026. Home, classes, and events feature relevant photos; all eight are also included in the filterable gallery. Image proportions are preserved so group members remain visible. See `IMAGE-NOTES.md` for placement details.

Class schedules, exact venues, fees, and event dates were not supplied. Visitors are directed to Michelle for current details.

## Design and accessibility

Cream, wine, coral, sage, and warm yellow. Responsive layouts, mobile navigation, visible keyboard focus, native FAQ disclosures, labelled gallery filters, keyboard-dismissible image dialog, and reduced-motion support. Google Fonts loads DM Sans and Playfair Display; system fallbacks work if unavailable. All imagery is stored locally.
