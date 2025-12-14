export default function TileFour() {
  return (
    <div
      className=" flex-1 flex-col group relative w-full
        rounded border border-neutral-800 bg-neutral-900/30 p-4 overflow-hidden">
      
      <div
        className=" pointer-events-none bg-linear-to-b from-white to-white/40 bg-clip-text 
        text-transparent text-start text-xl font-semibold leading-none tracking-tight mt-2">
        Github Activity
      </div>

      {/* Contribution graph */}
      <img
        src="https://ghchart.rshah.org/08872B/iMPratham27"
        alt="GitHub activity graph"
        className=" w-full h-full object-contain opacity-90"
      />

      <p className="absolute bottom-3 right-4 text-[10px] text-neutral-500">
        Last 12 months
      </p>
    </div>
  );
}
