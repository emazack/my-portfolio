import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import styles from "./Contact.module.scss";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "@/components/UI/Loader/Loader";
import { motion, AnimatePresence } from "framer-motion";

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
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const [sending, setSending] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const validationErrors = validateForm(form);
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        try {
            setSending(true);
            const token = await recaptchaRef.current!.executeAsync();
            recaptchaRef.current!.reset();

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, token }),
            });
            if (!res.ok) throw new Error('Something went wrong');
            setIsSubmitted(true);
            setForm({ name: '', email: '', message: '' });
            setErrors({});
        } catch (err) {
            console.error(err);
        } finally {
            setSending(false);
        }
    }

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
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <svg
                    className={styles.oval}
                    width="325"
                    height="129"
                    viewBox="0 0 325 129"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    opacity="0.25"
                >
                    <path d="M60 0.5C133.161 0.5 199.385 4.97615 247.309 12.21C271.274 15.8275 290.642 20.1318 304.007 24.9014C310.692 27.2872 315.846 29.779 319.319 32.3408C322.806 34.9124 324.5 37.4787 324.5 40C324.5 42.5213 322.806 45.0876 319.319 47.6592C315.846 50.221 310.692 52.7128 304.007 55.0986C290.642 59.8682 271.274 64.1725 247.309 67.79C199.385 75.0238 133.161 79.5 60 79.5C-13.1607 79.5 -79.3846 75.0238 -127.309 67.79C-151.274 64.1725 -170.642 59.8682 -184.007 55.0986C-190.692 52.7128 -195.846 50.221 -199.319 47.6592C-202.806 45.0876 -204.5 42.5213 -204.5 40C-204.5 37.4787 -202.806 34.9124 -199.319 32.3408C-195.846 29.779 -190.692 27.2872 -184.007 24.9014C-170.642 20.1318 -151.274 15.8275 -127.309 12.21C-79.3846 4.97615 -13.1607 0.5 60 0.5Z" stroke="white" />
                    <path d="M60 12.5C133.161 12.5 199.385 16.9762 247.309 24.21C271.274 27.8275 290.642 32.1318 304.007 36.9014C310.692 39.2872 315.846 41.779 319.319 44.3408C322.806 46.9124 324.5 49.4787 324.5 52C324.5 54.5213 322.806 57.0876 319.319 59.6592C315.846 62.221 310.692 64.7128 304.007 67.0986C290.642 71.8682 271.274 76.1725 247.309 79.79C199.385 87.0238 133.161 91.5 60 91.5C-13.1607 91.5 -79.3846 87.0238 -127.309 79.79C-151.274 76.1725 -170.642 71.8682 -184.007 67.0986C-190.692 64.7128 -195.846 62.221 -199.319 59.6592C-202.806 57.0876 -204.5 54.5213 -204.5 52C-204.5 49.4787 -202.806 46.9124 -199.319 44.3408C-195.846 41.779 -190.692 39.2872 -184.007 36.9014C-170.642 32.1318 -151.274 27.8275 -127.309 24.21C-79.3846 16.9762 -13.1607 12.5 60 12.5Z" stroke="white" />
                    <path d="M60 25.5C133.161 25.5 199.385 29.9762 247.309 37.21C271.274 40.8275 290.642 45.1318 304.007 49.9014C310.692 52.2872 315.846 54.779 319.319 57.3408C322.806 59.9124 324.5 62.4787 324.5 65C324.5 67.5213 322.806 70.0876 319.319 72.6592C315.846 75.221 310.692 77.7128 304.007 80.0986C290.642 84.8682 271.274 89.1725 247.309 92.79C199.385 100.024 133.161 104.5 60 104.5C-13.1607 104.5 -79.3846 100.024 -127.309 92.79C-151.274 89.1725 -170.642 84.8682 -184.007 80.0986C-190.692 77.7128 -195.846 75.221 -199.319 72.6592C-202.806 70.0876 -204.5 67.5213 -204.5 65C-204.5 62.4787 -202.806 59.9124 -199.319 57.3408C-195.846 54.779 -190.692 52.2872 -184.007 49.9014C-170.642 45.1318 -151.274 40.8275 -127.309 37.21C-79.3846 29.9762 -13.1607 25.5 60 25.5Z" stroke="white" />
                    <path d="M60 37.5C133.161 37.5 199.385 41.9762 247.309 49.21C271.274 52.8275 290.642 57.1318 304.007 61.9014C310.692 64.2872 315.846 66.779 319.319 69.3408C322.806 71.9124 324.5 74.4787 324.5 77C324.5 79.5213 322.806 82.0876 319.319 84.6592C315.846 87.221 310.692 89.7128 304.007 92.0986C290.642 96.8682 271.274 101.173 247.309 104.79C199.385 112.024 133.161 116.5 60 116.5C-13.1607 116.5 -79.3846 112.024 -127.309 104.79C-151.274 101.173 -170.642 96.8682 -184.007 92.0986C-190.692 89.7128 -195.846 87.221 -199.319 84.6592C-202.806 82.0876 -204.5 79.5213 -204.5 77C-204.5 74.4787 -202.806 71.9124 -199.319 69.3408C-195.846 66.779 -190.692 64.2872 -184.007 61.9014C-170.642 57.1318 -151.274 52.8275 -127.309 49.21C-79.3846 41.9762 -13.1607 37.5 60 37.5Z" stroke="white" />
                    <path d="M60 49.5C133.161 49.5 199.385 53.9762 247.309 61.21C271.274 64.8275 290.642 69.1318 304.007 73.9014C310.692 76.2872 315.846 78.779 319.319 81.3408C322.806 83.9124 324.5 86.4787 324.5 89C324.5 91.5213 322.806 94.0876 319.319 96.6592C315.846 99.221 310.692 101.713 304.007 104.099C290.642 108.868 271.274 113.173 247.309 116.79C199.385 124.024 133.161 128.5 60 128.5C-13.1607 128.5 -79.3846 124.024 -127.309 116.79C-151.274 113.173 -170.642 108.868 -184.007 104.099C-190.692 101.713 -195.846 99.221 -199.319 96.6592C-202.806 94.0876 -204.5 91.5213 -204.5 89C-204.5 86.4787 -202.806 83.9124 -199.319 81.3408C-195.846 78.779 -190.692 76.2872 -184.007 73.9014C-170.642 69.1318 -151.274 64.8275 -127.309 61.21C-79.3846 53.9762 -13.1607 49.5 60 49.5Z" stroke="white" />
                </svg>
                <div className={styles.text}>
                    <h2 className={styles.title}>
                        Contact
                    </h2>
                    <p className={styles.description}>
                        I would love to hear about your project and how I could help.
                        Please fill in the form, and I’ll get back to you as soon as possible.
                    </p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div
                                key="form-fields"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20, height: 0, transition: { duration: 0.5 } }}
                                className={styles.formContentWrapper}
                            >
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="NAME"
                                        aria-invalid={!!errors.name}
                                        aria-describedby="name-error"
                                        autoComplete="name"
                                        required
                                    />
                                    <span id="name-error" className={errors.name ? styles.error : undefined} role="alert" aria-live="assertive">
                                        {errors.name}
                                    </span>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="EMAIL"
                                        aria-invalid={!!errors.email}
                                        aria-describedby="email-error"
                                        autoComplete="email"
                                    />
                                    <span id="email-error" className={errors.email ? styles.error : undefined} role="alert" aria-live="assertive">
                                        {errors.email}
                                    </span>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                        placeholder="MESSAGE"
                                        aria-invalid={!!errors.message}
                                        aria-describedby="message-error"
                                        required
                                    />
                                    <span id="message-error" className={errors.message ? styles.error : undefined} role="alert" aria-live="assertive">
                                        {errors.message}
                                    </span>
                                </div>
                                {sending ? (
                                    <Loader />
                                ) : (
                                    <button disabled={sending} type="submit" className={styles.button}>
                                        SEND MESSAGE
                                    </button>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success-message"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                                className={styles.formContentWrapper}
                            >
                                <p className={styles.button}>
                                    THANK YOU FOR YOUR INQUIRY
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                        size="invisible"
                        ref={recaptchaRef}
                    />
                </form>
            </div>
        </section>
    );
};

export default Contact;
