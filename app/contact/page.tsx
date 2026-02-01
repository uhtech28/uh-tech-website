"use client";
import React, { useState } from "react";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("Message sent successfully!");

      const whatsappMessage = `
New Contact Form 🔔
Name: ${form.name}
Email: ${form.email}
Date: ${form.date}
Message: ${form.message}
      `;

      // ✅ SAFE for Vercel
      if (typeof window !== "undefined") {
        window.open(
          `https://wa.me/918081719192?text=${encodeURIComponent(
            whatsappMessage
          )}`,
          "_blank"
        );
      }

      setForm({ name: "", email: "", date: "", message: "" });
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      <div className="fixed inset-0 -z-10">
        <img src="/ser.jpg" alt="background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="bg-zinc-900/70 backdrop-blur-xl rounded-3xl p-10 w-full max-w-md shadow-2xl border border-white/10">
        <h1 className="text-cyan-400 text-4xl font-extrabold text-center">
          Contact UH TECH
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className="w-full bg-zinc-900 rounded-xl px-4 py-3" />
          <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Your Email" className="w-full bg-zinc-900 rounded-xl px-4 py-3" />
          <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full bg-zinc-900 rounded-xl px-4 py-3" />
          <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Your Enquiry" className="w-full bg-zinc-900 rounded-xl px-4 py-3" />

          <button disabled={loading} className="w-full bg-cyan-400 text-black py-3 rounded-xl">
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-8">
          <a href="https://www.instagram.com/uh__tech" target="_blank"><Instagram /></a>
          <a href="https://wa.me/918081719192" target="_blank"><MessageCircle /></a>
          <a href="https://www.linkedin.com/in/utkarsh-verma-uh-tech-6a0353383" target="_blank"><Linkedin /></a>
          <a href="mailto:uhtech07@gmail.com"><Mail /></a>
        </div>
      </div>
    </div>
  );
}
