# Haddad Empire Website

A static multi-page website for Haddad Empire built with plain HTML, CSS, and JavaScript.

## Site structure

- `index.html` — homepage and portal overview
- `family-tree.html` — lineage and branch structure
- `history.html` — family history and timeline
- `gallery.html` — visual archive overview
- `vault.html` — documents archive overview
- `calendar.html` — annual family planning page
- `members.html` — member profiles and roles
- `legacy.html` — recorded wisdom and legacy content
- `business.html` — family ventures and stewardship
- `achievements.html` — milestone and recognition page
- `cookbook.html` — recipes and food heritage
- `login.html` — member access entry point
- `styles.css` — shared site styling
- `script.js` — mobile navigation and shared UI behavior
- `assets/` — crest artwork and static images

## Deploy to GoDaddy shared hosting

1. Log in to GoDaddy.
2. Open **My Products** and choose the hosting plan for `haddadempire.com.au`.
3. Launch **cPanel**.
4. Open **File Manager**.
5. Navigate to `public_html`.
6. Upload all root HTML files, `styles.css`, `script.js`, and the `assets/` folder.
7. Confirm `index.html` is in the root of `public_html`.
8. Visit `https://haddadempire.com.au` to verify the site is live.

## Redirect `.com` to `.com.au`

In cPanel:

1. Open **Redirects**.
2. Choose **Permanent (301)**.
3. Redirect `https?://(www.)?haddadempire.com` to `https://haddadempire.com.au`.
4. Enable wildcard redirect if desired.

## HTTPS / SSL

If the padlock does not show:

1. Open **SSL/TLS Status** in cPanel.
2. Click **Run AutoSSL**.
3. Wait a few minutes and refresh the domain.

## Notes

- The site remains fully static and requires no build step.
- The public pages establish the structure for future private member content.
