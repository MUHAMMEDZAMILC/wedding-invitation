import invitation from "../data/invitation";
import Section from "./Section";
import useCountdown from "../hooks/useCountdown";
import "./countdown.css";

function pad(value) {
  return String(value).padStart(2, "0");
}

export default function Countdown() {
  const { days, hours, minutes, seconds, done } = useCountdown(
    invitation.event.isoDate
  );

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <Section id="countdown" heading="Counting Down to the Big Day" tone="ivory">
      {done ? (
        <p className="countdown__done">The celebration has begun — join us!</p>
      ) : (
        <div className="countdown__grid">
          {units.map((unit) => (
            <div className="countdown__unit" key={unit.label}>
              <span className="countdown__value">{pad(unit.value)}</span>
              <span className="countdown__label">{unit.label}</span>
            </div>
          ))}
        </div>
      )}
      <p className="countdown__date">
        {invitation.event.date}, {invitation.event.dayName}
      </p>
    </Section>
  );
}
