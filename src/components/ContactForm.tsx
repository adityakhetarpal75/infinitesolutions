"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/config";
import { services } from "@/content/services/services";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

/**
 * Client-side contact form.
 *
 * This project does not include a backend or email-sending service yet, so
 * on submit the form opens the visitor's email app with a pre-filled message
 * addressed to siteConfig.email. This is honest about what actually happens
 * (no email is silently "sent" from a server that doesn't exist).
 *
 * To connect a real email service later, replace the `handleSubmit` body
 * with a call to your API route / email provider (e.g. Resend, SendGrid).
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState): Errors {
    const nextErrors: Errors = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim())
      nextErrors.message = "Please add a short message.";

    return nextErrors;
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const subject = `New inquiry from ${form.name}${
      form.company ? ` (${form.company})` : ""
    }`;
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.company ? `Company: ${form.company}` : null,
      form.service ? `Service interested in: ${form.service}` : null,
      "",
      form.message,
    ].filter(Boolean);

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  const inputClasses =
    "block w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your full name"
          />
          {errors.name ? (
            <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@company.com"
          />
          {errors.email ? (
            <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Optional"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-slate-700"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Optional"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-slate-700"
        >
          Service interested in
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select a service (optional)</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Tell us a bit about what you need help with."
        />
        {errors.message ? (
          <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 sm:w-auto"
      >
        Send Inquiry
      </button>

      <p className="text-xs leading-relaxed text-slate-500">
        This form opens your email app with your message pre-filled and
        addressed to {siteConfig.email}. No message is sent automatically
        from a server.
      </p>

      {submitted ? (
        <p className="text-sm font-medium text-green-700">
          Your email app should have opened. If it didn&apos;t, you can email
          us directly at {siteConfig.email}.
        </p>
      ) : null}
    </form>
  );
}
