import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-6">
        <span>
          <span className="text-primary">$</span> echo &quot;© {year} {profile.name}&quot;
        </span>
        <span className="text-muted-foreground/70">{profile.handle}</span>
      </div>
    </footer>
  )
}
