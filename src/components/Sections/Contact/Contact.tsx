import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Contact.module.scss";

type FormData = {
    name: string;
    email: string;
    message: string;
};

type FormErrors = Partial<FormData>

const Contact: React.FC = () => {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm(form)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        console.log(form); // fetch
        setForm({ name: "", email: "", message: "" });
        setErrors({});
    };

    function validateForm(formData: FormData): FormErrors {
        const errors: FormErrors = {};

        // Name
        if (formData.name.trim() === "") {
            errors.name = 'The field cannot be empty';
        } else if (formData.name.trim().length < 3) {
            errors.name = 'The name is too short';
        }

        // Email
        if (formData.email.trim() === "") {
            errors.email = 'The field cannot be empty';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Sorry, invalid format here';
        }

        // Message
        if (formData.message.trim() === "") {
            errors.message = 'The field cannot be empty';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'The message is too short';
        }

        return errors;
    }

    return (
        <section className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2 className={styles.title}>
                        Contact
                    </h2>
                    <p className={styles.description}>
                        I would love to hear about your project and how I could help.
                        Please fill in the form, and I’ll get back to you as soon as possible.
                    </p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="Your Name"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="Your Email"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            required
                            className={styles.textarea}
                            placeholder="Your Message"
                        />
                    </div>
                    <button type="submit" className={styles.button}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
