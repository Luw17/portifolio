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
          <li key={`${exp.company}-${i}`} className="mb-8 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary" />
            <div className="rounded-lg border border-border bg-card/40 p-5 transition-colors hover:border-primary/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground">{t(exp.role)}</h3>
                <span className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary">
                  {t(exp.period)}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-muted-foreground">{exp.company}</p>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {t(exp.description)}
              </p>

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary">{'>'}</span>
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.stack && exp.stack.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded bg-secondary/50 px-2 py-0.5 text-xs text-primary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
