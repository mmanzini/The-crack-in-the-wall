# The Crack in the Wall

A kids-friendly tabletop RPG about insect-sized Small Folk living hidden in our world — beneath the floorboards, behind the skirting board, in the gap under the garden shed.

**Live site:** https://mmanzini.github.io/The-crack-in-the-wall/

---

## About the game

The Crack in the Wall is a rules-light TTRPG for families and young players. Five species of tiny humanoids — Whisperlings, Wayfarers, Shellbacks, Rainlings, and Veilings — make their home in the margins of a suburban neighbourhood. A flower bed is an enchanted forest. A garden pond is an inland sea. And a human glancing your way can erase your very mind.

The game uses the **Crux System**: a d6 dice-pool with boon/bane modifiers and a Grit meta-currency. Combat never misses — the die result determines how badly things go for your enemies (or you).

---

## Site structure

| Section | Path | Content |
|---|---|---|
| Home | `src/index.md` | Introduction and card grid |
| Setting | `src/setting/index.md` | The hidden world, Law of Witness, magic |
| How to Play | `src/rules/index.md` | Full Crux System rules |
| Species & Classes | `src/species/` | Five species, ten playable roles (L1–10) |
| Equipment | `src/equipment/index.md` | Weapons, armour, miscellaneous gear |
| Bestiary | `src/bestiary/index.md` | Threats, bosses, adversary design |
| Campaign | `src/campaign/index.md` | The Thornwick Block setting |

---

## Tech stack

- **[Eleventy (11ty) v3](https://www.11ty.dev/)** — static site generator
- **Nunjucks** — templating (`src/_includes/base.njk`)
- **Plain CSS** — no framework (`src/style.css`)
- **Google Fonts** — Cardo (headings) + Inter (body)
- **GitHub Pages** — hosting via `gh-pages` branch

---

## Development

```bash
# Install dependencies
npm install

# Start local dev server (localhost:8080, live reload)
npm start

# Build to _site/
npm run build
```

Content lives in Markdown files under `src/`. Edit those to update the site.

---

## Deploy

```bash
./deploy.sh
```

Builds the site and pushes `_site/` to the `gh-pages` branch. Requires the GitHub remote to be configured (already set to `origin`).

First-time setup: after the first deploy, enable GitHub Pages in the repo settings — Source: **Deploy from a branch** → `gh-pages` / `/ (root)`.

---

## Project status

Beta. Core rules and all five species are documented. Known open items:

- Mistweaver class (Veilings) has no level features yet
- No official character sheet
- Some rules edge cases flagged for playtesting

---

*Borrowers meets Coraline. Stay out of sight.*
