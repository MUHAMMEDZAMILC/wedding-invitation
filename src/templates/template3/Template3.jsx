import { useState } from "react";
import invitation from "../../data/invitation";
import useCountdown from "../../hooks/useCountdown";
import "./template3.css";

const STORAGE_KEY = "wedding-invitation-wishes";
const ASSETS = "/assets/template3";

const content = {
  eyebrow: "Together With Their Families",
  greeting: "Invite you to celebrate their wedding",
  mantra: "ॐ गं गणपतये नमः",
  mantraTranslit: "Om Gam Ganapataye Namah",
  story: {
    heading: "A Story of Two Souls",
    subheading: "Two families, one blessing — united in love and tradition.",
  },
  twoHearts: {
    heading: "Two Souls, One Journey",
    subheading: "Bound together by love, blessed by our elders.",
    caption: "Hand in hand, into a lifetime together",
  },
  note: {
    heading: "The Invitation",
    body:
      "With the blessings of our elders and the grace of the divine, we joyfully invite you to be part of our union. Your presence and good wishes would make this celebration truly complete.",
    shloka: "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः।",
    translation:
      "“Where women are honored, divinity blossoms there.”",
    reference: "— Manusmriti",
  },
  blessings: {
    heading: "Send Your Blessings",
    subheading: "Your warm wishes and blessings mean the world to us.",
  },
};

function pad(value) {
  return String(value).padStart(2, "0");
}

function saveWish(wish) {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    existing.push({ ...wish, submittedAt: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // localStorage may be unavailable — guest still sees the thank-you.
  }
}

function AssetImg({ src, alt, className, fallback = null }) {
  const [failed, setFailed] = useState(false);
  if (failed) return fallback;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export default function Template3() {
  const { bride, groom } = invitation.couple;
  const { days, hours, minutes, seconds, done } = useCountdown(invitation.event.isoDate);
  const [form, setForm] = useState({ name: "", relation: "", note: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.note.trim()) return;
    saveWish(form);
    setSubmitted(true);
  };

  const sendAnother = () => {
    setForm({ name: "", relation: "", note: "" });
    setSubmitted(false);
  };

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="t3">
      <div className="t3__card">
        <AssetImg src={`${ASSETS}/mandala.png`} alt="" className="t3__corner t3__corner--tl" />
        <AssetImg src={`${ASSETS}/mandala.png`} alt="" className="t3__corner t3__corner--tr" />
        <AssetImg src={`${ASSETS}/mandala.png`} alt="" className="t3__corner t3__corner--bottom" />

        <div className="t3__border">
          <div className="t3__inner">
            <section className="t3__section">
              <div className="t3__om">
                <AssetImg
                  src={`${ASSETS}/ganesha.png`}
                  alt="Ganesha"
                  fallback={<span>ॐ</span>}
                />
              </div>
              <p className="t3__mantra">{content.mantra}</p>
              <p className="t3__mantra-translit">{content.mantraTranslit}</p>
              <p className="t3__eyebrow">{content.eyebrow}</p>
              <h1 className="t3__names">
                {bride} <span className="t3__amp">&amp;</span> {groom}
              </h1>
              <p className="t3__date">
                {invitation.event.dayName}, {invitation.event.date}
              </p>
              <p className="t3__venue-line">{invitation.event.venueName}</p>
            </section>

            <section className="t3__section">
              <h2 className="t3__heading">{content.story.heading}</h2>
              <p className="t3__subheading">{content.story.subheading}</p>
              <div className="t3__divider">
                <AssetImg src={`${ASSETS}/divider.png`} alt="" />
              </div>
              <div className="t3__story-grid">
                {invitation.story.people.map((person) => (
                  <figure className="t3__person" key={person.name}>
                    <div className="t3__frame">
                      <img src={person.photo} alt={person.name} />
                    </div>
                    <figcaption>
                      <h3 className="t3__person-name">{person.name}</h3>
                      <p className="t3__person-tagline">{person.tagline}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section className="t3__section">
              <h2 className="t3__heading">{content.twoHearts.heading}</h2>
              <p className="t3__subheading">{content.twoHearts.subheading}</p>
              <div className="t3__frame t3__frame--wide">
                <img src={invitation.twoHearts.photo} alt="The couple together" />
              </div>
              <p className="t3__caption">{content.twoHearts.caption}</p>
            </section>

            <section className="t3__section">
              <h2 className="t3__heading">{content.note.heading}</h2>
              <div className="t3__note-box">
                <p className="t3__note-translation" style={{ marginTop: 0 }}>
                  {content.note.body}
                </p>
              </div>
              <p className="t3__note-shloka">{content.note.shloka}</p>
              <p className="t3__note-translation">{content.note.translation}</p>
              <p className="t3__note-reference">{content.note.reference}</p>
            </section>

            <section className="t3__section">
              <h2 className="t3__heading">Counting Down to the Big Day</h2>
              {done ? (
                <p className="t3__caption">The celebration has begun — join us!</p>
              ) : (
                <div className="t3__countdown-grid">
                  {units.map((unit) => (
                    <div className="t3__countdown-unit" key={unit.label}>
                      <span className="t3__countdown-value">{pad(unit.value)}</span>
                      <span className="t3__countdown-label">{unit.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="t3__section">
              <h2 className="t3__heading">The Venue</h2>
              <p className="t3__venue-name">{invitation.event.venueName}</p>
              <p className="t3__subheading">{invitation.event.venueAddress}</p>
              <p className="t3__venue-time">
                Join us for the ceremony, {invitation.event.time}
              </p>
              <a
                className="t3__btn"
                href={invitation.event.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Location on Google Maps
              </a>
            </section>

            <section className="t3__section">
              <h2 className="t3__heading">{content.blessings.heading}</h2>
              <p className="t3__subheading">{content.blessings.subheading}</p>

              {submitted ? (
                <div className="t3-form__thanks">
                  <h3>Thank You!</h3>
                  <p>
                    Your beautiful message has been sent to {bride} &amp; {groom}.
                  </p>
                  <button type="button" onClick={sendAnother} className="t3__btn">
                    Send Another Wish
                  </button>
                </div>
              ) : (
                <form className="t3-form" onSubmit={handleSubmit}>
                  <label className="t3-form__field">
                    <span>Your Full Name</span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="e.g. Priya Sharma"
                      required
                    />
                  </label>

                  <label className="t3-form__field">
                    <span>Your Relation</span>
                    <select value={form.relation} onChange={handleChange("relation")} required>
                      <option value="" disabled>
                        Select relation...
                      </option>
                      {invitation.wishesRelations.map((relation) => (
                        <option key={relation} value={relation}>
                          {relation}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="t3-form__field">
                    <span>Your Wedding Wish &amp; Note</span>
                    <textarea
                      value={form.note}
                      onChange={handleChange("note")}
                      rows={4}
                      placeholder="Share your blessings..."
                      required
                    />
                  </label>

                  <button type="submit" className="t3__btn">
                    Submit Wedding Wish
                  </button>
                </form>
              )}
            </section>

            <footer className="t3__footer">
              <p>
                {bride} &amp; {groom} Wedding Invitation © {invitation.footer.year}
              </p>
              <p className="t3__footer-note">{invitation.footer.note}</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
