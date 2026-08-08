import { useEffect, useState } from "react";

function getTimeParts(targetDate) {
  const total = Math.max(0, targetDate.getTime() - Date.now());
  const seconds = Math.floor(total / 1000) % 60;
  const minutes = Math.floor(total / (1000 * 60)) % 60;
  const hours = Math.floor(total / (1000 * 60 * 60)) % 24;
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds, done: total === 0 };
}

// Ticks once a second toward the given ISO date string.
export default function useCountdown(isoDate) {
  const [parts, setParts] = useState(() => getTimeParts(new Date(isoDate)));

  useEffect(() => {
    const target = new Date(isoDate);
    const interval = setInterval(() => {
      setParts(getTimeParts(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [isoDate]);

  return parts;
}
