import LandingHero from "./LandingHero";
import LandingPTN from "./LandingPTN";
import LandingFeatures from "./LandingFeatures";
import LandingTicket from "./LandingTicket";
import LandingTestimonials from "./LandingTestimonials";
import LandingFAQ from "./LandingFAQ";
import LandingCTA from "./LandingCTA";
import LandingFooter from "./LandingFooter";

export default function LandingWrapper() {
  return (
    <main>
      <LandingHero />
      <LandingPTN />
      <LandingFeatures />
      <LandingTicket />
      <LandingTestimonials />
      <LandingFAQ />
      <LandingCTA />
      <LandingFooter />
    </main>
  );
}
