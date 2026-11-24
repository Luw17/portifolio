import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { projects, type ProjectCategory } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { GithubIcon } from './brand-icons'

type ProjectFilter = 'featured' | ProjectCategory | 'all'

const filterKeys: ProjectFilter[] = ['featured', 'systems', 'wordpress', 'other', 'all']

const filterCommands: Record<ProjectFilter, string> = {
  featured: 'ls projects/ --featured',
  systems: 'ls projects/systems/',
  wordpress: 'ls projects/wordpress/',
  other: 'ls projects/other/',
  all: 'ls -a projects/',
}

function getFilteredProjects(filter: ProjectFilter) {
  if (filter === 'all') return projects
  if (filter === 'featured') return projects.filter((p) => p.featured)
  return projects.filter((p) => p.category === filter)
}

export function ProjectsSection() {
  const { t, ui } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('featured')

  const visibleProjects = getFilteredProjects(activeFilter)

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
      <SectionHeading
        path="~/projects"
        command={filterCommands[activeFilter]}
        title={t(ui.sections.projects)}
      />

      <div
        role="tablist"
        aria-label={t(ui.sections.projects)}
        className="mb-6 flex flex-wrap gap-2"
      >
        {filterKeys.map((key) => {
          const count = getFilteredProjects(key).length
          const isActive = activeFilter === key
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(key)}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs transition-colors ${
                isActive
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-card/40 text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              <span>--{t(ui.projects.filters[key])}</span>
              <span className={isActive ? 'text-primary/80' : 'text-muted-foreground/70'}>
                ({count})
              </span>
            </button>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-lg border border-border bg-card/40 p-5 transition-colors hover:border-primary/50"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-foreground">
                <span className="text-primary">{'./'}</span>
                {project.name}
              </h3>
              <div className="flex shrink-0 flex-wrap items-center justify-end gap-2 text-muted-foreground">
                {project.repos?.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Repositório ${repo.label ?? ''} de ${project.name}`.trim()}
                    className="inline-flex items-center gap-1 rounded border border-border/70 px-1.5 py-0.5 text-[11px] transition-colors hover:border-primary hover:text-primary"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    {repo.label && <span>{repo.label}</span>}
                  </a>
                ))}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Repositório de ${project.name}`}
                    className="transition-colors hover:text-primary"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Site de ${project.name}`}
                    className="transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-3 grow text-pretty text-sm leading-relaxed text-muted-foreground">
              {t(project.description)}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded bg-secondary/50 px-2 py-0.5 text-xs text-primary">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
