import invitation from "../../data/invitation";
import "./thumbnail2.css";

export default function Thumbnail2() {
  const { bride, groom } = invitation.couple;

  return (
    <div className="tmpl2-thumb">
      <div className="tmpl2-thumb__border">
        <span className="tmpl2-thumb__crescent">☾</span>
        <p className="tmpl2-thumb__bismillah">{invitation.bismillah}</p>
        <p className="tmpl2-thumb__names">
          {bride} <span className="tmpl2-thumb__amp">&amp;</span> {groom}
        </p>
        <p className="tmpl2-thumb__date">{invitation.event.date}</p>
      </div>
    </div>
  );
}
