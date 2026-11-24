import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { profile } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from './brand-icons'

export function HeroSection() {
  const { t, ui } = useLanguage()

  return (
    <section id="top" className="bg-grid relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="relative mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-28">
        {/* terminal window */}
        <div className="mx-auto max-w-2xl rounded-lg border border-border bg-card/70 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-primary/40" />
            <span className="h-3 w-3 rounded-full bg-primary/70" />
            <span className="ml-2 text-xs text-muted-foreground">whoami — bash</span>
          </div>
          <div className="space-y-4 p-6 md:p-8">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">$</span> whoami
            </p>
            <div>
              <p className="text-sm text-muted-foreground">{t(ui.hero.greeting)}</p>
              <h1 className="text-glow mt-1 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg text-primary md:text-xl">{t(profile.role)}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {t(profile.location)}
              </span>
              {profile.available && (
                <span className="flex items-center gap-1.5 text-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  {t(ui.hero.available)}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t(ui.hero.cta)}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {t(ui.hero.ctaSecondary)}
              </a>
            </div>

            <div className="flex items-center gap-4 border-t border-border pt-4 text-muted-foreground">
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary">
                  <GithubIcon className="h-5 w-5" />
                </a>
              )}
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              )}
              {profile.email && (
                <a href={`mailto:${profile.email}`} aria-label="E-mail" className="transition-colors hover:text-primary">
                  <Mail className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
