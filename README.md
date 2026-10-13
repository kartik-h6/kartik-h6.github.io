# kartik-h6.github.io

The personal site. **One repository, paths instead of subdomains.**

Served at: `https://kartik-h6.github.io/`

---

## How GitHub folders become URLs

This is the part that trips everyone up, so it is written out in full.

| In the repository | The URL it serves |
|---|---|
| `index.html` (at the root) | `https://kartik-h6.github.io/` |
| `about/index.html` | `https://kartik-h6.github.io/about/` |
| `pharmacy/index.html` | `https://kartik-h6.github.io/pharmacy/` |
| `pharmacy/semester-3/index.html` | `https://kartik-h6.github.io/pharmacy/semester-3/` |
| `assets/css/style.css` | `https://kartik-h6.github.io/assets/css/style.css` |
| `404.html` | shown automatically for any missing page |

**The rule:** a folder containing `index.html` becomes a URL ending in `/`.

- `about.html` → serves at `/about.html`
- `about/index.html` → serves at `/about/`

Both work. The second one is what this repository uses, because clean URLs are worth the extra folder.

## Why the repository is named `kartik-h6.github.io`

GitHub Pages treats a repository with exactly that name as the **user site**: it is served at the domain root (`https://kartik-h6.github.io/`).

Any other repository name is served one level deeper — `https://kartik-h6.github.io/repo-name/` — which is why every link in this site can use clean root-relative paths such as `/assets/css/style.css`.

## Folders cannot be empty

Git does not track empty directories, so any folder with no files yet holds a `.gitkeep` placeholder. Delete the placeholder once the folder has real content.

## How to add a file or folder in the GitHub web interface

1. Open the repository and click **Add file → Create new file**.
2. In the filename box, type the path **with slashes — the slashes create the folders**:
   - `about/index.html` creates the folder `about` and the file `index.html` inside it
   - `assets/css/style.css` creates `assets`, then `css`, then the file
3. Add the content, then click **Commit changes**.

That is the whole mechanism: **a slash in the filename box is a folder separator.**

## The structure

```text
kartik-h6.github.io/
├── index.html              →  /
├── 404.html                →  any missing page
├── robots.txt
├── sitemap.xml
├── manifest.json
├── .nojekyll               →  tells Pages not to run Jekyll
│
├── about/index.html        →  /about/
├── research/index.html     →  /research/
├── projects/index.html     →  /projects/
├── knowledge/index.html    →  /knowledge/
├── journey/index.html      →  /journey/
├── contact/index.html      →  /contact/
├── privacy/index.html      →  /privacy/
├── terms/index.html        →  /terms/
│
├── pharmacy/index.html     →  /pharmacy/
├── sslc/index.html         →  /sslc/
├── digitalsetup/index.html →  /digitalsetup/
├── cgpacalculator/index.html → /cgpacalculator/
│
└── assets/
    ├── css/style.css
    ├── js/main.js
    ├── images/
    │   ├── profile/
    │   ├── projects/
    │   ├── icons/
    │   ├── favicon/
    │   └── og/
    └── files/
```

## Paths versus subdomains

These are different things, and the difference is the whole point of this repository:

- A **path** (`/pharmacy/`) lives inside this one site. Nothing else to configure, nothing else to renew, one place to maintain.
- A **subdomain** (`pharmacy.example.com`) is a DNS record pointing at a host. It needs a domain you own, a CNAME record, and a site to serve — separate from this one.

Subdomains multiply work; paths do not. Each area here has its own folder, which is the maintenance separation that matters — without a second deployment to look after.

Add a real subdomain only when an area has real traffic **and** a named owner. (See the archive's `11_FUTURE/Future-Infrastructure.md`.)

## Enabling Pages (once)

**Settings → Pages → Source:** *Deploy from a branch* → **Branch:** `main`, **folder:** `/ (root)` → Save.

The site then appears at `https://kartik-h6.github.io/` within a minute or two.

## If an area ever needs its own repository

That is a one-commit change: create the new repository, move the folder's contents into it, and the area is served at `https://kartik-h6.github.io/<new-repo>/`. Nothing in this structure blocks that — it is just no longer the default, because five deployments cost five times as much attention as five folders.
