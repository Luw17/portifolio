export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  // honeypot anti-spam (campo invisível)
  const honeypot = String(formData.get('company') ?? '')
  if (honeypot) return { status: 'success' }

  if (name.length < 2 || !isValidEmail(email) || message.length < 5) {
    return { status: 'error', message: 'invalid' }
  }

  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL

  if (!webhookUrl) {
    // Sem webhook configurado ainda: registra no console para teste local.
    console.log('[portfolio] VITE_N8N_WEBHOOK_URL ausente. Contato recebido:', {
      name,
      email,
      message,
    })
    return { status: 'success' }
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
        source: 'portfolio',
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!res.ok) {
      console.error('[portfolio] webhook n8n respondeu com status', res.status)
      return { status: 'error', message: 'send_failed' }
    }

    return { status: 'success' }
  } catch (error) {
    console.error('[portfolio] falha ao enviar para o n8n:', error)
    return { status: 'error', message: 'send_failed' }
  }
}
