import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Lang, Bilingual } from './portfolio-data'

const ui = {
  nav: {
    about: { pt: 'sobre', en: 'about' },
    stack: { pt: 'stack', en: 'stack' },
    experience: { pt: 'experiência', en: 'experience' },
    projects: { pt: 'projetos', en: 'projects' },
    contact: { pt: 'contato', en: 'contact' },
  },
  hero: {
    greeting: { pt: 'olá, eu sou', en: 'hi, i am' },
    available: { pt: 'disponível para projetos', en: 'available for work' },
    cta: { pt: 'entre em contato', en: 'get in touch' },
    ctaSecondary: { pt: 'ver projetos', en: 'view projects' },
  },
  sections: {
    about: { pt: 'sobre mim', en: 'about me' },
    stack: { pt: 'stack & habilidades', en: 'stack & skills' },
    experience: { pt: 'experiência', en: 'experience' },
    projects: { pt: 'projetos', en: 'projects' },
    contact: { pt: 'contato', en: 'contact' },
  },
  projects: {
    filters: {
      featured: { pt: 'destaques', en: 'featured' },
      systems: { pt: 'sistemas', en: 'systems' },
      wordpress: { pt: 'wordpress', en: 'wordpress' },
      other: { pt: 'outros', en: 'other' },
      all: { pt: 'todos', en: 'all' },
    },
  },
  contact: {
    intro: {
      pt: 'Quer conversar sobre um projeto? Me mande uma mensagem pelos canais abaixo ou use o formulário.',
      en: 'Want to talk about a project? Reach me through the channels below or use the form.',
    },
    name: { pt: 'nome', en: 'name' },
    email: { pt: 'e-mail', en: 'email' },
    message: { pt: 'mensagem', en: 'message' },
    send: { pt: 'enviar mensagem', en: 'send message' },
    sending: { pt: 'enviando...', en: 'sending...' },
    success: {
      pt: 'Mensagem recebida! Retornarei em breve.',
      en: 'Message received! I will get back to you soon.',
    },
    error: {
      pt: 'Algo deu errado. Tente novamente ou use outro canal.',
      en: 'Something went wrong. Try again or use another channel.',
    },
  },
  footer: {
    built: { pt: 'construído com', en: 'built with' },
  },
} as const

type UiDict = typeof ui

type LangContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (b: Bilingual | { pt: string; en: string }) => string
  ui: UiDict
}

const LangContext = createContext<LangContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')
  const toggle = () => setLang((l) => (l === 'pt' ? 'en' : 'pt'))
  const t = (b: { pt: string; en: string }) => b[lang]
  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t, ui }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
