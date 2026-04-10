import LandingHero from "./LandingHero";
import LandingPTN from "./LandingPTN";
import LandingTicket from "./LandingTicket";

export default function LandingWrapper() {
  return (
    <section>
      <div className="min-h-screen h-full items-center">
        <LandingHero />
        <LandingPTN />
      </div>
      <LandingTicket />
    </section>
  );
}
