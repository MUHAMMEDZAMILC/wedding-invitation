import { forwardRef, useState } from "react";
import invitation from "../data/invitation";
import "./music-player.css";

// The <audio> element is controlled from App (it starts playback the
// moment the intro gate is opened, satisfying browser autoplay rules).
// This component just renders the element plus a floating toggle.
const MusicPlayer = forwardRef(function MusicPlayer(_props, ref) {
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = ref.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={ref}
        src={invitation.music.src}
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        className={`music-toggle ${playing ? "music-toggle--playing" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        title={invitation.music.label}
      >
        <span className="music-toggle__disc">
          <span className="music-toggle__dot" />
        </span>
      </button>
    </>
  );
});

export default MusicPlayer;
