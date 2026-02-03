import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusType, setStatusType] = useState("");

    // Handle input change (NO CHANGE IN LOGIC)
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    // Send email (NO CHANGE IN LOGIC)
    function sendEmail(e) {
        e.preventDefault();
        setLoading(true);
        setStatusMessage("");
        setStatusType("");

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs
            .send(
                serviceID,
                templateID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                publicKey,
            )
            .then(() => {
                setStatusMessage("Message sent successfully!");
                setStatusType("success");
                setForm({ name: "", email: "", message: "" });
                setLoading(false);
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setStatusMessage("Failed to send message. Please try again.");
                setStatusType("error");
                setLoading(false);
            });
    }

    return (
        /* --- CHANGED: Added bg-transparent and py-24 --- */
        <section id="contact" className="relative py-24 bg-transparent">
            <div className="max-w-4xl mx-auto px-6 relative z-10">

                {/* --- CHANGED: Heading looks more professional --- */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold italic tracking-tighter text-white uppercase">
                        Contact Me
                    </h2>
                    <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <motion.form
                    onSubmit={sendEmail}
                    /* --- CHANGED: Made it Glassmorphic with backdrop-blur --- */
                    className="grid gap-5 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-xl shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        /* --- CHANGED: Better transparency --- */
                        className="bg-white/5 border border-white/10 rounded-xl p-4 placeholder-gray-500 text-white outline-none focus:border-indigo-500/50 transition-all"
                    />

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="bg-white/5 border border-white/10 rounded-xl p-4 placeholder-gray-500 text-white outline-none focus:border-indigo-500/50 transition-all"
                    />

                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows={4}
                        required
                        className="bg-white/5 border border-white/10 rounded-xl p-4 placeholder-gray-500 text-white outline-none focus:border-indigo-500/50 transition-all resize-none"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        /* --- CHANGED: Added gradient and hover effect --- */
                        className="py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-indigo-500/30 transition-all active:scale-95 disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {statusMessage && (
                        <p className={`mt-2 text-center font-medium ${statusType === "success" ? "text-green-400" : "text-red-400"}`}>
                            {statusMessage}
                        </p>
                    )}
                </motion.form>
            </div>
        </section>
    );
}