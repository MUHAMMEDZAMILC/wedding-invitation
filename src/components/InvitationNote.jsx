import invitation from "../data/invitation";
import Section from "./Section";
import "./invitation-note.css";

export default function InvitationNote() {
  const { heading, body, arabic, translation, reference } =
    invitation.invitationNote;
  const { bride, groom } = invitation.couple;

  return (
    <Section id="invitation-note" heading={heading} tone="emerald">
      <p className="invitation-note__body">{body}</p>
      <blockquote className="invitation-note__quote">
        <p className="invitation-note__arabic">{arabic}</p>
        <p className="invitation-note__translation">{translation}</p>
        <cite className="invitation-note__reference">{reference}</cite>
      </blockquote>
      <p className="invitation-note__signature">
        {bride} &amp; {groom}
      </p>
    </Section>
  );
}
