import Image from "next/image";

const projects = [
  {
    title: "Elite Coaching – Online Learning Platform",
    img: "/edu.jpg",
    desc: "Full-stack system to capture and manage business enquiries.",
    link: "/projects/lead-management-system",
  },
  {
    title: "Business Operations Management System",
    img: "/bisness.jpg",
    desc: "Centralized system to manage employees, tasks, and operations.",
    link: "/projects/business-operations-management-system",
  },
  {
    title: "AI-Based Virtual Clothes Try-On System",
    img: "/clothes.jpg",
    desc: "AI-based virtual clothing try-on platform using Computer Vision for real-time outfit preview.",
    link: "/projects/ai-assistant",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white px-10 pt-2 pb-8">

      <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 text-center tracking-wide mt-6 mb-2">
  OUR PROJECTS 
</h1>

<p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
  A showcase of our smart digital systems and intelligent software solutions.
</p>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-cyan-400/30 hover:shadow-[0_0_25px_#22d3ee] transition"
          >
            <Image
              src={p.img}
              alt={p.title}
              width={400}
              height={250}
              className="object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold mb-1">
                {p.title}
              </h2>

              <p className="text-gray-400">
                {p.desc}
              </p>

              <a
                href={p.link}
                className="inline-block mt-3 px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
