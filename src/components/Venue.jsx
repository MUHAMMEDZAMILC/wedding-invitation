import invitation from "../data/invitation";
import Section from "./Section";
import "./venue.css";

export default function Venue() {
  const { venueName, venueAddress, time, mapsUrl, blessing, blessingTranslit } =
    invitation.event;

  return (
    <Section id="venue" heading="The Venue" tone="pale">
      <div className="venue">
        <h3 className="venue__name">{venueName}</h3>
        <p className="venue__address">{venueAddress}</p>
        <p className="venue__time">
          Join us for the ceremony, {time}
          <br />
          <span className="venue__blessing">
            {blessing} <em>({blessingTranslit})</em>
          </span>
        </p>
        <a
          className="venue__map-link"
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          View Location on Google Maps
        </a>
      </div>
    </Section>
  );
}
