import useReveal from "../hooks/useReveal";
import { StarDivider } from "./Ornaments";
import "./section.css";

export default function Section({
  id,
  heading,
  subheading,
  tone = "ivory",
  children,
}) {
  const [ref, visible] = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`section section--${tone} ${visible ? "section--visible" : ""}`}
    >
      <div className="section__inner">
        {heading && (
          <div className="section__head">
            <h2 className="section__heading">{heading}</h2>
            {subheading && <p className="section__subheading">{subheading}</p>}
            <StarDivider tone={tone === "emerald" ? "gold" : "emerald"} />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
