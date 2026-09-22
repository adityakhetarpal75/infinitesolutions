import ContactForm from "../ContactForm";
import { formPanel } from "@/content/contact/formPanel";

export default function FormPanel() {
  const { title, description } = formPanel;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
      <div className="mt-6">
        <ContactForm />
      </div>
    </div>
  );
}
