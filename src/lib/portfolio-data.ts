// ============================================================================
// EDITE AQUI: todos os seus dados pessoais ficam neste arquivo.
// Cada campo com { pt, en } tem versão em português e inglês.
// ============================================================================

export type Lang = 'pt' | 'en'
export type Bilingual = { pt: string; en: string }

function buildWhatsappUrl(rawNumber?: string, message?: string): string {
  const digits = (rawNumber ?? '').replace(/\D/g, '')
  if (!digits) return ''
  // Se informar apenas DDD + número (10 ou 11 dígitos), assume DDI do Brasil (55)
  const fullNumber = digits.length === 10 || digits.length === 11 ? `55${digits}` : digits
  const trimmedMessage = message?.trim()
  return trimmedMessage
    ? `https://wa.me/${fullNumber}?text=${encodeURIComponent(trimmedMessage)}`
    : `https://wa.me/${fullNumber}`
}

export const profile = {
  name: 'Luís Flávio',
  role: {
    pt: 'Desenvolvedor Full-stack & DevOps',
    en: 'Full-Stack Developer & DevOps',
  } satisfies Bilingual,
  handle: '@Luw17',
  location: {
    pt: 'Brasil — Remoto',
    en: 'Brazil — Remote',
  } satisfies Bilingual,
  available: true, // true = "disponível para projetos"
  // Contatos carregados via variáveis de ambiente (.env):
  email: import.meta.env.VITE_CONTACT_EMAIL?.trim() ?? '',
  github: import.meta.env.VITE_CONTACT_GITHUB?.trim() ?? '',
  linkedin: import.meta.env.VITE_CONTACT_LINKEDIN?.trim() ?? '',
  whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP?.trim() ?? '',
  whatsappUrl: buildWhatsappUrl(
    import.meta.env.VITE_CONTACT_WHATSAPP,
    import.meta.env.VITE_CONTACT_WHATSAPP_MESSAGE,
  ),
}

export const about: Bilingual = {
  pt: 'Desenvolvedor back-end com foco em PHP e Laravel. Trabalho conectando sistemas — integro plataformas diferentes como EspoCRM e WordPress, além de desenvolver aplicações do zero. Tenho base sólida em JavaScript/TypeScript, containerização com Docker, práticas de DevOps e administração de ambientes Linux.',
  en: 'Back-end developer focused on PHP and Laravel. I work connecting systems — integrating different platforms like EspoCRM and WordPress, as well as building applications from scratch. I have a solid foundation in JavaScript/TypeScript, containerization with Docker, DevOps practices and Linux environment administration.',
}

export type SkillGroup = {
  category: Bilingual
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: { pt: 'Back-end', en: 'Back-end' },
    items: ['PHP', 'Laravel', 'REST APIs', 'MySQL', 'PostgreSQL'],
  },
  {
    category: { pt: 'Integrações', en: 'Integrations' },
    items: ['EspoCRM', 'WordPress', 'Webhooks', 'APIs de terceiros'],
  },
  {
    category: { pt: 'Front-end', en: 'Front-end' },
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: { pt: 'DevOps & Infra', en: 'DevOps & Infra' },
    items: ['Docker', 'Linux', 'CI/CD', 'Nginx', 'Git'],
  },
]

export type Experience = {
  role: Bilingual
  company: string
  period: Bilingual
  description: Bilingual
  highlights?: Bilingual[]
  stack?: string[]
}

export const experiences: Experience[] = [
  {
    role: {
      pt: 'Desenvolvedor Full-stack PHP & WordPress',
      en: 'Full-Stack PHP & WordPress Developer',
    },
    company: 'TOI',
    period: { pt: 'Atual', en: 'Present' },
    description: {
      pt: 'Desenvolvimento full-stack com foco em PHP e WordPress, construindo integrações sob medida em PHP e conectando WordPress e EspoCRM a outros serviços.',
      en: 'Full-stack development focused on PHP and WordPress, building custom PHP integrations and connecting WordPress and EspoCRM with external services.',
    },
    highlights: [
      {
        pt: 'Desenvolvimento full-stack de soluções em PHP e WordPress',
        en: 'Full-stack development of PHP and WordPress solutions',
      },
      {
        pt: 'Criação de integrações personalizadas em PHP entre sistemas',
        en: 'Custom PHP integrations bridging internal and external systems',
      },
      {
        pt: 'Integração do WordPress e EspoCRM com APIs e serviços externos',
        en: 'Integrating WordPress and EspoCRM with third-party APIs and services',
      },
    ],
    stack: ['PHP', 'WordPress', 'EspoCRM', 'REST APIs', 'Webhooks'],
  },
]

export type ProjectCategory = 'systems' | 'wordpress' | 'other'

export type ProjectRepo = {
  label?: string
  url: string
}

export type Project = {
  name: string
  category: ProjectCategory
  featured?: boolean
  description: Bilingual
  stack: string[]
  url?: string
  repo?: string
  repos?: ProjectRepo[]
}

export const projects: Project[] = [
  {
    name: 'Go Content Go!',
    category: 'systems',
    featured: true,
    description: {
      pt: 'CMS ultrarrápido em binário único feito com Go e SQLite embarcado. Suporta arquitetura híbrida (SSR e Headless via API REST), temas customizáveis, plugins em Lua e deploy simplificado com Docker.',
      en: 'Ultra-fast single-binary CMS powered by Go and embedded SQLite. Features hybrid architecture (SSR and Headless REST API), custom themes, Lua plugins, and zero-setup Docker deployments.',
    },
    stack: ['Go', 'SQLite', 'HTMX', 'Lua', 'REST API', 'Docker'],
    repo: 'https://github.com/Luw17/go-content-go',
  },
  {
    name: 'Enitime',
    category: 'systems',
    featured: true,
    description: {
      pt: 'Sistema web composto por API back-end em Go containerizada com Docker e painel administrativo moderno em Next.js com TypeScript.',
      en: 'Web platform combining a Dockerized Go back-end API with a modern administrative dashboard built in Next.js and TypeScript.',
    },
    stack: ['Go', 'TypeScript', 'Next.js', 'REST API', 'Docker'],
    repos: [
      { label: 'api', url: 'https://github.com/Luw17/Enitime-api' },
      { label: 'admin', url: 'https://github.com/Luw17/Enitime-admin' },
    ],
  },
  {
    name: 'Eniwhere & Enithing',
    category: 'systems',
    featured: true,
    description: {
      pt: 'Ecossistema modular com APIs em NestJS e front-end em React/Vite. Inclui o módulo Enithing voltado para lojas, com cadastro de produtos, registro de vendas e emissão de nota fiscal.',
      en: 'Modular ecosystem powered by NestJS APIs and a React/Vite web client. Includes the Enithing retail module with product management, sales tracking, and invoice generation.',
    },
    stack: ['NestJS', 'React', 'TypeScript', 'Vite', 'Docker', 'Nginx'],
    repos: [
      { label: 'backend', url: 'https://github.com/Luw17/Eniwhere-Backend' },
      { label: 'web', url: 'https://github.com/Luw17/Eniwhere-web' },
      { label: 'enithing', url: 'https://github.com/Luw17/Enithing-backend' },
    ],
  },
  {
    name: 'SnippetBox',
    category: 'wordpress',
    featured: true,
    description: {
      pt: 'Plugin WordPress de alta performance para snippets (PHP, CSS, JS e HTML) salvos em arquivos físicos, com regras granulares de execução, integração WooCommerce e funções reutilizáveis isoladas.',
      en: 'High-performance WordPress snippet manager (PHP, CSS, JS, HTML) using file-based storage, granular execution rules, WooCommerce integration, and scoped reusable functions.',
    },
    stack: ['PHP', 'WordPress', 'WooCommerce', 'OOP'],
    repo: 'https://github.com/Luw17/SnippetBox',
  },
  {
    name: 'Payment Tag Filter (WooCommerce)',
    category: 'wordpress',
    description: {
      pt: 'Plugin WooCommerce em arquitetura MVC que filtra dinamicamente os métodos de pagamento disponíveis no checkout com base nas tags dos produtos do carrinho.',
      en: 'MVC-structured WooCommerce plugin that dynamically filters available checkout payment methods based on product tags in the cart.',
    },
    stack: ['PHP', 'WordPress', 'WooCommerce', 'MVC'],
    repo: 'https://github.com/Luw17/payment-tag-filter-for-woocommerce',
  },
  {
    name: 'CPT Creator',
    category: 'wordpress',
    description: {
      pt: 'Plugin WordPress para criação e gerenciamento de Custom Post Types de forma estruturada e reutilizável.',
      en: 'WordPress plugin for creating and managing Custom Post Types in a clean, structured way.',
    },
    stack: ['PHP', 'WordPress', 'Custom Post Types'],
    repo: 'https://github.com/Luw17/CPT_Creator',
  },
  {
    name: 'WP Headless',
    category: 'wordpress',
    description: {
      pt: 'MU-plugin minimalista que desabilita o front-end tradicional do WordPress para utilizar a instalação como Headless CMS focado em API.',
      en: 'Minimalist MU-plugin that disables the traditional WordPress front-end to run the instance strictly as an API-first Headless CMS.',
    },
    stack: ['PHP', 'WordPress', 'MU-Plugin', 'Headless'],
    repo: 'https://github.com/Luw17/wp-headless',
  },
  {
    name: 'sg_apotheosis_bc_compat',
    category: 'other',
    description: {
      pt: 'Datapack de compatibilidade para Minecraft 1.21.1 (NeoForge) integrando balanceamento e mecânicas entre os mods Silent Gear, Apotheosis e Better Combat.',
      en: 'Compatibility datapack for Minecraft 1.21.1 (NeoForge) bridging mechanics and progression across Silent Gear, Apotheosis, and Better Combat.',
    },
    stack: ['JSON', 'Minecraft 1.21.1', 'NeoForge', 'Datapack'],
    repo: 'https://github.com/Luw17/sg_apotheosis_bc_compat',
  },
]
