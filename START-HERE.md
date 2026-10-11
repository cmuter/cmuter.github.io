# Casper Muter — portfolio migration

## Preview
Unzip this package, then double-click `index.html`. No installation or build step is needed. The Vimeo videos need an internet connection.

## Free hosting with GitHub Pages
1. Create a free account at https://github.com if needed.
2. Create a **public** repository named `YOUR-USERNAME.github.io`, replacing YOUR-USERNAME with your exact GitHub username.
3. Choose **Add file → Upload files**. Upload the contents of this folder (including the assets folder), not the ZIP or the outer portfolio folder. `index.html` must be at the repository root. Commit the files.
4. Open **Settings → Pages → Deploy from a branch**. Select **main** and **/(root)**, then Save.
5. Wait for deployment, then open `https://YOUR-USERNAME.github.io`. Check the project filters, project details, videos, résumé, and contact links on your phone and computer.

GitHub Pages hosting is free for a public repository. Your source and uploaded assets are public. The included résumé is the PDF linked on your current public website.

## Keep caspermuter.com
You can keep GoDaddy as the domain registrar while replacing its paid website builder with GitHub Pages. The domain renewal remains paid. Using only the github.io address removes the need for a paid domain.

1. In GitHub account **Settings → Pages**, verify `caspermuter.com` using the TXT record GitHub supplies; retain that verification record.
2. In the repository’s **Settings → Pages → Custom domain**, enter `caspermuter.com` and Save **before changing DNS**. GitHub creates the CNAME file for a branch deployment.
3. In GoDaddy, open the domain’s DNS management. Replace the old website-routing records for `@` and `www` with the records below. If DNS is hosted elsewhere, edit them there instead. Leave email MX records, verification TXT records, and unrelated records intact. Remove conflicting old `@` A/AAAA or `www` records and any forwarding for those names.

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-USERNAME.github.io |

Use the default TTL. The CNAME value has no `https://` and no slash. IPv6 is optional; if you retain AAAA records, replace old hosting values with GitHub’s current values in the linked documentation.

4. Allow up to 24 hours for DNS/certificate provisioning. Enable **Enforce HTTPS** in GitHub Pages when available.
5. Verify both `https://caspermuter.com` and `https://www.caspermuter.com`, including images and the résumé. Only then cancel the GoDaddy website-builder subscription. Keep the domain registration and any email service you use.

No domain transfer is required. If you also want to leave GoDaddy as registrar, you can transfer the domain separately later; that does not make domain renewals free.

## Editing later
- `index.html`: all visible text, links, project descriptions, and page sections.
- `styles.css`: colors, spacing, typography, and mobile layout. Main colors are at the top.
- `script.js`: mobile menu and project filters.
- `assets/`: local copies of your existing photos, certificates, and résumé. Replace `casper-muter-resume.pdf` to update the résumé while keeping its links working.
- Existing paths `/projects-1`, `/resume`, `/publications`, `/certifications`, and `/about` redirect to their new sections.
- To update the site, upload changed files to the same repository and commit. Keep the CNAME file GitHub creates after domain setup.

The project descriptions and four Vimeo embeds come from your current website. The Kaman and starfish videos are included as local MP4 files. Photos, certificates, and résumé are stored locally so the new site does not rely on GoDaddy’s image hosting. Vimeo still hosts the demo videos. The LinkedIn URL formatting was corrected and the IEEE link uses its normal public domain. No new unpublished project details were added.

## Verification
Checked JavaScript syntax, all local asset references, all section anchors, duplicate IDs, the résumé PDF header, and the presence of 12 project entries. Browser rendering was not available in this environment; review the local preview before switching DNS.

## Official instructions
- Publishing: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Domain and DNS: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Domain verification: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

## Updating this revised design
Upload `index.html`, `styles.css`, and the complete `assets` folder to the root of your existing repository, keeping the folder structure, then commit. These files replace the previous versions. No DNS or Pages settings need to change.

## Change wording yourself
Open `index.html` in a text editor (Notepad works) or GitHub’s file editor. Search for the sentence you want to change. All visible wording is in this file, and section comments such as `EDIT: ABOUT SECTION` help you find your place. Change text between the HTML tags; keep the tags and attributes intact. For example, change `<h2>About me</h2>` to `<h2>About Casper</h2>`. Save and upload the changed file, or commit directly on GitHub. Changes publish after the deployment finishes. For layout changes or a larger rewrite, send the current file and your requested edits.

## Logo and interests update
The header logo is `assets/logo-mark.png`; the browser tab icon is `assets/favicon.png`. Edit the interests and hobbies section by searching for `EDIT: INTERESTS AND HOBBIES SECTION` in index.html.

## Latest photo and logo update
Upload `index.html`, `styles.css`, and the complete `assets` folder to your existing repository and commit. Keep the folder structure. The package includes a logo without the name, a matching browser tab icon, six personal photos, five extra fabrication photos inside expanded project details, and the restored Kaman torque tester project with its video. The existing résumé PDF is unchanged. The four Vimeo videos remain click to play, and the Kaman and starfish videos are included as MP4 files.

The Kaman and starfish videos are converted to MP4 for browser playback. The main menu lists Projects, Publications, Résumé, Certifications, then About. The colonoscopy sleeve and rehabilitation glove appear under both Medical devices and Soft robotics. The starfish video appears in its project card. Your hike and gym photos are included in the interests gallery. The garden photo and the trail photo with a dog were removed from that gallery to keep it focused on your own photos and places you have visited.

The browser may cache the old tab icon. Close and reopen the tab after the GitHub deployment completes if it has not changed. All asset links and section links were checked; visual browser QA was unavailable.

## Additional named photos
Added all 12 images from the latest named files and the SBA2 and COLON22 archives alongside existing media. Upload index.html, styles.css, and the complete assets folder. The archives contained photos, not videos. The engineering interests paragraph now covers medical devices and robotics beyond rehabilitation.
