# Muslim Wedding Invitation — Website Template

A single-page, mobile-first wedding invitation built with **React + Vite**.
Modeled after the "Hasna & Sajjad" invitation, with an Islamic-motif visual
language (arch frames, geometric star dividers, crescent accents), a
tap-to-open intro gate, background nasheed/music player, live countdown,
and a guest wishes form — all data-driven from one file.

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Customizing for a new couple

Everything text/date/venue related lives in **`src/data/invitation.js`**.
To create a new invitation from this template:

1. Duplicate the project folder (or just this repo, since it's meant to be
   the one reusable template).
2. Edit `src/data/invitation.js`:
   - `couple.bride` / `couple.groom` — display order matters (shown as
     "Bride & Groom" everywhere).
   - `event.isoDate` — **this drives the live countdown**, keep it in sync
     with `event.date` / `event.dayName`.
   - `event.mapsUrl` — paste a real Google Maps share link.
   - `story.people[].photo` and `twoHearts.photo` — paths into
     `/public/assets/photos/`.
   - `music.src` — path into `/public/assets/music/`.
   - `invitationNote.arabic` / `translation` / `reference` — swap the ayah
     if you'd like a different one.
   - `wishesRelations` — the dropdown options on the wishes form.
3. Replace the placeholder files:
   - `public/assets/photos/bride-childhood.jpg`
   - `public/assets/photos/groom-childhood.jpg`
   - `public/assets/photos/couple.jpg`
   - `public/assets/music/nasheed.mp3` (currently a 3-second placeholder
     tone — drop in a real track, ideally a short, loop-friendly nasheed)
4. Update `index.html`'s `<title>` and meta description.

No other files need to change for a standard re-skin.

## How the pieces fit together

```
src/
  data/invitation.js       ← all copy, dates, paths (the only file most edits touch)
  hooks/
    useCountdown.js        ← ticks toward event.isoDate every second
    useReveal.js            ← IntersectionObserver-based fade/rise-in on scroll
  components/
    IntroGate.jsx           ← full-screen "Open Invitation" gate (also the
                               user gesture that unlocks audio autoplay)
    MusicPlayer.jsx          ← floating toggle + <audio> element
    Hero.jsx                 ← Bismillah, names, date, venue line
    Section.jsx               ← shared heading/subheading/reveal wrapper
                                used by every section below
    OurStory.jsx               ← two childhood photos in arch frames
    TwoHearts.jsx                ← couple photo + caption
    InvitationNote.jsx            ← ayah + translation + signature
    Countdown.jsx                  ← live day/hour/min/sec counter
    Venue.jsx                       ← address, timing, maps link
    WishesForm.jsx                   ← guest name/relation/note form
    Footer.jsx
    Ornaments.jsx                     ← shared SVG motifs (ArchFrame,
                                         StarDivider, CrescentStar, CornerMotif)
```

## About the wishes form

The form stores submitted wishes to the browser's `localStorage` under the
key `wedding-invitation-wishes` so it works with zero backend. That means
wishes are **local to each guest's device/browser** — there's no shared
guest-book across visitors. If you want a real shared guest book (like the
admin dashboard on the reference site), you'll need to point `WishesForm.jsx`
at a backend (e.g. a Firestore collection, a small serverless function, or
a form service like Formspree) instead of `saveWish()`.

## Notes

- Fonts: Cormorant Garamond (display), Amiri (Arabic), Jost (body) — loaded
  from Google Fonts in `index.html`.
- Color palette and typography are defined as CSS custom properties at the
  top of `src/index.css` — change them there to reskin the whole site.
- Respects `prefers-reduced-motion`.
