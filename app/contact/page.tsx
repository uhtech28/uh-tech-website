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

      window.open(
        `https://wa.me/918081719192?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      );

      setForm({ name: "", email: "", date: "", message: "" });
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">

      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/ser.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* FORM CARD */}
      <div className="bg-zinc-900/70 backdrop-blur-xl rounded-3xl p-10 w-full max-w-md shadow-2xl border border-white/10">

        <h1 className="text-cyan-400 text-4xl font-extrabold text-center">
          Contact UH TECH
        </h1>
        <p className="text-gray-400 text-center mt-2 mb-8">
          Book an appointment, ask questions, or leave a message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-zinc-900 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-400/40 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-zinc-900 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-400/40 outline-none"
            required
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full bg-zinc-900 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-400/40 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Enquiry / Doubt"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full bg-zinc-900 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-400/40 outline-none"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-400 text-black py-3 rounded-xl font-semibold transition-all disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

        </form>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.instagram.com/uh__tech?igsh=dnZqcXVrcW93OTNr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-7 h-7 text-cyan-400 hover:text-white transition" />
          </a>

          <a
            href="https://wa.me/918081719192"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-7 h-7 text-cyan-400 hover:text-green-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/utkarsh-verma-uh-tech-6a0353383"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-7 h-7 text-cyan-400 hover:text-white transition" />
          </a>

          <a href="mailto:uhtech07@gmail.com?subject=Contact%20from%20Website">
            <Mail className="w-7 h-7 text-cyan-400 hover:text-white transition" />
          </a>
        </div>

      </div>
    </div>
  );
}
