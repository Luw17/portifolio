/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_N8N_WEBHOOK_URL?: string
  readonly VITE_CONTACT_EMAIL?: string
  readonly VITE_CONTACT_GITHUB?: string
  readonly VITE_CONTACT_LINKEDIN?: string
  readonly VITE_CONTACT_WHATSAPP?: string
  readonly VITE_CONTACT_WHATSAPP_MESSAGE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
