import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll.jsx";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.SERVICE_ID, import.meta.env.TEMPLATE_ID, e.target, import.meta.env.PUBLIC_KEY)
            .then(() => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name..."
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message..."
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            />
                        </div>

                                                <button
                                                        type="submit"
                                                        className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                                >
                                                        Send Message
                                                </button>
                                                {/* Social Links */}
                                                <div className="flex justify-center items-center mt-8 space-x-6">
                                                    <a href="https://leetcode.com/u/0vEPblvyTL/" target="_blank" rel="noopener noreferrer" title="LeetCode" className="hover:text-yellow-400">
                                                        <svg width="28" height="28" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M38.7 38.7c-7.2 7.2-18.9 7.2-26.1 0-7.2-7.2-7.2-18.9 0-26.1l7.2-7.2c1.2-1.2 3.1-1.2 4.3 0l2.2 2.2c1.2 1.2 1.2 3.1 0 4.3l-7.2 7.2c-3.6 3.6-3.6 9.5 0 13.1 3.6 3.6 9.5 3.6 13.1 0l7.2-7.2c1.2-1.2 3.1-1.2 4.3 0l2.2 2.2c1.2 1.2 1.2 3.1 0 4.3l-7.2 7.2z"/></svg>
                                                    </a>
                                                    <a href="https://www.linkedin.com/in/kumar-sambhav-965866301/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-blue-500">
                                                        <svg width="28" height="28" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h6v21h-6V19zm3-7c2 0 3.5-1.5 3.5-3.5S17 5 15 5s-3.5 1.5-3.5 3.5S13 12 15 12zm7 7h6v3h.1c.8-1.5 2.7-3 5.4-3 5.8 0 6.9 3.8 6.9 8.7V40h-6v-8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V40h-6V19z"/></svg>
                                                    </a>
                                                    <a href="https://github.com/KumarSambhav01" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-gray-300">
                                                        <svg width="28" height="28" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M25 4C13.5 4 4 13.5 4 25c0 9.3 6 17.2 14.3 20c1 .2 1.4-.4 1.4-.9v-3.2c-5.8 1.3-7-2.8-7-2.8c-.9-2.3-2.2-2.9-2.2-2.9c-1.8-1.2.1-1.2.1-1.2c2 .1 3.1 2.1 3.1 2.1c1.8 3.1 4.7 2.2 5.8 1.7c.2-1.3.7-2.2 1.3-2.7c-4.6-.5-9.4-2.3-9.4-10.1c0-2.2.8-4 2.1-5.4c-.2-.5-.9-2.5.2-5.2c0 0 1.7-.5 5.5 2c1.6-.4 3.3-.6 5-.6c1.7 0 3.4.2 5 .6c3.8-2.5 5.5-2 5.5-2c1.1 2.7.4 4.7.2 5.2c1.3 1.4 2.1 3.2 2.1 5.4c0 7.8-4.8 9.6-9.4 10.1c.7.6 1.4 1.8 1.4 3.6v5.3c0 .5.4 1.1 1.4.9C40 42.2 46 34.3 46 25C46 13.5 36.5 4 25 4z"/></svg>
                                                    </a>
                                                    <a href="#" target="_blank" rel="noopener noreferrer" title="Instagram" className="hover:text-pink-500">
                                                        <svg width="28" height="28" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M25 15c5.5 0 10 4.5 10 10s-4.5 10-10 10s-10-4.5-10-10s4.5-10 10-10zm0-7c-7.2 0-13 5.8-13 13s5.8 13 13 13s13-5.8 13-13s-5.8-13-13-13zm0 3c5.5 0 10 4.5 10 10s-4.5 10-10 10s-10-4.5-10-10s4.5-10 10-10zm0 2c-4.4 0-8 3.6-8 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8z"/></svg>
                                                    </a>
                                                </div>
                                        </form>
                                    </div>
                                </RevealOnScroll>
                            </section>
    );
};
