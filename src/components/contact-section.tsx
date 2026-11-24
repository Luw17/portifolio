import { useActionState } from 'react'
import { Mail, Send } from 'lucide-react'
import { submitContact, type ContactState } from '@/lib/contact'
import { useLanguage } from '@/lib/i18n'
import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './brand-icons'

const initialState: ContactState = { status: 'idle' }

export function ContactSection() {
  const { t, ui } = useLanguage()
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  const channels = [
    profile.email ? { icon: Mail, label: profile.email, href: `mailto:${profile.email}` } : null,
    profile.github ? { icon: GithubIcon, label: 'GitHub', href: profile.github } : null,
    profile.linkedin ? { icon: LinkedinIcon, label: 'LinkedIn', href: profile.linkedin } : null,
    profile.whatsappUrl ? { icon: WhatsappIcon, label: 'WhatsApp', href: profile.whatsappUrl } : null,
  ].filter((c): c is NonNullable<typeof c> => c !== null)

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
      <SectionHeading path="~/contact" command="./send-message.sh" title={t(ui.sections.contact)} />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="text-pretty leading-relaxed text-muted-foreground">{t(ui.contact.intro)}</p>
          <ul className="flex flex-col gap-2">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-md border border-border bg-card/40 px-4 py-3 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <c.icon className="h-4 w-4 text-primary" />
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form action={formAction} className="flex flex-col gap-3 rounded-lg border border-border bg-card/40 p-5">
          {/* honeypot */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-muted-foreground">{t(ui.contact.name)}</span>
            <input
              name="name"
              required
              minLength={2}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-ring"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-muted-foreground">{t(ui.contact.email)}</span>
            <input
              name="email"
              type="email"
              required
              className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-ring"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-muted-foreground">{t(ui.contact.message)}</span>
            <textarea
              name="message"
              required
              minLength={5}
              rows={4}
              className="resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-ring"
            />
          </label>

          <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {pending ? t(ui.contact.sending) : t(ui.contact.send)}
          </button>

          {state.status === 'success' && (
            <p className="text-sm text-primary" role="status">
              {'> '}
              {t(ui.contact.success)}
            </p>
          )}
          {state.status === 'error' && (
            <p className="text-sm text-destructive" role="alert">
              {'> '}
              {t(ui.contact.error)}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
