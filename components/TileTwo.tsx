import { Globe } from "@/components/ui/globe";

export default function TileTwo() {
  return (
    <div
      className="bg-neutral-900/30 relative h-120 w-full flex-1 items-center justify-center
        overflow-hidden rounded border border-neutral-800 pt-10 pb-40 ">
      
      <div
        className="pointer-events-none bg-linear-to-b from-white to-white/30
          bg-clip-text text-transparent text-center text-6xl font-semibold leading-none tracking-tight ">
        Based in India
      </div>

      {/* Globe */}
      <Globe className="top-24" />

      {/* Bottom vignette(Gray Film) */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.25),transparent)]
        "
      />
    </div>
  );
}
