import PageHero from "../PageHero";
import { hero } from "@/content/contact/hero";

export default function Hero() {
  return (
    <PageHero
      eyebrow={hero.eyebrow}
      title={hero.title}
      description={hero.description}
    />
  );
}
