import invitation from "../data/invitation";
import Section from "./Section";
import { ArchFrame } from "./Ornaments";
import "./our-story.css";

export default function OurStory() {
  const { heading, subheading, people } = invitation.story;

  return (
    <Section id="our-story" heading={heading} subheading={subheading} tone="ivory">
      <div className="our-story__grid">
        {people.map((person) => (
          <figure className="our-story__person" key={person.name}>
            <ArchFrame>
              <img src={person.photo} alt={person.name} />
            </ArchFrame>
            <figcaption>
              <h3 className="our-story__name">{person.name}</h3>
              <p className="our-story__tagline">{person.tagline}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
