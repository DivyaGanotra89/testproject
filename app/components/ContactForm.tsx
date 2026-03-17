"use client";

import { useId, useMemo, useState } from "react";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export default function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>({ status: "idle" });

  const emailLooksValid = useMemo(() => {
    const v = email.trim();
    if (!v) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }, [email]);

  const canSubmit = useMemo(() => {
    if (state.status === "submitting") return false;
    return name.trim().length >= 2 && emailLooksValid && message.trim().length >= 10;
  }, [emailLooksValid, message, name, state.status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setState({ status: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setState({ status: "success" });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setState({ status: "error", message });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={nameId} className="text-sm font-medium text-slate-800">
            Name
          </label>
          <input
            id={nameId}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none ring-offset-2 transition focus:border-transparent focus:ring-2 focus:ring-[#2563EB]"
            required
            minLength={2}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor={emailId} className="text-sm font-medium text-slate-800">
            Email
          </label>
          <input
            id={emailId}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            inputMode="email"
            placeholder="you@company.com"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none ring-offset-2 transition focus:border-transparent focus:ring-2 focus:ring-[#2563EB]"
            required
          />
          {email.length > 0 && !emailLooksValid ? (
            <p className="text-xs text-amber-700">Please enter a valid email.</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor={messageId} className="text-sm font-medium text-slate-800">
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Tell us about your project (timeline, goals, budget range, etc.)"
          className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none ring-offset-2 transition focus:border-transparent focus:ring-2 focus:ring-[#2563EB]"
          required
          minLength={10}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.status === "submitting" ? "Sending..." : "Send message"}
        </button>

        {state.status === "success" ? (
          <p className="text-sm font-medium text-emerald-700">
            Thanks! We received your message.
          </p>
        ) : null}

        {state.status === "error" ? (
          <p className="text-sm font-medium text-rose-700">{state.message}</p>
        ) : null}
      </div>
    </form>
  );
}

