'use client';

import { useState } from 'react'

export default function Contact() {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [submitted, setSubmitted] = useState(false);

const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
};

  return (
    <>
        <div className="flex flex-col items-center justify-center">
            <h1>Contact</h1>

            <div className="flex flex-col items-center">
                <form className="flex flex-col" onSubmit={handleFormSubmit}>
                    <div className="flex space-x-10">
                        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type="submit">Send</button>
                </form>
                
                {submitted ? 
                <div>
                    <p>Thank you for your message!</p>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Message: {message}</p>
                </div> : null}
            </div>
        </div>
    </>
  )
}
