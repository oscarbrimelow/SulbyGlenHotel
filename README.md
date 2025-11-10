# Sulby Glen Hotel Website

Static marketing site for the Sulby Glen Hotel, designed for GitHub Pages deployment. Built with plain HTML, CSS, and a light JavaScript file so future updates stay simple.

## Project Structure

- `index.html` – Main landing page with hero and quick navigation to each area of the hotel.
- `rooms/` – Room details and pricing (`rooms/index.html`).
- `restaurant/` – Menus, bar information, and serving times (`restaurant/index.html`).
- `shop/` – Village shop opening hours and photo carousel (`shop/index.html`).
- `gallery/` – Full image gallery showcasing events, race days, and shop highlights.
- `tt-races/` – TT vantage point information and Dan Sayle's achievements.
- `news/` – Embedded Facebook feed with the latest updates.
- `reviews/` – Curated Google review highlights.
- `about/` – Family story of the inn and owners.
- `contact/` – Contact form, map, and contact details.
- `privacy/`, `accessibility/` – Placeholder policy pages ready for your official copy.
- `styles.css` – Global styles, colors, layout rules, and responsive tweaks.
- `script.js` – Mobile navigation toggle, carousel support, and automatic footer year.
- `favicon.svg` – Site icon shown in browser tabs and bookmarks.

## Editing Content

### Text
1. Open the page you want to edit in any text editor (VS Code, Notepad, etc.). For example, rooms live in `rooms/index.html`, while news updates are in `news/index.html`.
2. Scroll to the section you want to change (look for headings such as `<h2>Rooms &amp; Rates</h2>` or `<h1>Latest News &amp; Events</h1>`).
3. Update the text between the HTML tags. Example:
   ```html
   <p>Hearty meals are served daily...</p>
   ```
   Change only the sentence between `<p>` and `</p>`.
4. Save the file.

### Images
- Many images use external URLs (e.g. Unsplash). To replace one, swap the value inside `src="..."`.
- Local images live in the `images/` folder. On sub-pages you'll usually reference them with `../images/...`.
- Update alternative text (`alt=""`) with a short description for accessibility.
- The dedicated gallery lives in `gallery/index.html`. Add or remove `<figure>` blocks inside the `.gallery-grid` there to update the full collection.

### Contact Details
- Contact information and the enquiry form live in `contact/index.html`. Update the phone number, email, or address there.
- Change the contact form recipient inside the `<form>` tag's `action="mailto:..."`.

### Booking Link & Social Feed
- The top hero on `index.html` contains the `Book Now` button. Replace the placeholder link `https://www.booking.com` with your Booking.com affiliate URL or future booking engine link. A comment in the code marks where a deeper integration (embedded widget/API) can be added later.
- The Facebook feed lives in `news/index.html` and uses the Facebook Page Plugin iframe. Update the `href` parameter in the iframe `src` if the hotel's page URL changes. Facebook will refresh the latest posts on load (viewers must allow third-party cookies to see the feed).

### Navigation Links
- Because each major section is its own page, navigation links differ slightly between the home page and internal pages.
  - On `index.html`, links use folder paths such as `href="rooms/"`.
  - On sub-pages, links step back up a level, e.g. `href="../rooms/"`.
- Be consistent when adding new links so navigation works from every page.

## Styling Changes
- Adjust brand colors and fonts inside `styles.css`. Variables at the top (`:root`) make it easy to change accent colors or background.
- Fonts use system defaults for simplicity, but you can import Google Fonts by adding a `<link>` tag in `index.html` and updating `body { font-family: ... }`.

## Deploying to GitHub Pages

1. **Create a Repository**
   - Log in to GitHub and create a new repository named `sulby-glen-hotel` (or any name you like).
   - Leave it public so GitHub Pages can serve it.

2. **Upload Files**
   - Drag and drop all site files and folders (`index.html`, `styles.css`, `script.js`, `favicon.svg`, plus the directories like `rooms/`, `restaurant/`, `gallery/`, etc.) into the repository.
   - Commit the changes.

3. **Enable GitHub Pages**
   - Go to **Settings → Pages**.
   - Under **Build and deployment**, set **Source** to `Deploy from a branch`.
   - Select the `main` branch and the `/ (root)` folder, then click **Save**.
- Wait a minute; GitHub shows the live URL once it's ready (usually `https://<username>.github.io/<repo>/`).

4. **Verify**
   - Visit the published URL and confirm that the site loads correctly.
- If styles/scripts don't load, double-check that file names match exactly and are in the repository root.

## Updating the Site After Deployment

1. Edit files locally or directly on GitHub.
2. Commit and push the changes (or use GitHub's "Edit" button and "Commit changes").
3. GitHub Pages redeploys automatically.

## Future Enhancements

- **Online Booking:** Replace the `Book Now` link or the commented area in the hero section with a booking widget or API when you're ready.
- **Contact Form Backend:** Swap the `mailto:` action for a service like Formspree, Netlify Forms, or a custom server to capture messages reliably.
- **Asset Hosting:** Move images into an `assets/` folder and compress them for faster loading if you prefer local hosting.

## Support

If you need help editing or deploying, reach out to the developer who provided this template or consult GitHub Pages documentation: https://docs.github.com/en/pages.

