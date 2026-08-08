import { useState } from "react";
import invitation from "../../data/invitation";
import useCountdown from "../../hooks/useCountdown";
import "./template2.css";

const STORAGE_KEY = "wedding-invitation-wishes";

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

export default function Template2() {
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
    <div className="t2">
      <div className="t2__card">
        <div className="t2__border">
          <div className="t2__inner">
            <section className="t2__section">
              <span className="t2__crescent" aria-hidden="true">☾</span>
              <p className="t2__bismillah">{invitation.bismillah}</p>
              <p className="t2__eyebrow">The Wedding Of</p>
              <h1 className="t2__names">
                {bride} <span className="t2__amp">&amp;</span> {groom}
              </h1>
              <p className="t2__date">
                {invitation.event.dayName}, {invitation.event.date}
              </p>
              <p className="t2__venue-line">{invitation.event.venueName}</p>
            </section>

            <section className="t2__section">
              <h2 className="t2__heading">{invitation.story.heading}</h2>
              <p className="t2__subheading">{invitation.story.subheading}</p>
              <div className="t2__divider" />
              <div className="t2__story-grid">
                {invitation.story.people.map((person) => (
                  <figure className="t2__person" key={person.name}>
                    <div className="t2__frame">
                      <img src={person.photo} alt={person.name} />
                    </div>
                    <figcaption>
                      <h3 className="t2__person-name">{person.name}</h3>
                      <p className="t2__person-tagline">{person.tagline}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section className="t2__section">
              <h2 className="t2__heading">{invitation.twoHearts.heading}</h2>
              <p className="t2__subheading">{invitation.twoHearts.subheading}</p>
              <div className="t2__frame t2__frame--wide">
                <img src={invitation.twoHearts.photo} alt="The couple together" />
              </div>
              <p className="t2__caption">{invitation.twoHearts.caption}</p>
            </section>

            <section className="t2__section">
              <h2 className="t2__heading">{invitation.invitationNote.heading}</h2>
              <div className="t2__note-box">
                <p className="t2__note-body">{invitation.invitationNote.body}</p>
              </div>
              <p className="t2__note-arabic">{invitation.invitationNote.arabic}</p>
              <p className="t2__note-translation">{invitation.invitationNote.translation}</p>
              <p className="t2__note-reference">{invitation.invitationNote.reference}</p>
            </section>

            <section className="t2__section">
              <h2 className="t2__heading">Counting Down to the Big Day</h2>
              {done ? (
                <p className="t2__caption">The celebration has begun — join us!</p>
              ) : (
                <div className="t2__countdown-grid">
                  {units.map((unit) => (
                    <div className="t2__countdown-unit" key={unit.label}>
                      <span className="t2__countdown-value">{pad(unit.value)}</span>
                      <span className="t2__countdown-label">{unit.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="t2__section">
              <h2 className="t2__heading">The Venue</h2>
              <p className="t2__venue-name">{invitation.event.venueName}</p>
              <p className="t2__venue-address">{invitation.event.venueAddress}</p>
              <p className="t2__venue-time">
                Join us for the ceremony, {invitation.event.time}
                <br />
                <span className="t2__venue-blessing">
                  {invitation.event.blessing} ({invitation.event.blessingTranslit})
                </span>
              </p>
              <a
                className="t2__btn"
                href={invitation.event.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Location on Google Maps
              </a>
            </section>

            <section className="t2__section">
              <h2 className="t2__heading">Send Your Blessings</h2>
              <p className="t2__subheading">
                Your warm words and prayers are the greatest gift you can send us.
              </p>

              {submitted ? (
                <div className="t2-form__thanks">
                  <h3>Thank You!</h3>
                  <p>
                    Your beautiful message has been sent to {bride} &amp; {groom}.
                  </p>
                  <button type="button" onClick={sendAnother} className="t2__btn">
                    Send Another Wish
                  </button>
                </div>
              ) : (
                <form className="t2-form" onSubmit={handleSubmit}>
                  <label className="t2-form__field">
                    <span>Your Full Name</span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="e.g. Ayesha Rahman"
                      required
                    />
                  </label>

                  <label className="t2-form__field">
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

                  <label className="t2-form__field">
                    <span>Your Wedding Wish &amp; Note</span>
                    <textarea
                      value={form.note}
                      onChange={handleChange("note")}
                      rows={4}
                      placeholder="Share your blessings..."
                      required
                    />
                  </label>

                  <button type="submit" className="t2__btn">
                    Submit Wedding Wish
                  </button>
                </form>
              )}
            </section>

            <footer className="t2__footer">
              <p>
                {bride} &amp; {groom} Wedding Invitation © {invitation.footer.year}
              </p>
              <p className="t2__footer-note">{invitation.footer.note}</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
