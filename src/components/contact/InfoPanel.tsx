import { Mail, MapPin, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/lib/config";
import { getConsultationWhatsAppLink, getWhatsAppLink } from "@/lib/whatsapp";
import { infoPanel } from "@/content/contact/infoPanel";

export default function InfoPanel() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          {infoPanel.detailsTitle}
        </h2>
        <ul className="mt-4 space-y-4 text-sm text-slate-600">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
            <span>{siteConfig.location}</span>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-brand-700"
            >
              {siteConfig.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <PhoneCall className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
            <span>{siteConfig.phoneDisplay}</span>
          </li>
          <li className="flex items-start gap-3">
            <PhoneCall className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
            <span>{siteConfig.phoneDisplaySecondary}</span>
          </li>
        </ul>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          {infoPanel.whatsappTitle}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          {infoPanel.whatsappDescription}
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90"
          >
            <FaWhatsapp className="h-4 w-4" />
            {infoPanel.whatsappButtonLabel}
          </a>
          <a
            href={getConsultationWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            {infoPanel.consultationButtonLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
