import { useEffect, useRef, useState } from "react";
import invitation from "../../data/invitation";
import useCountdown from "../../hooks/useCountdown";
import {
  LeafIcon,
  ChurchIcon,
  ChampagneIcon,
  PlateIcon,
  DiscoBallIcon,
  InstagramIcon,
  MusicNoteIcon,
} from "./icons";
import "./template4.css";

const ASSETS = "/assets/template4";

const schedule = [
  { time: "10:30", label: "Location Arrival", Icon: ChurchIcon, asset: "church" },
  { time: "11:00", label: "Ceremony", Icon: ChurchIcon, asset: "church" },
  { time: "12:30", label: "Toast", Icon: ChampagneIcon, asset: "champagne" },
  { time: "13:00", label: "Dinner", Icon: PlateIcon, asset: "plate" },
  { time: "15:00", label: "Party", Icon: DiscoBallIcon, asset: "disco-ball" },
];

function pad(value) {
  return String(value).padStart(2, "0");
}

function AssetIcon({ name, Fallback, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <Fallback className={className} />;
  return (
    <img
      src={`${ASSETS}/${name}.png`}
      alt=""
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`t4__reveal${visible ? " t4__reveal--visible" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function TornEdge() {
  return (
    <svg
      className="t4__tear"
      viewBox="0 0 1200 34"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="#f7f2e8"
        d="M0,20 L36,9 L74,24 L110,6 L146,22 L182,11 L218,26 L256,8 L292,19 L328,28
           L364,10 L400,23 L438,7 L474,21 L510,13 L546,27 L582,9 L618,20 L654,29
           L690,12 L726,24 L762,8 L798,22 L834,14 L870,26 L906,10 L942,21 L978,7
           L1014,23 L1050,15 L1086,28 L1122,11 L1158,22 L1200,16 L1200,34 L0,34 Z"
      />
    </svg>
  );
}

function Divider() {
  return (
    <div className="t4__divider">
      <span className="t4__divider-line" />
      <AssetIcon name="leaf-pair" Fallback={LeafIcon} className="t4__divider-icon" />
      <span className="t4__divider-line" />
    </div>
  );
}

export default function Template4() {
  const { bride, groom } = invitation.couple;
  const { days, hours, minutes, seconds, done } = useCountdown(invitation.event.isoDate);

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  const hashtag = `#${bride}And${groom}`;

  return (
    <div className="t4">
      <div className="t4__photo">
        <img src={invitation.twoHearts.photo} alt={`${bride} and ${groom}`} />
        <div className="t4__hero-overlay">
          <p className="t4__hero-eyebrow">We're Getting Married</p>
          <h1 className="t4__hero-names">
            {bride} &amp; {groom}
          </h1>
          <p className="t4__hero-date">{invitation.event.date}</p>
        </div>
        <TornEdge />
      </div>

      <div className="t4__content">
        <Reveal as="section" className="t4__section">
          {done ? (
            <p className="t4__subheading">The celebration has begun — join us!</p>
          ) : (
            <div className="t4__countdown-grid">
              {units.map((unit, index) => (
                <Reveal as="div" key={unit.label} delay={index * 90}>
                  <div className="t4__countdown-value">{pad(unit.value)}</div>
                  <div className="t4__countdown-label">{unit.label}</div>
                </Reveal>
              ))}
            </div>
          )}
        </Reveal>

        <Reveal as="section" className="t4__section">
          <AssetIcon name="church" Fallback={ChurchIcon} className="t4__detail-icon" />
          <h2 className="t4__heading--sm">Ceremony</h2>
          <div className="t4__detail-card">
            <p className="t4__detail-time">{invitation.event.time}</p>
            <p className="t4__detail-venue">{invitation.event.venueName}</p>
            <p className="t4__detail-address">{invitation.event.venueAddress}</p>
            <a
              className="t4__btn"
              href={invitation.event.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Details
            </a>
          </div>
        </Reveal>

        <Reveal as="section" className="t4__section">
          <AssetIcon name="champagne" Fallback={ChampagneIcon} className="t4__detail-icon" />
          <h2 className="t4__heading--sm">Reception</h2>
          <div className="t4__detail-card">
            <p className="t4__detail-time">{invitation.event.time}</p>
            <p className="t4__detail-venue">{invitation.event.venueName}</p>
            <p className="t4__detail-address">{invitation.event.venueAddress}</p>
            <a
              className="t4__btn"
              href={invitation.event.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Details
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal as="div" className="t4__photo t4__photo--short">
        <img src={invitation.twoHearts.photo} alt="The couple laughing together" />
        <TornEdge />
      </Reveal>

      <div className="t4__content">
        <Reveal as="section" className="t4__section">
          <Divider />
          <h2 className="t4__heading">The Wedding Day</h2>
          <div className="t4__timeline">
            {schedule.map(({ time, label, Icon, asset }, index) => (
              <Reveal
                as="div"
                className="t4__timeline-row"
                key={label}
                delay={index * 110}
              >
                <div className="t4__timeline-dot">
                  <AssetIcon name={asset} Fallback={Icon} className="t4__timeline-icon" />
                </div>
                <span className="t4__timeline-time">{time}</span>
                <span className="t4__timeline-label">{label}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal as="div" className="t4__photo t4__photo--short">
        <img src={invitation.twoHearts.photo} alt="The couple smiling together" />
        <TornEdge />
      </Reveal>

      <div className="t4__content">
        <Reveal as="section" className="t4__section">
          <AssetIcon name="instagram" Fallback={InstagramIcon} className="t4__section-icon" />
          <h2 className="t4__heading--sm" style={{ marginTop: 12 }}>
            Share The Love
          </h2>
          <p className="t4__subheading">
            Help us capture our special day by sharing your photos and stories.
          </p>
          <span className="t4__btn" style={{ display: "inline-block" }}>
            {hashtag}
          </span>
        </Reveal>

        <Reveal as="section" className="t4__section">
          <AssetIcon name="music-note" Fallback={MusicNoteIcon} className="t4__section-icon" />
          <h2 className="t4__heading--sm" style={{ marginTop: 12 }}>
            Our Wedding Playlist
          </h2>
          <p className="t4__subheading">
            Add a song to get us dancing all night long!
          </p>
        </Reveal>

        <footer className="t4__footer">
          <p className="t4__footer-logo">
            {bride} &amp; {groom}
          </p>
          <p className="t4__footer-note">{invitation.footer.note}</p>
        </footer>
      </div>
    </div>
  );
}
