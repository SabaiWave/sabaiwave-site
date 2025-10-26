import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { flags } from "@/lib/flags";

const HomePage: React.FC = () => {
  return (
    <>
      {flags.SHOW_HERO && <Hero />}

      {flags.SHOW_LOGOS && <Logos />}

      <Container>
        {flags.SHOW_BENEFITS && <Benefits />}

        {flags.SHOW_PRICING && (
          <Section
            id="pricing"
            title="Pricing"
            description="Simple, transparent pricing. No surprises."
          >
            <Pricing />
          </Section>
        )}

        {flags.SHOW_TESTIMONIALS && (
          <Section
            id="testimonials"
            title="What Our Clients Say"
            description="Hear from those who have partnered with us."
          >
            <Testimonials />
          </Section>
        )}

        {flags.SHOW_FAQ && <FAQ />}

        {flags.SHOW_STATS && <Stats />}

        {flags.SHOW_CTA && <CTA />}
      </Container>
    </>
  );
};

export default HomePage;
