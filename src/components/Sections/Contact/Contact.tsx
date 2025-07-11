import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Contact.module.scss";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact: React.FC = () => {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form); // fetch
        setForm({ name: "", email: "", message: "" });
    };

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
