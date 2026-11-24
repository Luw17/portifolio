import { useLanguage } from '@/lib/i18n'
import { skills } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function StackSection() {
  const { t, ui } = useLanguage()
  return (
    <section id="stack" className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
      <SectionHeading path="~/stack" command="ls -la skills/" title={t(ui.sections.stack)} />
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category.en}
            className="rounded-lg border border-border bg-card/40 p-5 transition-colors hover:border-primary/50"
          >
            <h3 className="mb-4 text-sm font-semibold text-primary">
              <span className="text-muted-foreground/60">{'// '}</span>
              {t(group.category)}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-border bg-secondary/50 px-2.5 py-1 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
