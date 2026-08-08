// Reusable Islamic-geometric motifs used across sections:
// a mihrab-style pointed arch (frames photos + the hero),
// an 8-point star divider (rule between sections), and a
// crescent-and-star flourish (hero accent).

export function ArchFrame({ children, className = "" }) {
  return (
    <div className={`arch-frame ${className}`}>
      <div className="arch-frame__inner">{children}</div>
      <svg
        className="arch-frame__outline"
        viewBox="0 0 240 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M4 296 V130 C4 62 56 4 120 4 C184 4 236 62 236 130 V296"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M18 296 V130 C18 70 64 18 120 18 C176 18 222 70 222 130 V296"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}

export function StarDivider({ tone = "gold" }) {
  return (
    <div className={`star-divider star-divider--${tone}`} role="presentation">
      <span className="star-divider__line" />
      <svg viewBox="0 0 32 32" className="star-divider__star" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 0c1.1 5.4 2.7 9 5 11.3S26.6 14.9 32 16c-5.4 1.1-9 2.7-11 5s-3.9 5.6-5 11c-1.1-5.4-2.7-8.7-5-11S5.4 17.1 0 16c5.4-1.1 8.7-2.7 11-5s3.9-5.6 5-11z"
        />
      </svg>
      <span className="star-divider__line" />
    </div>
  );
}

export function CrescentStar({ className = "" }) {
  return (
    <svg
      className={`crescent-star ${className}`}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M58 8a42 42 0 1 0 0 84 42 42 0 0 1 0-84z"
        opacity="0.9"
      />
      <path
        fill="currentColor"
        d="M78 20l3.6 8.4L90 32l-8.4 3.6L78 44l-3.6-8.4L66 32l8.4-3.6z"
      />
    </svg>
  );
}

export function CornerMotif({ className = "" }) {
  return (
    <svg
      className={`corner-motif ${className}`}
      viewBox="0 0 80 80"
      aria-hidden="true"
    >
      <path
        d="M2 2c22 0 40 4 52 16s16 30 16 52"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M2 18c16 0 28 4 38 14s14 22 14 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <circle cx="2" cy="2" r="3" fill="currentColor" />
    </svg>
  );
}
