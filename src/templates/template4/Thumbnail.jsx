import invitation from "../../data/invitation";
import "./thumbnail4.css";

export default function Thumbnail4() {
  const { bride, groom } = invitation.couple;

  return (
    <div className="tmpl4-thumb">
      <img
        src={invitation.twoHearts.photo}
        alt=""
        className="tmpl4-thumb__img"
      />
      <div className="tmpl4-thumb__overlay">
        <p className="tmpl4-thumb__eyebrow">We're Getting Married</p>
        <p className="tmpl4-thumb__names">
          {bride} &amp; {groom}
        </p>
        <p className="tmpl4-thumb__date">{invitation.event.date}</p>
      </div>
    </div>
  );
}
