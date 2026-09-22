import PageHero from "../PageHero";
import { hero } from "@/content/projects/hero";

export default function Hero() {
  return (
    <PageHero
      eyebrow={hero.eyebrow}
      title={hero.title}
      description={hero.description}
    />
  );
}
