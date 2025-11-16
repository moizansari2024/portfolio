import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="max-w-4xl mx-auto px-4 py-16"
        >
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>

            <motion.form
                className="grid gap-4 bg-white/5 dark:bg-black/20 rounded-xl p-6 md:p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    className="bg-white/10 dark:bg-black/20 rounded-md p-3 placeholder-gray-400 text-gray-100"
                    placeholder="Your name"
                />
                <input
                    type="email"
                    className="bg-white/10 dark:bg-black/20 rounded-md p-3 placeholder-gray-400 text-gray-100"
                    placeholder="Your email"
                />
                <textarea
                    className="bg-white/10 dark:bg-black/20 rounded-md p-3 placeholder-gray-400 text-gray-100"
                    placeholder="Message"
                    rows={4}
                />
                <button
                    type="submit"
                    className="px-4 py-2 rounded-md border border-white/10 hover:bg-white/10 transition-colors"
                >
                    Send
                </button>
            </motion.form>
        </section>
    );
}
