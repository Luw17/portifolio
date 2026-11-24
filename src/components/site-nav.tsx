import { Terminal } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { LanguageToggle } from './language-toggle'

const links = [
  { id: 'about', key: 'about' },
  { id: 'stack', key: 'stack' },
  { id: 'experience', key: 'experience' },
  { id: 'projects', key: 'projects' },
  { id: 'contact', key: 'contact' },
] as const

export function SiteNav() {
  const { t, ui } = useLanguage()
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-foreground">dev</span>
          <span className="text-primary">.portfolio</span>
        </a>

        <div className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="transition-colors hover:text-primary"
            >
              {t(ui.nav[link.key])}
            </a>
          ))}
        </div>

        <LanguageToggle />
      </nav>
    </header>
  )
}
