import { useState, type FormEvent } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircleMore,
  PhoneCall,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'

import { aboutPoints, advantages, contactDetails, heroStats, liveSchedule, navItems } from './data/site'
import { professionalServices, proBonoServices } from './data/services'
import { faqs } from './data/faq'
import { contactInfo } from './data/contact'

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [toastVisible, setToastVisible] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setToastVisible(true)
    window.setTimeout(() => setToastVisible(false), 2200)
  }

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <header className="sticky top-0 z-50 border-b border-[#d9d4cc] bg-white/95 backdrop-blur-sm">
        <div className="section-shell flex items-center justify-between gap-6 py-4">
          <a href="#home" className="flex items-center" aria-label="Dharba Law Firm home">
            <div className="font-heading text-2xl font-bold tracking-[0.08em] text-[var(--color-brand-950)] sm:text-3xl">
              DHARBA
            </div>
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-sm px-4 py-2 text-sm font-semibold transition ${
                  item.label === 'Tentang'
                    ? 'bg-[var(--color-brand-950)] text-white'
                    : 'text-[var(--color-brand-950)] hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
            className="hidden items-center gap-2 rounded-sm border border-[var(--color-brand-950)] px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--color-brand-950)] transition hover:bg-[var(--color-brand-950)] hover:text-white md:flex"
          >
            <PhoneCall size={16} />
            {contactDetails.phone}
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden bg-[var(--color-bg)]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[var(--color-brand-950)]/80" />

          <div className="section-shell relative py-20 md:py-28 lg:py-32">
            <div className="max-w-3xl text-white">
              <span className="mb-5 inline-block border border-white/30 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-white/80">
                Apa yang bisa kami bantu?
              </span>

              <h1 className="font-heading text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.06em] md:text-6xl xl:text-7xl">
                <span className="text-[var(--color-gold)]">Hukum</span> yang lebih jelas untuk Anda.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
                Dharba Law Firm membantu klien dengan pendampingan hukum yang sederhana, responsif, dan mudah dijangkau, baik untuk kebutuhan pribadi, keluarga, bisnis, maupun bantuan hukum yang lebih luas.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={contactDetails.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--color-gold)] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-brand-950)] transition hover:translate-y-[-1px]"
                >
                  Konsultasi via WhatsApp
                  <ArrowRight size={16} />
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/35 bg-transparent px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[var(--color-brand-950)]"
                >
                  Tanya Gratis di TikTok Live
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-brand-950)] py-6 text-white">
          <div className="section-shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border border-white/10 bg-white/5 p-5 text-center">
                <div className="mb-2 flex justify-center text-[var(--color-gold)]">
                  <BadgeCheck size={18} />
                </div>
                <div className="font-heading text-3xl font-semibold tracking-[-0.05em]">{stat.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section-block bg-[var(--color-bg)]">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="overflow-hidden border border-[#d9d4cc] bg-[#f1efe9]">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
                alt="Advokat sedang berdiskusi"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="section-kicker">Tentang Kami</p>
              <h2 className="section-title mt-3">
                <span className="text-[var(--color-brand-700)]">Membuat</span> hukum lebih mudah diakses.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-700">
                Dharba Law Firm lahir dari kebutuhan untuk menghadirkan layanan hukum yang lebih manusiawi, lebih mudah dipahami, dan lebih fleksibel untuk masyarakat serta pelaku usaha. Berdiri sejak 2023, kami hadir sebagai firma yang menggabungkan kepastian hukum, kejelasan proses, dan pelayanan yang dekat dengan kebutuhan klien.
              </p>

              <div className="mt-8 space-y-4">
                {aboutPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-slate-800">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-sm bg-[var(--color-brand-950)] text-white">
                      <ShieldCheck size={16} />
                    </div>
                    <p className="text-base leading-7">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-block bg-[#f3f1ed]">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-kicker">Bidang Praktik</p>
              <h2 className="section-title mt-3">
                <span className="text-[var(--color-brand-700)]">Layanan</span> yang siap mendampingi.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {professionalServices.map((service) => (
                <article key={service.title} className="overflow-hidden border border-[#ddd5cb] bg-white">
                  <div className="relative h-52 overflow-hidden">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                    <div className="absolute left-4 top-4 rounded-sm bg-[var(--color-brand-950)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                      {service.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl font-semibold uppercase tracking-[-0.04em] text-[var(--color-brand-950)]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {proBonoServices.map((service) => (
                <article key={service.title} className="flex overflow-hidden border border-[#ddd5cb] bg-white">
                  <div className="w-1/3">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="mb-3 inline-block rounded-sm bg-[var(--color-brand-700)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                      {service.tag}
                    </div>
                    <h3 className="font-heading text-xl font-semibold uppercase tracking-[-0.04em] text-[var(--color-brand-950)]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="advantages" className="section-block bg-white">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-kicker">Keunggulan</p>
              <h2 className="section-title mt-3">
                <span className="text-[var(--color-brand-700)]">Pendekatan</span> yang fleksibel dan dekat dengan klien.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {advantages.map((item, index) => (
                <div key={item.title} className="border border-[#ddd5cb] bg-[#f8f5f2] p-8 text-left">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--color-brand-950)] text-[var(--color-gold)]">
                    {index === 0 ? <Scale size={20} /> : index === 1 ? <Clock3 size={20} /> : <Users size={20} />}
                  </div>
                  <h3 className="font-heading text-2xl font-semibold uppercase tracking-[-0.04em] text-[var(--color-brand-950)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-sm border border-[#d7d1c6] bg-[var(--color-brand-950)] p-8 text-white md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="section-kicker !text-[var(--color-gold)]">TikTok Live</p>
                  <h3 className="mt-3 font-heading text-3xl font-semibold uppercase tracking-[-0.05em]">
                    Tanya jawab hukum secara langsung.
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-8 text-slate-200">{liveSchedule}</p>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-sm bg-[var(--color-gold)] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-brand-950)] transition hover:translate-y-[-1px]"
                  >
                    <MessageCircleMore size={18} />
                    Ikuti Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-block bg-[#f3f1ed]">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-kicker">FAQ</p>
              <h2 className="section-title mt-3">
                <span className="text-[var(--color-brand-700)]">Pertanyaan</span> yang sering diajukan.
              </h2>
            </div>

            <div className="mx-auto mt-12 max-w-4xl space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div key={faq.question} className="overflow-hidden border border-[#ddd5cb] bg-white">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                    >
                      <span className="font-heading text-base font-semibold uppercase tracking-[0.08em] text-[var(--color-brand-950)] md:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-sm bg-[var(--color-brand-950)] text-white transition ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        <ChevronDown size={16} />
                      </span>
                    </button>
                    {isOpen && <p className="border-t border-[#eae4dc] px-5 py-4 text-base leading-7 text-slate-700 md:px-6">{faq.answer}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section-block bg-white">
          <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="section-kicker">Kontak</p>
              <h2 className="section-title mt-3">
                <span className="text-[var(--color-brand-700)]">Hubungi</span> kami untuk langkah yang tepat.
              </h2>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-sm bg-[var(--color-brand-950)] text-white">
                    <MapPin size={18} />
                  </div>
                  <p className="max-w-md text-base leading-7">{contactInfo.address}</p>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[var(--color-brand-950)] text-white">
                    <PhoneCall size={18} />
                  </div>
                  <p className="text-base">{contactInfo.whatsapp}</p>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[var(--color-brand-950)] text-white">
                    <Mail size={18} />
                  </div>
                  <p className="text-base">{contactInfo.email}</p>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[var(--color-brand-950)] text-white">
                    <Building2 size={18} />
                  </div>
                  <p className="text-base">TikTok: {contactInfo.tiktok}</p>
                </div>
              </div>

              <div className="mt-8 overflow-hidden border border-[#ddd5cb]">
                <iframe
                  title="Lokasi Dharba Law Firm"
                  src={contactInfo.mapsEmbed}
                  className="h-[260px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-sm border border-[#ddd5cb] bg-[#f8f5f2] p-6 md:p-8">
              <h3 className="font-heading text-2xl font-semibold uppercase tracking-[-0.04em] text-[var(--color-brand-950)]">
                Form Konsultasi
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Kirim kebutuhan Anda dan kami akan segera menghubungi Anda untuk langkah awal yang tepat.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-950)]">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    className="w-full rounded-sm border border-[#d5cfc4] bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-[var(--color-brand-700)]"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-950)]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    className="w-full rounded-sm border border-[#d5cfc4] bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-[var(--color-brand-700)]"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-950)]">
                    Topik Masalah
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Perceraian, bisnis, keluarga, pidana"
                    className="w-full rounded-sm border border-[#d5cfc4] bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-[var(--color-brand-700)]"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-950)]">
                    Pesan
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Jelaskan kebutuhan Anda secara ringkas"
                    className="w-full rounded-sm border border-[#d5cfc4] bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-[var(--color-brand-700)]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--color-brand-950)] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[var(--color-brand-700)]"
                >
                  Kirim Permintaan
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d9d4cc] bg-[var(--color-brand-950)] py-10 text-white">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-heading text-2xl font-semibold uppercase tracking-[0.08em] text-white">DHARBA</div>
            <div className="font-heading text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Law Firm
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">Tentang</a>
            <a href="#services" className="hover:text-white">Layanan</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Kontak</a>
          </div>
        </div>
      </footer>

      <a
        href={contactDetails.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Konsultasi WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircleMore size={26} />
      </a>

      {toastVisible && (
        <div className="fixed bottom-24 right-5 z-[60] rounded-sm border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 shadow-md">
          Pesan berhasil dikirim.
        </div>
      )}
    </div>
  )
}

export default App
