import { useLanguage } from '@/lib/i18n'
import { about } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function AboutSection() {
  const { t, ui } = useLanguage()
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
      <SectionHeading path="~/about" command="cat about.md" title={t(ui.sections.about)} />
      <div className="rounded-lg border border-border bg-card/40 p-6 md:p-8">
        <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
          <span className="text-primary">{'> '}</span>
          {t(about)}
        </p>
      </div>
    </section>
  )
}
