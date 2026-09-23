# Working on LearnEra

## Project and compatibility

LearnEra is a preschool learning platform built with HTML, CSS, and classic JavaScript. Read `README.md` before making changes.

- Preserve the ability to open the root `index.html` directly in a browser without installing dependencies or running a build.
- Preserve the original artwork, colorful design, learning content, and activity behavior unless the requested task changes them.
- Do not introduce React, a bundler, module scripts, or a server requirement as an incidental refactor.
- Keep changes focused; do not rewrite unrelated games or backend behavior during cleanup.

## File organization

- Keep the entry point at `index.html` and other HTML pages in `pages/`.
- Put styles in `assets/css/`, scripts in `assets/js/`, and media in the corresponding assets folders.
- Keep PHP account/admin code in `server/`, the SQL export in `database/`, and historical experiments in `archive/`.
- `docs/file-map.json` records the original college-project paths and their current locations. Update destinations if files move again.
- Retain original assets and archive files unless their removal is explicitly in scope.

## Paths and code

- Use relative URLs compatible with both `file://` and HTTP. Avoid machine-specific paths, backslashes, and root-relative asset URLs.
- HTML resource paths and classic JavaScript media paths resolve relative to the HTML document. CSS `url()` paths resolve relative to the stylesheet.
- When moving files, check links, CSS backgrounds, inline scripts, dynamically generated images, audio/video sources, PHP redirects, and PHP includes.
- Preserve classic script loading order, element IDs, and globals used by existing inline handlers.
- Scope layout changes to the relevant pages. Keep shared accessibility styles small and avoid breaking game interactions.
- Do not commit credentials, local environment files, generated screenshots, dependencies, or OS metadata.

## Verification

- Run `python3 tools/check-links.py` from the repository root after changing paths or markup. It checks static references; dynamically constructed URLs also need browser verification.
- Run `node --check path/to/script.js` for changed standalone JavaScript files.
- Run `git diff --check` before committing, or `git diff --cached --check` after staging.
- For navigation or layout changes, open `index.html` directly in a browser, follow the affected links, and inspect desktop and narrow mobile layouts.
- For activity changes, exercise the affected interaction and check relevant images, audio, video, and browser errors. A passing link or syntax check does not prove gameplay works.
- Some original pages depend on external fonts, icons, Bootstrap, or jQuery. Distinguish external loading failures from local path problems.
- PHP/MySQL features require a configured server and database. Do not report those features as tested based on static HTML checks.
- Document what was verified and any remaining limitations. Update `README.md` when the layout or run instructions change.

## Git workflow

Use a separate `codex/` branch for requested work unless the user specifies another name. Inspect the working tree before staging, preserve unrelated user changes, and summarize the actual changes and validation in pull requests.
