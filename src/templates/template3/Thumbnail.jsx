import invitation from "../../data/invitation";
import "./thumbnail3.css";

export default function Thumbnail3() {
  const { bride, groom } = invitation.couple;

  return (
    <div className="tmpl3-thumb">
      <div className="tmpl3-thumb__border">
        <span className="tmpl3-thumb__om">ॐ</span>
        <p className="tmpl3-thumb__eyebrow">Together With Their Families</p>
        <p className="tmpl3-thumb__names">
          {bride} <span className="tmpl3-thumb__amp">&amp;</span> {groom}
        </p>
        <p className="tmpl3-thumb__date">{invitation.event.date}</p>
      </div>
    </div>
  );
}
