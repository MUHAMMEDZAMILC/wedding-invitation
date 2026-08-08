import { useState } from "react";
import invitation from "../data/invitation";
import Section from "./Section";
import "./wishes-form.css";

const STORAGE_KEY = "wedding-invitation-wishes";

function saveWish(wish) {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    existing.push({ ...wish, submittedAt: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // localStorage may be unavailable (private browsing, etc.) — fail silently,
    // the guest still sees their thank-you confirmation.
  }
}

export default function WishesForm() {
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

  return (
    <Section
      id="wishes"
      heading="Send Your Blessings"
      subheading="Your warm words and prayers are the greatest gift you can send us."
      tone="ivory"
    >
      {submitted ? (
        <div className="wishes-form__thanks">
          <span className="wishes-form__thanks-icon" aria-hidden="true">
            🎉
          </span>
          <h3>Thank You!</h3>
          <p>
            Your beautiful message has been sent to {invitation.couple.bride} &amp;{" "}
            {invitation.couple.groom}.
          </p>
          <button type="button" onClick={sendAnother} className="wishes-form__again">
            Send Another Wish
          </button>
        </div>
      ) : (
        <form className="wishes-form" onSubmit={handleSubmit}>
          <label className="wishes-form__field">
            <span>Your Full Name</span>
            <input
              type="text"
              value={form.name}
              onChange={handleChange("name")}
              placeholder="e.g. Ayesha Rahman"
              required
            />
          </label>

          <label className="wishes-form__field">
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

          <label className="wishes-form__field">
            <span>Your Wedding Wish &amp; Note</span>
            <textarea
              value={form.note}
              onChange={handleChange("note")}
              rows={4}
              placeholder="Share your blessings..."
              required
            />
          </label>

          <button type="submit" className="wishes-form__submit">
            Submit Wedding Wish
          </button>
        </form>
      )}
    </Section>
  );
}
