import { HomeProjectCard } from "./HomeProjectCard";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="px-1 py-2 border-b border-neutral-800">
      
      <div className="flex items-center justify-between m-3">
        <h2
          className="pointer-events-none bg-linear-to-b from-white to-white/40 bg-clip-text
            text-transparent text-4xl font-semibold tracking-tight"
        >
          Projects
        </h2>

        <Link
          href="/"
          className="relative z-10 mt-2 flex cursor-pointer items-center gap-2"
        >
          <span className="text-sm font-medium text-neutral-500 
            hover:text-white hover:underline transition ">
            More projects
          </span>
          
        </Link>

      </div>


      {/* Projects grid */}
      <div className="grid grid-cols-2 gap-3">
        <HomeProjectCard
          image="/projects/SmartDB.png"
          title="SmartDB"
          description="AI-powered query engine that translates natural language into MongoDB queries."
          tech={[
            "React",
            "TypeScript",
            "Gemini",
            "Node.js",
            "Express",
            "Tailwind CSS",
            "MongoDB",
            "TanStack Query",
            "Zustand",
          ]}
          href="#"
        />

        <HomeProjectCard
          image="/projects/XpenseTracker.png"
          title="Xpense Tracker"
          description="Expense Tracking app with email alert for selected limits. "
          tech={[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Context-API",
            "O-Auth 2.0",
            "Resend API",
            "Javascript",
            "Tailwind CSS"
          ]}
          href="#"
        />
      </div>
    </div>
  );
}
