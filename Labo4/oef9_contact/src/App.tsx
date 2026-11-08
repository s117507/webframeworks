import React, {useState} from 'react';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [confirmationText, setConfirmationText] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setConfirmationText(`Thanks ${firstName} ${lastName}! We will contact you at ${email}.`);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    const isValid = () => {
        return firstName.length > 0 && lastName.length > 0 && email.length > 0 && message.length > 0;
    }

    return (
        <form onSubmit={handleSubmit} style={{display: "grid", gridTemplateColumns: "100px 1fr", gap: "5px"}}>
            <label>First name:</label>
            <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            <label>Last name:</label>
            <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            <label>Email:</label>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <label>Message:</label>
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
            <button type="submit" style={{gridColumn: "1 / span 2"}} disabled={!isValid()}>Send</button>
            {confirmationText && (
                <div style={{gridRowStart: 6, gridColumn: "1 / span 2"}}>
                    {confirmationText}
                </div>
            )}
        </form>
    );
};

export default ContactForm;


