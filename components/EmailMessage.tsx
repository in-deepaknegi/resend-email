import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';

type MessageUsEmailProps = {
    email: string;
};

const MessageUsEmail = ({ email }: MessageUsEmailProps) => {
    const previewText = `Weekly Updates 🚀${email} sent you a message.`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className='bg-white my-auto mx-auto font-sans'>
                    <Container className='my-[20px] mx-auto p-[20px] max-w-4xl'>
                        <Heading className='text-black text-[20px] font-normal text-left'>
                            <strong>Hello {email}</strong>
                        </Heading>
                        {/* <Text className='text-black text-[14px] leading-[24px]'>
                            {message}
                        </Text> */}

                        <Hr className='my-[16px] mx-0 w-full' />
                        <Text className='text-[#666666] text-[12px]'>
                            In a world where every email matters, Resend empowers you to send emails that captivate, engage, and convert. It&apos;s more than just an email platform; it&apos;s a catalyst for modernizing your email communication.
                            Don&apos;t settle for outdated email practices. Embrace the future of email communication with Resend and watch your messages soar to new heights.
                        </Text>
                        <Text className='text-[#666666] text-[12px]'>
                            This email is delivered to you through the Resend SDK
                            integrations.✨
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default MessageUsEmail;