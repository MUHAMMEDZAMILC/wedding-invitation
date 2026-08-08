import invitation from "../../data/invitation";
import "./thumbnail.css";

export default function Thumbnail() {
  const { bride, groom } = invitation.couple;

  return (
    <div className="tmpl-thumb tmpl-thumb--emerald">
      <span className="tmpl-thumb__crescent">☾</span>
      <p className="tmpl-thumb__bismillah">{invitation.bismillah}</p>
      <p className="tmpl-thumb__names">
        {bride} <span className="tmpl-thumb__amp">&amp;</span> {groom}
      </p>
      <p className="tmpl-thumb__date">{invitation.event.date}</p>
    </div>
  );
}
