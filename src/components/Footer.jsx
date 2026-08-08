import invitation from "../data/invitation";
import { StarDivider } from "./Ornaments";
import "./footer.css";

export default function Footer() {
  const { bride, groom } = invitation.couple;

  return (
    <footer className="footer">
      <StarDivider tone="gold" />
      <p className="footer__names">
        {bride} &amp; {groom} Wedding Invitation © {invitation.footer.year}
      </p>
      <p className="footer__note">{invitation.footer.note}</p>
    </footer>
  );
}
