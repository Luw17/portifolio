import { useLanguage } from '@/lib/i18n'
import { experiences } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function ExperienceSection() {
  const { t, ui } = useLanguage()
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
      <SectionHeading
        path="~/experience"
        command="git log --oneline"
        title={t(ui.sections.experience)}
      />
      <ol className="relative border-l border-border pl-6">
        {experiences.map((exp, i) => (
          <li key={i} className="mb-8 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary" />
            <div className="rounded-lg border border-border bg-card/40 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground">{t(exp.role)}</h3>
                <span className="text-xs text-primary">{t(exp.period)}</span>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{exp.company}</p>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {t(exp.description)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
