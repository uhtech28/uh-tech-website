import React from "react";

export default function ProjectOne() {
  return (
    <div className="relative min-h-screen text-white">

      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/edu.jpg"   // you can change image
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 py-24 max-w-6xl mx-auto space-y-14">

        {/* HEADER */}
        <div className="bg-zinc-900/70 backdrop-blur-lg rounded-3xl p-10 border border-purple-400/20 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-4">
            Elite Coaching – Online Learning Platform
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            A full-stack web-based coaching platform designed to help institutes deliver
            courses, manage students, track progress, and monetize learning through
            subscriptions.
          </p>
        </div>

        <Section title="🔹 Project Overview">
          Elite Coaching is a modern EdTech platform that replaces traditional offline coaching
          systems with a centralized digital solution for students, teachers, and administrators.
        </Section>

        <Section title="❗ Problem Statement">
          <ul className="list-disc list-inside space-y-2">
            <li>Offline coaching with limited scalability</li>
            <li>No centralized student dashboard</li>
            <li>Manual progress & performance tracking</li>
            <li>No structured access to videos and tests</li>
            <li>No subscription-based content control</li>
          </ul>
        </Section>

        <Section title="✅ Solution">
          <ul className="list-disc list-inside space-y-2">
            <li>Professional coaching website</li>
            <li>Student dashboard with progress tracking</li>
            <li>Online courses, videos, tests & resources</li>
            <li>Subscription-based premium content</li>
            <li>Teacher & admin panels</li>
          </ul>
        </Section>

        <Section title="⚙️ Key Features">
          <h3 className="text-xl font-semibold text-purple-300 mt-2">Student Panel</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Secure login</li>
            <li>Dashboard with progress & rank</li>
            <li>Video lectures & study materials</li>
            <li>Test series & study planner</li>
            <li>Doubt submission system</li>
          </ul>

          <h3 className="text-xl font-semibold text-purple-300 mt-6">Admin / Teacher Panel</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Admin dashboard</li>
            <li>Course & content management</li>
            <li>Student performance monitoring</li>
            <li>Subscription management</li>
          </ul>
        </Section>

        <Section title="🏗️ System Architecture">
          <ul className="list-disc list-inside space-y-2">
            <li>User visits coaching website</li>
            <li>Registers / logs in</li>
            <li>Subscribes to a plan (demo payment)</li>
            <li>Premium content unlocks automatically</li>
            <li>Dashboard tracks learning progress</li>
          </ul>
        </Section>

        <Section title="🧑‍💻 Technology Stack">
          <p>
            <b>Frontend:</b> Next.js, React, TypeScript, Tailwind CSS<br />
            <b>Animations:</b> Framer Motion<br />
            <b>Backend Logic:</b> Next.js App Router<br />
            <b>Deployment:</b> Netlify<br />
            <b>Version Control:</b> Git & GitHub
          </p>
        </Section>

        <Section title="📈 Business Impact">
          <ul className="list-disc list-inside space-y-2">
            <li>Fully digital coaching workflow</li>
            <li>Improved student engagement</li>
            <li>Scalable learning platform</li>
            <li>Professional brand presence</li>
            <li>Subscription-based monetization</li>
          </ul>
        </Section>

        <Section title="🚀 Live Demo">
          <a
            href="https://coaching-app-demo-uhtech.netlify.app/"
            target="_blank"
            className="text-purple-400 underline hover:text-purple-300"
          >
            https://coaching-demo-app.netlify.app
          </a>
        </Section>

        <Section title="🔮 Future Enhancements">
          <ul className="list-disc list-inside space-y-2">
            <li>Real payment gateway (Razorpay / Stripe)</li>
            <li>Live classes integration</li>
            <li>Advanced analytics dashboard</li>
            <li>Attendance tracking</li>
            <li>Mobile application</li>
          </ul>
        </Section>

        <Section title="🏆 Learning Outcome">
          <ul className="list-disc list-inside space-y-2">
            <li>Full-stack EdTech platform development</li>
            <li>Next.js App Router & deployment</li>
            <li>Subscription & access control logic</li>
            <li>Professional UI/UX design</li>
            <li>Production build & hosting</li>
          </ul>
        </Section>

      </div>
    </div>
  );
}

/* REUSABLE SECTION */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900/70 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/20 shadow-lg">
      <h2 className="text-2xl font-bold text-purple-400 mb-4">{title}</h2>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}