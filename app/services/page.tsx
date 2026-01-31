import Image from "next/image";

const services = [
  {
    title: "Website Design & Development",
    points: [
      "Business websites",
      "Portfolio websites",
      "Landing pages",
      "E-commerce websites",
      "Custom web applications",
      "Mobile-friendly & SEO-optimized designs",
    ],
    benefits: [
      "Professional online presence",
      "High performance & security",
      "Scalable for future growth",
    ],
  },
  {
    title: "Business Software & Automation Systems",
    points: [
      "Business management systems",
      "Employee management systems",
      "Lead & enquiry management systems",
      "Workflow automation tools",
      "Custom dashboards",
      "Internal company tools",
    ],
    benefits: ["Saves time & cost", "Centralized data management", "Improves productivity"],
  },
  {
    title: "CRM & Lead Management Systems",
    points: [
      "Customer database",
      "Lead tracking",
      "Task & follow-up reminders",
      "Admin dashboards",
      "Reports & analytics",
      "Secure login system",
    ],
    benefits: ["No lost leads", "Better customer relationships", "Faster response time"],
  },
  {
    title: "AI-Powered Solutions",
    points: [
      "AI-based virtual clothes try-on",
      "Image processing solutions",
      "Smart recommendation systems",
      "Automation using AI",
      "Custom AI tools for businesses",
    ],
    benefits: ["Innovation-driven growth", "Reduced human effort", "Competitive advantage"],
  },
  {
    title: "Mobile App Development",
    points: [
      "Android apps",
      "Business apps",
      "E-commerce apps",
      "Custom mobile solutions",
    ],
    benefits: ["Secure backend", "Modern UI/UX", "API integration", "Cloud-based systems"],
  },
  {
    title: "SaaS & Startup MVP Development",
    points: [
      "MVP development",
      "SaaS product design",
      "Backend systems",
      "User dashboards",
      "Cloud deployment",
    ],
    benefits: ["Faster launch", "Investor-ready products", "Scalable architecture"],
  },
  {
    title: "UI / UX Design",
    points: [
      "Website UI",
      "App UI",
      "Dashboard interfaces",
      "Product wireframes",
    ],
    benefits: ["Simple navigation", "Professional visuals", "High usability", "Brand consistency"],
  },
  {
    title: "Maintenance & Technical Support",
    points: [
      "Bug fixes",
      "System updates",
      "Security monitoring",
      "Performance optimization",
      "Feature upgrades",
    ],
    benefits: ["Reliable systems", "Continuous improvement", "Long-term support"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      
      {/* HEADER WITH IMAGE */}
<div className="relative w-full h-[380px] mb-20 flex items-center px-6 md:px-16">
  
  {/* Background Image */}
  <img
    src="/ser.jpg"
    alt="services background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Text */}
  <div className="relative z-10 max-w-3xl">
    <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-4">
      Our Services
    </h1>
    <p className="text-gray-200 text-lg">
      At UH TECH, we provide end-to-end digital solutions that help businesses grow,
      automate operations, and build a strong online presence.
    </p>
  </div>

</div>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-zinc-900 rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400 hover:shadow-[0_0_25px_#22d3ee] transition"
          >
            <h2 className="text-2xl font-bold text-cyan-300 mb-4">
              {service.title}
            </h2>

            <p className="font-semibold mb-2">What we offer:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
              {service.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <p className="font-semibold mb-2">Benefits:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              {service.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <a
              href="/contact"
              className="inline-block mt-5 px-5 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition"
            >
              Get a Quote →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
