"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaEnvelope, FaWhatsapp, FaUser, FaPenAlt, FaPaperPlane } from "react-icons/fa";
import TiltCard from "./TiltCard";
import { db, rtdb } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, push, set } from "firebase/database";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const submissionData = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
      };

      // 1. Save submission to Firestore
      const firestorePromise = addDoc(collection(db, "contacts"), {
        ...submissionData,
        createdAt: serverTimestamp(),
      });

      // 2. Save submission to Realtime Database
      const dbRef = ref(rtdb, "contacts");
      const newPostRef = push(dbRef);
      const rtdbPromise = set(newPostRef, submissionData);

      // 3. Queue email via Firebase Trigger Email Extension (mail collection)
      const mailPromise = addDoc(collection(db, "mail"), {
        to: "jrsaija@gmail.com",
        message: {
          subject: `New Portfolio Inquiry from ${formData.name}`,
          text: `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry:\n${formData.message}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; max-width: 600px;">
              <h2 style="color: #6366f1; margin-top: 0;">New Portfolio Inquiry</h2>
              <p>You received a new inquiry from your portfolio website contact form.</p>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 100px; vertical-align: top;">Name:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${formData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 100px; vertical-align: top;">Email:</td>
                  <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${formData.email}" style="color: #6366f1;">${formData.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 100px; vertical-align: top;">Message:</td>
                  <td style="padding: 8px 0; color: #334155; line-height: 1.5; white-space: pre-line;">${formData.message}</td>
                </tr>
              </table>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
              <p style="font-size: 11px; color: #94a3b8; margin-bottom: 0;">Submitted via portfolio firebase engine.</p>
            </div>
          `
        }
      });

      // Execute all operations in parallel
      await Promise.all([firestorePromise, rtdbPromise, mailPromise]);

      setIsSubmitting(false);

      // 4. Construct pre-filled mailto redirect
      const emailTo = "jrsaija@gmail.com";
      const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hello Jenil,\n\nI am ${formData.name} (Email: ${formData.email}). Here are the details of my inquiry:\n\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      const mailtoLink = `mailto:${emailTo}?subject=${subject}&body=${body}`;

      // Reset form fields
      setFormData({ name: "", email: "", message: "" });

      // Redirect user to their email client
      window.location.href = mailtoLink;
    } catch (error) {
      console.error("Firebase submission error: ", error);
      setIsSubmitting(false);
      alert("Database error occurred, but you can still reach me directly using the jrsaija@gmail.com direct line.");
    }
  };

  const handleWhatsappChat = () => {
    window.open("https://wa.me/91XXXXXXXXXX", "_blank");
  };

  const handleSendEmail = () => {
    window.open("mailto:jrsaija@gmail.com?subject=Project Inquiry", "_self");
  };

  return (
    <section className="py-28 relative overflow-hidden bg-spaceBg px-6 md:px-12 border-t border-cardBorder" id="contact">
      {/* Background organic light glows */}
      <div className="absolute bottom-[-10%] left-[-15%] w-[45%] h-[45%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Main Section Heading - Matches mockup perfectly */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-secondary font-black block">✦ Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-textHeading leading-tight font-sans">
            Let's make something<br />amazing together.
          </h2>
          <div className="pt-2">
            <button
              onClick={handleSendEmail}
              className="text-2xl md:text-3xl font-black text-secondary hover:text-secondary-hover underline decoration-secondary/30 hover:decoration-secondary decoration-3 underline-offset-8 transition-all duration-300 inline-block font-sans"
            >
              Start by saying hi
            </button>
          </div>
        </div>

        {/* 3 Columns CTA Grid - Matches mockup perfectly */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"> */}
          
          {/* CTA Box 1: Book Strategy Call */}
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            <TiltCard className="p-6 h-full flex flex-col justify-between space-y-6 border border-cardBorder bg-cardBg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <FaCalendarAlt size={16} />
                </div>
                <h4 className="text-base font-extrabold text-textHeading leading-tight">Book a Strategy Call</h4>
                <p className="text-textMuted text-xs leading-relaxed">
                  25 minutes of zero-pressure value where we map your automation requirements.
                </p>
              </div>
              <button
                onClick={() => document.getElementById("message-form").scrollIntoView({ behavior: "smooth" })}
                className="w-full bg-primary hover:bg-primary-hover text-white text-[10px] uppercase font-mono tracking-wider font-bold py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-md border-none"
              >
                Schedule Call
              </button>
            </TiltCard>
          </motion.div> */}

          {/* CTA Box 2: Send Message */}
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="h-full"
          >
            <TiltCard className="p-6 h-full flex flex-col justify-between space-y-6 border border-cardBorder bg-cardBg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 text-secondary">
                  <FaEnvelope size={16} />
                </div>
                <h4 className="text-base font-extrabold text-textHeading leading-tight">Send a Message</h4>
                <p className="text-textMuted text-xs leading-relaxed">
                  Drop a message detailing your workspace bottlenecks and targets.
                </p>
              </div>
              <button
                onClick={handleSendEmail}
                className="w-full border border-cardBorder bg-cardBg hover:bg-zinc-50 dark:hover:bg-zinc-800/60 text-textMain text-[10px] uppercase font-mono tracking-wider font-bold py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                Send Email
              </button>
            </TiltCard>
          </motion.div> */}

          {/* CTA Box 3: Quick Chat */}
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-full"
          >
            <TiltCard className="p-6 h-full flex flex-col justify-between space-y-6 border border-cardBorder bg-cardBg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-500">
                  <FaWhatsapp size={18} />
                </div>
                <h4 className="text-base font-extrabold text-textHeading leading-tight">Quick Chat</h4>
                <p className="text-textMuted text-xs leading-relaxed">
                  Connect directly for a fast response on standard project questions.
                </p>
              </div>
              <button
                onClick={handleWhatsappChat}
                className="w-full border border-emerald-500/20 dark:border-emerald-500/10 bg-emerald-500/5 dark:bg-emerald-500/10 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] uppercase font-mono tracking-wider font-bold py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                WhatsApp Chat
              </button>
            </TiltCard>
          </motion.div> */}

        {/* </div> */}

        {/* Central Contact Form Panel - "Let's Build Something Amazing Together" */}
        <div className="max-w-3xl mx-auto" id="message-form">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TiltCard className="p-8 md:p-10 border border-cardBorder bg-cardBg transition-all duration-300">
              
              <div className="mb-8 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-textHeading mb-2 font-sans">Let's Build Something Amazing Together</h3>
                <p className="text-textMuted text-xs leading-normal">
                  Drop detailed information about your workspace bottlenecks, timeline goals, or automations targets and we will assemble a customized strategy map.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="relative group">
                    <label className="text-[10px] uppercase tracking-widest text-textMuted font-bold mb-2 block font-mono">Name</label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted focus-within:text-primary transition-colors" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-12 pr-4 py-3.5 bg-cardBg focus:bg-spaceBg rounded-xl border border-cardBorder focus:border-primary/50 focus:ring-2 focus:ring-primary/10 text-textHeading placeholder-textMuted/50 focus:outline-none transition-all text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="relative group">
                    <label className="text-[10px] uppercase tracking-widest text-textMuted font-bold mb-2 block font-mono">Email</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted focus-within:text-primary transition-colors" />
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3.5 bg-cardBg focus:bg-spaceBg rounded-xl border border-cardBorder focus:border-primary/50 focus:ring-2 focus:ring-primary/10 text-textHeading placeholder-textMuted/50 focus:outline-none transition-all text-sm"
                        required
                      />
                    </div>
                  </div>

                </div>

                {/* Message text area */}
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest text-textMuted font-bold mb-2 block font-mono">Message</label>
                  <div className="relative">
                    <FaPenAlt className="absolute left-4 top-4 text-textMuted focus-within:text-primary transition-colors" />
                    <textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 h-32 bg-cardBg focus:bg-spaceBg rounded-xl border border-cardBorder focus:border-primary/50 focus:ring-2 focus:ring-primary/10 text-textHeading placeholder-textMuted/50 focus:outline-none transition-all text-sm resize-none"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-center md:justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary-hover text-white text-xs uppercase font-mono tracking-wider font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 border-none"
                  >
                    <FaPaperPlane className={`text-xs ${isSubmitting ? "animate-pulse" : ""}`} />
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </button>
                </div>

              </form>

            </TiltCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
