import BentoGrid from "@/components/BentoGrid";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-neutral-950 relative overflow-hidden">
  
        {/* Subtle Vercel-style grid background */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        <Hero />

        <BentoGrid />
      </div>
    </>
  );
}
