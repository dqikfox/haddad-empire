# Haddad Empire Website

A static HTML/CSS website for Haddad Empire.

## Files

- `index.html` — main page (hero + portal sections)
- `assets/crest.png` — generated crest logo

## Deploy to GoDaddy Shared Hosting (cPanel)

1. Log in to GoDaddy.
2. Go to **My Products** → **Web Hosting**.
3. Click **Manage** next to the hosting plan for `haddadempire.com.au`.
4. Open **cPanel**.
5. In cPanel, open **File Manager**.
6. Navigate to `public_html`.
7. Delete the existing default `index.html` (if present).
8. Upload the contents of this folder (`index.html` and the `assets/` folder) into `public_html`.
9. Visit `https://haddadempire.com.au` and test.

## Redirect `.com` to `.com.au`

In cPanel:
1. Go to **Redirects**.
2. Type: Permanent (301).
3. `https?://(www.)?haddadempire.com` → `https://haddadempire.com.au`.
4. Check "Wildcard Redirect" if desired.

## HTTPS / SSL

If the padlock does not show:
1. In cPanel, go to **SSL/TLS Status**.
2. Click **Run AutoSSL**.
3. Wait a few minutes and refresh.

## Notes

- This is a static site — no Node.js, no server, no database.
- The site is designed as a private family portal landing page.
