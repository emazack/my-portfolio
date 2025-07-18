import type { NextApiRequest, NextApiResponse } from 'next';

export const config = { runtime: 'nodejs' };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') return res.status(405).end('Only POST');

    const { name = '', email = '', message = '', token } =
        req.body as Record<string, string>;

    const captchaOk = await verifyCaptcha(token);
    if (!captchaOk)
        return res.status(400).json({ ok: false, error: 'Captcha failed' });

    try {
        await sendEmail({ name, email, message });
        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('Brevo error', err);
        return res.status(500).json({ ok: false, error: 'Email failed' });
    }
}

async function verifyCaptcha(token: string) {
    const params = new URLSearchParams({
        secret: process.env.SECRET_KEY_CAPTCHA!,
        response: token,
    });

    const data = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        { method: 'POST', body: params }
    ).then(r => r.json() as Promise<{ success: boolean }>);

    return data.success;
}

async function sendEmail({
    name,
    email,
    message,
}: {
    name: string;
    email: string;
    message: string;
}) {
    await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify({
            sender: {
                email: process.env.BREVO_SENDER!,
                name: 'Portfolio Contact',
            },
            to: [{ email: process.env.MAIL_RECEIVER! }],
            replyTo: { email },
            subject: `Messaggio da ${name}`,
            htmlContent: `<p>${message.replace(/\n/g, '<br/>')}</p>`,
        }),
    });
}
