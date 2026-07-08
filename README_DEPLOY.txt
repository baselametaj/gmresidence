GM Residence website - Cloudflare Pages deployment

Before publishing:
1. Open index.html and replace 355694638963 with your WhatsApp number in international format, example: 355691234567.
2. Optional: replace YOURFORMID with your Formspree form ID, or use a different form service.
3. Optional: replace the Google Maps placeholder with your Google Maps embed iframe.

Publish on Cloudflare Pages:
1. Create a free GitHub account.
2. Create a new repository named gm-residence-ksamil.
3. Upload all files from this folder.
4. In Cloudflare: Workers & Pages > Create > Pages > Connect to Git.
5. Select the GitHub repository and deploy. Build command: leave blank. Output directory: / or leave blank.
6. In the Pages project, go to Custom domains and add gmresidenceksamil.com and www.gmresidenceksamil.com.
7. Cloudflare will create DNS records and HTTPS automatically.
