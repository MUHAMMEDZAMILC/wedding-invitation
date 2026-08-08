import invitation from "../data/invitation";
import { CrescentStar, StarDivider } from "./Ornaments";
import "./hero.css";

export default function Hero() {
  const { bismillah, greeting, couple, event } = invitation;

  return (
    <header className="hero">
      <CrescentStar className="hero__crescent" />
      <p className="hero__bismillah">{bismillah}</p>
      <p className="hero__greeting">{greeting}</p>
      <h1 className="hero__names">
        {couple.bride}
        <span className="hero__amp">&amp;</span>
        {couple.groom}
      </h1>
      <StarDivider tone="gold" />
      <p className="hero__date">
        {event.dayName}, {event.date}
      </p>
      <p className="hero__venue">{event.venueName}</p>
    </header>
  );
}
