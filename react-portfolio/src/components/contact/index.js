import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label className="col-12 mt-3 mb-3 me-3" htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label className="col-12 mt-3 mb-3 me-3" htmlFor="email">Email address:</label>
                    <input className="col-4" type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label className="col-12 mt-3 mb-3 me-3" htmlFor="message">Message:</label>
                    <textarea className="col-6" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div> 
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="btn-secondary mt-3 mb-5" type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;