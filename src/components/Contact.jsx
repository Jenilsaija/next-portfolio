"use client";
import React from 'react'
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="py-20 bg-base-200 relative px-8" id="contact">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Title */}
                <motion.h2
                    className="text-5xl font-extrabold text-center mb-12 text-primary tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Contact Me
                </motion.h2>
            </div>

            <motion.div
                className="mx-60 bg-base-300 rounded-2xl shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >

                <h3 className="text-2xl font-semibold text-primary mb-4">I'd Love to Hear From You!</h3>
                <p className="text-gray-700 mb-6">
                    Whether you have a question, project inquiry, or just want to connect, feel free to drop a message below!
                </p>

                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea
                            placeholder="Your Message"
                            className="textarea textarea-bordered w-full h-32"
                            required
                        ></textarea>
                    </div>

                    <div className="mt-6">
                        <button className="btn btn-primary text-lg font-semibold px-6 hover:scale-105 transition-transform">
                            Send Message
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    )
}

export default Contact
