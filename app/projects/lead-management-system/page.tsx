import React from "react";

export default function ProjectOne() {
  return (
    <div className="relative min-h-screen text-white">

      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/ser.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 py-24 max-w-6xl mx-auto space-y-14">

        {/* HEADER */}
        <div className="bg-zinc-900/70 backdrop-blur-lg rounded-3xl p-10 border border-cyan-400/20 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4">
            Lead & Enquiry Management System
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            A full-stack web-based system designed to help businesses capture, store, and manage
            customer enquiries digitally through a centralized admin dashboard.
          </p>
        </div>

        <Section title="🔹 Project Overview">
          This project replaces manual lead tracking (WhatsApp, phone calls, notebooks, and Excel sheets)
          with a secure and automated cloud-based platform.
        </Section>

        <Section title="❗ Problem Statement">
          <ul className="list-disc list-inside space-y-2">
            <li>Enquiries coming from multiple sources</li>
            <li>Manual tracking using notebooks or spreadsheets</li>
            <li>Lost or forgotten leads</li>
            <li>No proper customer history</li>
            <li>No reporting or performance tracking</li>
          </ul>
        </Section>

        <Section title="✅ Solution">
          <ul className="list-disc list-inside space-y-2">
            <li>Website enquiry form</li>
            <li>Secure database storage</li>
            <li>Admin dashboard for lead management</li>
            <li>Status tracking and follow-up system</li>
            <li>No enquiry is lost</li>
          </ul>
        </Section>

        <Section title="⚙️ Key Features">
          <h3 className="text-xl font-semibold text-cyan-300 mt-2">User Side</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Website enquiry form</li>
            <li>Name, phone number, service selection, message</li>
            <li>Real-time submission</li>
            <li>Instant confirmation message</li>
          </ul>

          <h3 className="text-xl font-semibold text-cyan-300 mt-6">Admin Panel</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Secure admin login</li>
            <li>View all enquiries in dashboard</li>
            <li>Lead list with date & time</li>
            <li>Status tracking</li>
            <li>Search & filter leads</li>
          </ul>
        </Section>

        <Section title="🏗️ System Architecture">
          <ul className="list-disc list-inside space-y-2">
            <li>User fills enquiry form</li>
            <li>Data sent to backend API</li>
            <li>Stored securely in database</li>
            <li>Admin panel fetches leads</li>
            <li>Business manages enquiries</li>
          </ul>
        </Section>

        <Section title="🧑‍💻 Technology Stack">
          <p>
            <b>Frontend:</b> HTML, CSS, JavaScript<br />
            <b>Backend:</b> Node.js, Express.js<br />
            <b>Database:</b> MongoDB Atlas<br />
            <b>Hosting:</b> Netlify (Frontend), Render (Backend)
          </p>
        </Section>

        <Section title="📈 Business Impact">
          <ul className="list-disc list-inside space-y-2">
            <li>No more lost enquiries</li>
            <li>Faster response time</li>
            <li>Centralized customer data</li>
            <li>Professional workflow</li>
            <li>Higher conversion rate</li>
          </ul>
        </Section>

        <Section title="🚀 Live Demo">
          <a
            href="https://phenomenal-blini-f67656.netlify.app/"
            target="_blank"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            https://phenomenal-blini-f67656.netlify.app/
          </a>
        </Section>

        <Section title="🔮 Future Enhancements">
          <ul className="list-disc list-inside space-y-2">
            <li>WhatsApp & SMS integration</li>
            <li>CRM system</li>
            <li>Analytics dashboard</li>
            <li>Multi-user roles</li>
            <li>Mobile app</li>
          </ul>
        </Section>

        <Section title="🏆 Learning Outcome">
          <ul className="list-disc list-inside space-y-2">
            <li>Full-stack development</li>
            <li>REST API design</li>
            <li>Database architecture</li>
            <li>Deployment & hosting</li>
            <li>Admin dashboard development</li>
          </ul>
        </Section>

        
      </div>
    </div>
  );
}

/* REUSABLE SECTION */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-zinc-900/70 backdrop-blur-lg rounded-3xl p-8 border border-cyan-400/20 shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h2>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}
