import invitation from "../data/invitation";
import { CrescentStar, StarDivider } from "./Ornaments";
import "./intro-gate.css";

export default function IntroGate({ onOpen, closing }) {
  return (
    <div className={`intro-gate ${closing ? "intro-gate--closing" : ""}`}>
      <div className="intro-gate__pattern" aria-hidden="true" />
      <CrescentStar className="intro-gate__crescent" />
      <p className="intro-gate__bismillah">{invitation.bismillah}</p>
      <StarDivider tone="gold" />
      <p className="intro-gate__label">The Wedding Of</p>
      <h1 className="intro-gate__names">
        {invitation.couple.bride}
        <span className="intro-gate__amp">&amp;</span>
        {invitation.couple.groom}
      </h1>
      <p className="intro-gate__date">{invitation.event.date}</p>
      <button type="button" className="intro-gate__button" onClick={onOpen}>
        Open Invitation
      </button>
    </div>
  );
}
