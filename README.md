# dxFeed KB — Docusaurus navigation prototype

This **is a genuine Docusaurus 3 source project**, not a standalone HTML mockup. Pages are navigation placeholders and do not contain migrated dxFeed article text.

## Run locally

Requires Node.js 20+ and npm with internet access to install dependencies.

```bash
npm install
npm run start
```

Open http://localhost:3000. To check a production build:

```bash
npm run build
npm run serve
```

Build verified with Docusaurus 3.10.2 and Node 22.

## Publish on GitHub Pages

The site is configured for https://jkosheleva.github.io/dxfeed-docusaurus-demo/ (`url`, `baseUrl`, `organizationName`, `projectName` in `docusaurus.config.js`). Deployment runs automatically via `.github/workflows/deploy.yml` on every push to `main`.

1. Create a public repository `jkosheleva/dxfeed-docusaurus-demo` on GitHub.
2. Upload all project files, including the hidden `.github` folder (not `node_modules` or `build`). The workflow runs `npm install`, so `package-lock.json` is optional.
3. In the repository: Settings → Pages → Source: **GitHub Actions**.
4. Open the Actions tab and wait for "Deploy to GitHub Pages" to finish (~2 min).

If the repository name changes, update `baseUrl` and `projectName` to match.

## What this prototype includes

- Natasha's proposed tree as provided in the attached Confluence-export Markdown; expandable native Docusaurus sidebar.
- Clickable placeholder page for every category and topic; category overviews link to child pages.
- Home page and independent structure-review notes.
- Source KB links where present in supplied table.
- Offline full-text search via `@easyops-cn/docusaurus-search-local` (no external service; index is built with the site).
- Original source labels deliberately retained, including open naming issues.

## Next steps

Test deep sidebar navigation, confirm labels and missing topics, trial the table/code component designs, choose search, decide Markdown/Git review process and add publishing pipeline.
