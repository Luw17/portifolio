export function SectionHeading({
  path,
  command,
  title,
}: {
  path: string
  command: string
  title: string
}) {
  return (
    <div className="mb-8 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="text-primary">{path}</span>
        <span className="text-muted-foreground/60">$</span>
        <span>{command}</span>
        <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-primary/70" aria-hidden />
      </div>
      <h2 className="font-mono text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        <span className="text-primary">#</span> {title}
      </h2>
    </div>
  )
}
