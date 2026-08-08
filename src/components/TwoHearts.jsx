import invitation from "../data/invitation";
import Section from "./Section";
import { ArchFrame } from "./Ornaments";
import "./two-hearts.css";

export default function TwoHearts() {
  const { heading, subheading, photo, caption } = invitation.twoHearts;
  const { bride, groom } = invitation.couple;

  return (
    <Section id="two-hearts" heading={heading} subheading={subheading} tone="pale">
      <div className="two-hearts">
        <ArchFrame className="two-hearts__frame">
          <img src={photo} alt={`${bride} and ${groom} together`} />
        </ArchFrame>
        <p className="two-hearts__caption">♥ {caption}</p>
      </div>
    </Section>
  );
}
