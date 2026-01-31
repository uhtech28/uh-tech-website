import React from "react";

export default function ProjectTwo() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* FIXED FULLSCREEN BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/ser.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* HERO */}
      <section className="relative z-10 text-center px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-purple-400 drop-shadow-lg">
          Business Operations Management System
        </h1>
        <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          A centralized web-based platform designed to help organizations manage
          employees, tasks, reports, and performance through a secure admin dashboard.
        </p>
      </section>

      {/* CONTENT */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24 space-y-10">

        <Card title="🔹 Project Overview">
          The Business Operations Management System replaces unorganized manual workflows
          with a structured, data-driven, and automated management solution.
        </Card>

        <Card title="❗ Problem Statement">
          <ul className="list-disc list-inside space-y-2">
            <li>Manual employee tracking</li>
            <li>No centralized operations system</li>
            <li>Poor task management</li>
            <li>No proper reporting system</li>
            <li>Lack of real-time business insights</li>
            <li>Disorganized internal workflows</li>
          </ul>
        </Card>

        <Card title="✅ Solution">
          <ul className="list-disc list-inside space-y-2">
            <li>Centralized all business operations</li>
            <li>Managers monitor employees and tasks</li>
            <li>Generates reports and analytics</li>
            <li>Improves workflow organization</li>
            <li>Provides real-time operational visibility</li>
          </ul>
        </Card>

        <Card title="⚙️ Key Features">
          <h3 className="text-purple-300 font-semibold mt-3">Authentication & Access</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Role-based login (Admin / Manager / Staff)</li>
            <li>Secure access control</li>
          </ul>

          <h3 className="text-purple-300 font-semibold mt-4">Admin Panel</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Business overview dashboard</li>
            <li>Employee management</li>
            <li>Task assignment and tracking</li>
            <li>Operational data management</li>
            <li>Real-time statistics</li>
          </ul>

          <h3 className="text-purple-300 font-semibold mt-4">Reports & Analytics</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Performance reports</li>
            <li>Activity summaries</li>
            <li>Visual charts and graphs</li>
            <li>Data export functionality</li>
          </ul>

          <h3 className="text-purple-300 font-semibold mt-4">Notifications</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>System alerts</li>
            <li>Task updates</li>
            <li>New user/activity notifications</li>
          </ul>
        </Card>

        <Card title="🏗️ System Architecture">
          <ul className="list-disc list-inside space-y-2">
            <li>Admin logs into dashboard</li>
            <li>Employees and tasks are created</li>
            <li>Tasks are assigned digitally</li>
            <li>Data is stored in cloud database</li>
            <li>Reports and analytics are generated</li>
            <li>Notifications inform users about updates</li>
          </ul>
        </Card>

        <Card title="🧑‍💻 Technology Stack">
          <p>
            <b>Frontend:</b> HTML, CSS, JavaScript <br />
            <b>Backend:</b> Node.js, Express.js <br />
            <b>Database:</b> MongoDB Atlas <br />
            <b>Hosting:</b> Netlify (Frontend), Render (Backend)
          </p>
        </Card>

        <Card title="🔐 Security">
          <ul className="list-disc list-inside space-y-2">
            <li>Role-based authentication</li>
            <li>Protected admin routes</li>
            <li>Secure APIs</li>
            <li>Encrypted data storage</li>
            <li>Controlled database access</li>
          </ul>
        </Card>

        <Card title="📈 Business Impact">
          <ul className="list-disc list-inside space-y-2">
            <li>Eliminates manual record keeping</li>
            <li>Improves task accountability</li>
            <li>Increases operational transparency</li>
            <li>Reduces human errors</li>
            <li>Saves time and cost</li>
            <li>Enables data-driven decisions</li>
          </ul>
        </Card>

        <Card title="🏢 Target Users">
          Small & medium enterprises, startups, coaching institutes, clinics,
          offices with teams, and service-based companies.
        </Card>

        <Card title="🔮 Future Enhancements">
          <ul className="list-disc list-inside space-y-2">
            <li>Payroll management</li>
            <li>Attendance tracking</li>
            <li>Mobile app version</li>
            <li>Advanced analytics</li>
            <li>AI-based performance prediction</li>
            <li>Multi-branch support</li>
            <li>CRM system integration</li>
          </ul>
        </Card>

        <Card title="🏆 Learning Outcome">
          <ul className="list-disc list-inside space-y-2">
            <li>Business process modeling</li>
            <li>Dashboard design</li>
            <li>Role-based authentication</li>
            <li>Full-stack system design</li>
            <li>Cloud database management</li>
            <li>Enterprise software development</li>
          </ul>
        </Card>

        {/* 📸 PROJECT SCREENSHOTS */}
        <Card title="📸 Project Screenshots">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <img src="/project2-1.png" className="rounded-xl hover:scale-105 transition" />
            <img src="/project2-2.png" className="rounded-xl hover:scale-105 transition" />
            <img src="/project2-3.png" className="rounded-xl hover:scale-105 transition" />
            <img src="/project2-4.png" className="rounded-xl hover:scale-105 transition" />
          </div>
        </Card>

      </section>
    </div>
  );
}

/* PREMIUM CARD */
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] transition">
      <h2 className="text-2xl font-bold text-purple-300 mb-4">{title}</h2>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}
