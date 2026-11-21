import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Section from "../Section";
import { profile, socials } from "../../data";
import emailjs from "@emailjs/browser";

interface FormState {
  name: string;
  email: string;
  contact: string;
  subject: string;
  message: string;
}

const empty: FormState = { name: "", email: "", contact: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.contact.trim()) e.contact = "Contact is required";
    if (!form.subject.trim()) e.subject = "Subject is required";    
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

const submit = async (ev: React.FormEvent) => {
  ev.preventDefault();

  if (!validate()) return;

  const serviceId = import.meta.env.EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.EMAILJS_PUBLIC_KEY;

  try {
    setSent(false);

    await emailjs.send(
      serviceId,
      templateId,
      {
        name: form.name,
        email: form.email,
        contact: form.contact,
        subject: form.subject,
        message: form.message,
      },
      publicKey
    );

    setSent(true);
    setForm(empty);

    setTimeout(() => setSent(false), 4000);

  } catch (error) {
    console.error("Email send failed:", error);
    alert("Message is not sent, try again!");
  }
};

  const update = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const info = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: "Location", value: profile.location, href: "#" },
  ];

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-xl border bg-app px-4 py-3 text-sm text-main outline-none transition-colors focus:border-primary ${
      errors[field] ? "border-red-400" : "border-app"
    }`;

  return (
    <Section id="contact" eyebrow="Let's talk" title="Contact">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Info */}
        <div className="space-y-4 lg:col-span-2">
          <h3 className="font-display text-2xl font-bold text-main">Feel free to contact me!</h3>
          <p className="text-muted">
            Have a project in mind or just want to say hi? My inbox is always open and I'll get
            back to you as soon as possible.
          </p>

          {info.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 rounded-2xl bg-card p-4 shadow-md transition-transform hover:translate-x-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-dark dark:text-primary">
                <item.icon size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {item.label}
                </p>
                <p className="font-semibold text-main">{item.value}</p>
              </div>
            </a>
          ))}

          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-main shadow-md transition-colors hover:bg-primary hover:text-secondary"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl shadow-md">
            <iframe
               title="Delhi Map"
               src="https://maps.google.com/maps?q=NewDelhi&t=&z=11&ie=UTF8&iwloc=&output=embed"
               className="w-full h-44 border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 rounded-3xl bg-card p-7 shadow-xl lg:col-span-3"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-main">Name</label>
              <input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Diwakar Kumar"
                className={inputClass("name")}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-main">Email</label>
              <input
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="Diwakar123o@gmail.com"
                className={inputClass("email")}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-main">Subject</label>
            <input
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              placeholder="Project inquiry"
              className={inputClass("subject")}
            />
            {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-main">Contact</label>
            <input
              value={form.contact}
              onChange={(e) => update("contact", e.target.value)}
              placeholder="+91 1234567890"
              className={inputClass("contact")}
            />
            {errors.contact && <p className="mt-1 text-xs text-red-500">{errors.contact}</p>}

          </div>



          <div>
            <label className="mb-1.5 block text-sm font-semibold text-main">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Tell me about your project..."
              rows={5}
              className={`${inputClass("message")} resize-none`}
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-secondary shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02]"
          >
            {sent ? (
              <>
                <CheckCircle2 size={18} /> Message Sent!
              </>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
