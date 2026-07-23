import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { profile } from '../data/portfolioData'
import { EMAILJS_CONFIG } from '../config/emailjs'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_CONFIG.publicKey }
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-surfaceLight/50 px-6 py-24 dark:bg-surfaceDark/40 lg:pl-32">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3" data-aos="fade-up">
          08 // Contact
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl" data-aos="fade-up">
          Let's Build Something
        </h2>
        <p className="mt-4 max-w-xl text-muted" data-aos="fade-up" data-aos-delay="100">
          Have a role, project, or just want to talk DSA and web dev? My inbox is open.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 lg:col-span-3"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-muted/25 bg-transparent px-4 py-3 outline-none transition-colors focus:border-signal"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-muted/25 bg-transparent px-4 py-3 outline-none transition-colors focus:border-signal"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full resize-none rounded-lg border border-muted/25 bg-transparent px-4 py-3 outline-none transition-colors focus:border-signal"
                placeholder="Tell me a bit about the opportunity or idea..."
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center gap-2 rounded-lg bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              <FiSend size={16} /> {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 font-mono text-sm text-trace">
                <FiCheck size={16} /> Message sent — thanks for reaching out! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 font-mono text-sm text-red-400">
                <FiAlertCircle size={16} /> Something went wrong. Please try again, or email me
                directly at {profile.email}.
              </p>
            )}
          </form>

          <div className="space-y-4 lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-xl border border-muted/15 p-4 transition-colors hover:border-signal/50"
            >
              <FiMail className="text-signal" /> {profile.email}
            </a>
            {profile.phone && (
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 rounded-xl border border-muted/15 p-4 transition-colors hover:border-signal/50"
              >
                <FiPhone className="text-signal" /> {profile.phone}
              </a>
            )}
            {profile.location && (
              <div className="flex items-center gap-3 rounded-xl border border-muted/15 p-4">
                <FiMapPin className="text-signal shrink-0" /> {profile.location}
              </div>
            )}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-muted/15 p-4 transition-colors hover:border-signal/50"
            >
              <FiGithub className="text-signal" /> GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-muted/15 p-4 transition-colors hover:border-signal/50"
            >
              <FiLinkedin className="text-signal" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
