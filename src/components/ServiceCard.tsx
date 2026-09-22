import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/content/services/services";
import { getServiceWhatsAppLink } from "@/lib/whatsapp";

export default function ServiceCard({
  service,
  detailed = false,
}: {
  service: Service;
  detailed?: boolean;
}) {
  const Icon = service.icon;

  return (
    <div
      id={service.slug}
      className="group flex h-full scroll-mt-24 flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon className="h-5.5 w-5.5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {service.description}
      </p>

      {detailed ? (
        <ul className="mt-4 space-y-2">
          {service.capabilities.map((capability) => (
            <li
              key={capability}
              className="flex items-start gap-2 text-sm text-slate-600"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto pt-5">
        <a
          href={getServiceWhatsAppLink(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          Ask about this service
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
