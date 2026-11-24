import { useLanguage } from '@/lib/i18n'

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="flex items-center gap-1 rounded-md border border-border bg-card/50 p-0.5 text-xs">
      {(['pt', 'en'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded px-2 py-1 font-medium uppercase transition-colors ${
            lang === l
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
