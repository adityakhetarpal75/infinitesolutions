import { MapPin } from "lucide-react";
import PageHero from "../PageHero";
import { siteConfig } from "@/lib/config";
import { hero } from "@/content/about/hero";

export default function Hero() {
  return (
    <PageHero
      eyebrow={hero.eyebrow}
      title={hero.title}
      meta={
        <>
          <MapPin className="h-4 w-4 text-brand-400" />
          {siteConfig.location}
        </>
      }
    />
  );
}
