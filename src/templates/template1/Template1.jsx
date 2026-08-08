import { useRef, useState } from "react";
import IntroGate from "../../components/IntroGate";
import MusicPlayer from "../../components/MusicPlayer";
import Hero from "../../components/Hero";
import OurStory from "../../components/OurStory";
import TwoHearts from "../../components/TwoHearts";
import InvitationNote from "../../components/InvitationNote";
import Countdown from "../../components/Countdown";
import Venue from "../../components/Venue";
import WishesForm from "../../components/WishesForm";
import Footer from "../../components/Footer";
import "../../components/ornaments.css";

export default function Template1() {
  const [opened, setOpened] = useState(false);
  const [closingGate, setClosingGate] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setClosingGate(true);
    audioRef.current?.play().catch(() => {});
    window.setTimeout(() => setOpened(true), 700);
  };

  return (
    <>
      {!opened && <IntroGate onOpen={handleOpen} closing={closingGate} />}

      <main className="page" aria-hidden={!opened}>
        <Hero />
        <OurStory />
        <TwoHearts />
        <InvitationNote />
        <Countdown />
        <Venue />
        <WishesForm />
        <Footer />
      </main>

      <MusicPlayer ref={audioRef} />
    </>
  );
}
