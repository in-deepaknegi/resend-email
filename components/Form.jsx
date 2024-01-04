"use client"
import React, { useState } from 'react'

const Form = () => {

    const [mail, setMail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: mail }), // Sending the email in the request body
            });

            const json = await res.json();
            console.log(json);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <section className='py-16 sm:py-24 lg:py-28'>
            <div className='mx-auto grid max-w-7xl grid-cols-1 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8'>
                <div className='max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7'>
                    <h2 className='inline sm:block lg:inline'>Want product news and updated?</h2>
                    <p className='inline sm:block lg:inline'>Sing up for out newsletter</p>
                </div>
                <form onSubmit={handleSubmit} className='w-full max-w-md col-span-5 lg:py-2'>
                    <div className='flex gap-x-3'>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/70 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email" />
                        <button type="submit" className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
                    </div>
                    <p className='mt-4 text-sm text-gray-700'>
                        We care about your data. Read our
                        <span className='text-blue-800'>
                            <a href="/privacy"> privacy policy</a>
                        </span>.
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Form