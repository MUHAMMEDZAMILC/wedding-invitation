const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function LeafIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3C8 6 6 11 6 14.5 6 18 8.5 20 12 20s6-2 6-5.5C18 11 16 6 12 3z" />
      <path d="M12 5v13" />
    </svg>
  );
}

export function ChurchIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v3.2" />
      <path d="M10.6 3.6h2.8" />
      <path d="M4 21V10.5L12 5l8 5.5V21" />
      <path d="M4 21h16" />
      <path d="M9.5 21v-5a2.5 2.5 0 0 1 5 0v5" />
      <circle cx="12" cy="9.5" r="1.1" />
    </svg>
  );
}

export function ChampagneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 2.5h3l-.5 8.2a1 1.6 0 0 1-2 0L8.5 2.5z" />
      <path d="M10 10.7v8.3" />
      <path d="M7.5 19h5" />
      <path d="M14.5 4h3l-.4 7a.9 1.4 0 0 1-2.2 0L14.5 4z" />
      <path d="M16 11v6.3" />
      <path d="M14 17.3h4" />
    </svg>
  );
}

export function PlateIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="6.2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M4.2 6v13" />
      <path d="M2.8 6v3.2a1.4 1.4 0 0 0 2.8 0V6" />
      <path d="M19.8 6c0 3-1.6 4.6-1.6 4.6V19" />
    </svg>
  );
}

export function DiscoBallIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v3.5" />
      <circle cx="12" cy="13" r="7" />
      <path d="M5 13h14" />
      <path d="M12 6v14" />
      <path d="M6.8 8.5c2.7 2.7 7.7 2.7 10.4 0" />
      <path d="M6.8 17.5c2.7-2.7 7.7-2.7 10.4 0" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MusicNoteIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 17.5V5.8L19 4v12" />
      <circle cx="6.5" cy="17.5" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </svg>
  );
}
