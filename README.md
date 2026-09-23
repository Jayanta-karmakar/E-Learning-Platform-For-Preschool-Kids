# LearnEra

A preschool learning platform built with HTML, CSS, and vanilla JavaScript.
The original artwork, learning activities, and games are retained.

## Run

Open `index.html` in a browser. No installation, build step, or React runtime is required.
Start → Learning, Games, or Assessment opens the activities in `pages/`.
Some original pages use remotely hosted fonts, icons, Bootstrap, or jQuery and need an internet connection for those resources.

## Project layout

- `index.html` — welcome page and entry point.
- `pages/` — learning pages, assessments, and games, including `guess-word.html`.
- `assets/css/` — page styles and shared keyboard-focus/reduced-motion styles.
- `assets/js/` — activity scripts; `guess-*` scripts belong to the word guessing game.
- `assets/pictures/`, `assets/images/`, `assets/icons/` — original visual assets.
- `assets/audio/`, `assets/video/` — local learning media and sound effects.
- `server/` — original PHP login, registration, and administration code.
- `database/` — original SQL export.
- `archive/` — original Python experiment and empty JSP placeholder, retained for reference.
- `docs/file-map.json` — exact original-to-current file locations.
- `tools/check-links.py` — dependency-free local resource checker.

## Editing

Keep each activity's markup in `pages/`, styles in `assets/css/`, and scripts in `assets/js/`.
Use relative URLs so pages work through both `file://` and a web server.
HTML and classic JavaScript media URLs resolve relative to the HTML page; CSS `url()` paths resolve relative to the stylesheet.
For example, a page loads `../assets/js/memoryGame.js`, and that script uses `../assets/images/img-1.png`.
Do not change classic scripts to JavaScript modules without checking direct-file browser support and existing inline handlers.

Run the local resource check from the repository root:

```sh
python3 tools/check-links.py
```

## Optional PHP features

The account/admin pages require a PHP server with MySQL support and the original database setup; opening them as files does not execute PHP.
Review `server/connection.php` for your local configuration and `database/mca_project.sql` for the original schema.
With PHP installed, you can serve the repository root:

```sh
php -S localhost:8000
```

Then open `http://localhost:8000`. Database authentication and admin operations have not been tested as part of the organization work.

## Changes and verification

The reorganization preserves every tracked original file. URLs were updated for the new layout, including dynamic memory-game images, PHP navigation, and CSS backgrounds. Windows-style image paths, two root-relative script URLs, and a misspelled image folder were corrected.
HTML document headers were normalized. Shared navigation styles now wrap on small screens, and keyboard focus is visible. Original activity logic remains in place.

Verified by opening local files in Chromium: Start → Learning navigation, desktop and 390px-wide menus, memory-game images, addition scoring, alphabet audio loading, and image-puzzle initialization. All standalone JavaScript files pass `node --check`. The local reference checker reports no missing targets. These are representative checks, not an exhaustive test of every game, external service, or PHP feature.
