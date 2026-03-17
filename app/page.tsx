import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Page() {
  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex items-center gap-3 font-semibold">
            <Image
              src="/ci_logo.webp"
              alt="Divya Test Company"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span>Divya Test Company</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a className="hover:text-slate-900" href="#about">
              About
            </a>
            <a className="hover:text-slate-900" href="#services">
              Services
            </a>
            <a className="hover:text-slate-900" href="#portfolio">
              Portfolio
            </a>
            <a className="hover:text-slate-900" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              Get a quote
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" />
            <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#F59E0B]/15 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
                Web Development Studio
                <span className="h-1 w-1 rounded-full bg-[#F59E0B]" />
                Modern. Fast. Mobile-first.
              </p>

              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Websites that look premium and convert visitors into customers.
              </h1>

              <p className="max-w-prose text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                Divya Test Company designs and builds responsive websites for teams that want
                clean UX, strong performance, and a reliable development partner.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                >
                  View work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  Contact us
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 text-sm">
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                  <p className="text-lg font-semibold text-slate-900">Mobile-first</p>
                  <p className="text-slate-600">Great on every screen</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                  <p className="text-lg font-semibold text-slate-900">Modern UI</p>
                  <p className="text-slate-600">Clean, on-brand design</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                  <p className="text-lg font-semibold text-slate-900">Fast builds</p>
                  <p className="text-slate-600">Performance focused</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">Project snapshot</p>
                  <span className="rounded-full bg-[#F59E0B]/15 px-3 py-1 text-xs font-semibold text-amber-900">
                    Ready in weeks
                  </span>
                </div>

                <div className="mt-6 grid gap-4">
                  {[
                    { label: "Discovery", value: "Goals, audience, and content" },
                    { label: "Design", value: "Modern UI that matches your brand" },
                    { label: "Build", value: "Responsive, accessible, fast" },
                    { label: "Launch", value: "Deploy + handoff + support" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#2563EB]" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                        <p className="text-sm text-slate-600">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-slate-200/70 bg-slate-50/60">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
                  About
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                  A web development partner built for modern teams.
                </h2>
                <p className="max-w-prose text-slate-600">
                  We focus on clarity, speed, and quality. From landing pages to full websites,
                  we build experiences that feel premium and perform reliably.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Modern stack",
                    desc: "Built with Next.js for speed and maintainability.",
                  },
                  {
                    title: "Accessible UX",
                    desc: "Keyboard-friendly, readable, and inclusive.",
                  },
                  {
                    title: "SEO-ready",
                    desc: "Solid metadata and clean structure.",
                  },
                  {
                    title: "On-brand",
                    desc: "Uses your primary and secondary colors consistently.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <p className="font-semibold text-slate-900">{card.title}</p>
                    <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-slate-200/70 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
                  Services
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                  Everything you need to ship a great site.
                </h2>
                <p className="max-w-prose text-slate-600">
                  Pick a package or mix-and-match based on your goals.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Request pricing
              </a>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Website Design",
                  desc: "Modern layouts, clear typography, and on-brand visuals.",
                },
                {
                  title: "Next.js Development",
                  desc: "Fast, maintainable builds with strong UX foundations.",
                },
                {
                  title: "Performance & SEO",
                  desc: "Technical basics that help you rank and load quickly.",
                },
              ].map((svc) => (
                <div
                  key={svc.title}
                  className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-lg font-semibold text-slate-900">{svc.title}</p>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F59E0B]/15 text-amber-900">
                      ★
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{svc.desc}</p>
                  <p className="mt-5 text-sm font-semibold text-[#2563EB]">Learn more →</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="border-t border-slate-200/70 bg-slate-50/60">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
                Portfolio
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Recent work (sample layout)
              </h2>
              <p className="max-w-prose text-slate-600">
                Replace these cards with real projects once available.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                { name: "Marketing Site", tag: "Next.js + Tailwind" },
                { name: "Product Landing", tag: "Conversion-focused" },
                { name: "Portfolio Refresh", tag: "Modern + minimal" },
              ].map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">{p.name}</p>
                    <span className="rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                      Case study
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{p.tag}</p>
                  <div className="mt-6 h-28 rounded-xl bg-gradient-to-br from-[#2563EB]/15 via-white to-[#F59E0B]/20" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200/70 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
                  Contact
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                  Tell us what you’re building.
                </h2>
                <p className="max-w-prose text-slate-600">
                  Share your goals and timeline. We’ll reply with next steps and a clear plan.
                </p>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">Typical deliverables</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#F59E0B]" />
                      Responsive pages for Home, About, Services, Portfolio, Contact
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#F59E0B]" />
                      Modern UI with your brand colors
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#F59E0B]" />
                      Contact form wired to an API endpoint
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <ContactForm />
                <p className="mt-4 text-xs text-slate-500">
                  This form submits to <span className="font-semibold">/api/contact</span>. Hook
                  it up to email/CRM anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/70 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Divya Test Company. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm font-medium text-slate-700">
            <a className="hover:text-slate-900" href="#services">
              Services
            </a>
            <a className="hover:text-slate-900" href="#portfolio">
              Portfolio
            </a>
            <a className="hover:text-slate-900" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}