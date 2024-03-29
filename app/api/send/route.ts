import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import MessageUsEmail from '@/components/EmailMessage';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { email } = await req.json();

    try {
        const data = await resend.emails.send({
            from: 'dev@deepaknegi.in', // your verified domain
            to: email, // the email address you want to send a message
            subject: `${email} has a message!`,
            react: MessageUsEmail({ email }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
