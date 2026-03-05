"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/contactSchema";
import { site } from "@/data/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = () => {
    setSubmitted(true);
    reset();
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: open mailto
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold text-[var(--color-foreground)] sm:text-3xl">
          Get in touch
        </h2>

        {submitted ? (
          <div
            className="rounded-xl border border-[var(--color-primary)] bg-[var(--color-bg-elevated)] p-8 text-center"
            role="status"
            aria-live="polite"
          >
            <p className="text-lg font-medium text-[var(--color-foreground)]">
              Thanks! I&apos;ll get back to you.
            </p>
            <p className="mt-2 text-sm text-[var(--color-foreground-muted)]">
              (This is a demo — no message was sent.)
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-[var(--color-foreground)]">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full rounded-lg border border-[var(--color-bg-elevated)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                placeholder="Your name"
                autoComplete="name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-[var(--color-foreground)]">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full rounded-lg border border-[var(--color-bg-elevated)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                placeholder="you@example.com"
                autoComplete="email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-[var(--color-foreground)]">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className="w-full resize-y rounded-lg border border-[var(--color-bg-elevated)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[var(--color-primary)] py-3 font-semibold text-[var(--color-accent-dark)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
            >
              Send message
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-[var(--color-muted)]">Or copy my email</p>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[var(--color-bg-elevated)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)] hover:bg-[var(--color-primary)] hover:text-[var(--color-accent-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
          >
            {site.email}
            {copied ? (
              <span className="text-xs text-[var(--color-primary)]">Copied!</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
