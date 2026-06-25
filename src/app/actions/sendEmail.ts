'use server'

import { Resend } from 'resend'

export type SendEmailState = {
    status: 'idle' | 'success' | 'error'
    message?: string
}

export async function sendEmail(
    _prevState: SendEmailState,
    formData: FormData,
): Promise<SendEmailState> {
    const honeypot = (formData.get('website') as string) ?? ''
    if (honeypot) {
        // Bot filled the hidden field — silently pretend success
        return { status: 'success' }
    }

    const name = (formData.get('name') as string)?.trim()
    const email = (formData.get('email') as string)?.trim()
    const message = (formData.get('message') as string)?.trim()

    if (!name || !email || !message) {
        return { status: 'error', message: 'All fields are required.' }
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // const { error } = await resend.emails.send({
    //     from: 'Portfolio Contact <onboarding@resend.dev>',
    //     to: 'learoldan.dev@gmail.com',
    //     replyTo: email,
    //     subject: `Portfolio contact — ${name}`,
    //     html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br>')}</p>`,
    // })

    // if (error) {
    //     return { status: 'error' }
    // }

    return { status: 'success' }
}
