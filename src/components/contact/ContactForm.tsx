"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";
import { events } from "@/data/content";
import { siteConfig } from "@/data/site";

const subjects = [
  { value: "general", label: "General enquiry" },
  { value: "membership", label: "Membership" },
  { value: "cpd", label: "CPD & education" },
  { value: "journal", label: "Journal & publications" },
  { value: "media", label: "Media & press" },
  ...events.map((e) => ({ value: e.slug, label: `Event: ${e.title}` })),
];

const fieldClass =
  "mt-2 w-full rounded-xl border-0 bg-surface px-4 py-3.5 text-ink ring-1 ring-line transition-shadow placeholder:text-muted/70 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none";

/**
 * Frontend-only form: there is no backend yet, so on submit we open the
 * visitor's email client with the message pre-filled.
 */
export function ContactForm() {
  const params = useSearchParams();
  const requested = params.get("subject");
  const initialSubject = subjects.some((s) => s.value === requested) ? requested! : "general";
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = subjects.find((s) => s.value === data.get("subject"))?.label ?? "Enquiry";
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "-"}\n\n${data.get("message")}`;
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`[BPS Website] ${subject}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center rounded-3xl bg-white p-12 text-center ring-1 ring-line"
          role="status"
        >
          <CheckCircle2 className="size-16 text-aqua-500" aria-hidden />
          <h3 className="mt-6 text-2xl font-bold">Thank you!</h3>
          <p className="mt-2 max-w-sm text-muted">
            Your email app should open with your message ready to send. Our secretariat usually replies within two
            working days.
          </p>
          <button type="button" onClick={() => setSent(false)} className="mt-8 font-semibold text-brand-700 hover:underline">
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line sm:grid-cols-2 sm:p-10"
        >
          <label className="text-sm font-semibold text-ink">
            Full name
            <input name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
          </label>
          <label className="text-sm font-semibold text-ink">
            Email
            <input name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@example.com" />
          </label>
          <label className="text-sm font-semibold text-ink">
            Phone <span className="font-normal text-muted">(optional)</span>
            <input name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="+880" />
          </label>
          <label className="text-sm font-semibold text-ink">
            Subject
            <select name="subject" defaultValue={initialSubject} className={fieldClass}>
              {subjects.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold text-ink sm:col-span-2">
            Message
            <textarea name="message" required rows={5} className={fieldClass} placeholder="How can we help?" />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-800"
            >
              Send message
              <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
