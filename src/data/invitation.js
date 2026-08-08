// ─────────────────────────────────────────────────────────────
// INVITATION DATA — everything on the page is driven from here.
// Duplicate this file (and swap photos in /public/assets/photos
// and the track in /public/assets/music) to spin up a new
// invitation without touching any component code.
// ─────────────────────────────────────────────────────────────

const invitation = {
  bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",

  couple: {
    bride: "Hasna",
    groom: "Sajjad",
    // Shown as "Hasna & Sajjad" — order controls display order everywhere.
  },

  greeting: "With Joy in Our Hearts, We Invite You to the Wedding of",

  event: {
    dayName: "Sunday",
    date: "August 9, 2026",
    // ISO date used by the countdown — keep in sync with the line above.
    isoDate: "2026-08-09T11:00:00+05:30",
    time: "11:00 AM – 3:00 PM",
    venueName: "Presidency Auditorium",
    venueAddress: "JN Road, Perinthalmanna, Kerala",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Presidency+Convention+Center+Perinthalmanna",
    blessing: "إِنْ شَاءَ اللَّهُ",
    blessingTranslit: "In sha' Allah",
  },

  story: {
    heading: "A Journey of Love",
    subheading: "Two hearts, one story — building our tomorrow together.",
    people: [
      {
        name: "Hasna",
        tagline: "Curious, bright-eyed & sweet",
        photo: "/assets/photos/bride-childhood.jpg",
      },
      {
        name: "Sajjad",
        tagline: "Thoughtful, playful & kind",
        photo: "/assets/photos/groom-childhood.jpg",
      },
    ],
  },

  twoHearts: {
    heading: "Two Hearts",
    subheading: "United as one under grace.",
    photo: "/assets/photos/couple.jpg",
    caption: "Hand in hand, building our tomorrow together",
  },

  invitationNote: {
    heading: "The Invitation",
    body:
      "Love is a partnership of two unique people who bring out the very best in each other. As we embark on this beautiful adventure together, your presence, blessings, and prayers would mean the world to us and our families.",
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    translation:
      "\u201cAnd of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.\u201d",
    reference: "— Surah Ar-Rum, 30:21",
  },

  wishesRelations: [
    "Bride's Family",
    "Bride's Friend",
    "Groom's Family",
    "Groom's Friend",
    "Colleague / Work Friend",
    "Well Wisher",
  ],

  music: {
    src: "/assets/music/nasheed.mp3",
    label: "Wedding Nasheed",
  },

  footer: {
    note: "May love and peace remain forever.",
    year: "2026",
  },
};

export default invitation;
