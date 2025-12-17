export default function TileFour() {
  return (
    <div
      className=" relative w-full h-80 md:h-96 overflow-hidden
        rounded border border-neutral-800 bg-neutral-900/30 p-2 sm:p-4 flex flex-col"
    >
      <div
        className="
          pointer-events-none bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent
          text-left text-lg sm:text-xl font-semibold leading-none tracking-tight mt-1 sm:mt-2"
      >
        Github Activity
      </div>

      <img
        src="https://ghchart.rshah.org/08872B/iMPratham27"
        alt="GitHub activity graph"
        className="mt-2 w-full flex-1 object-contain opacity-90"
      />

      <p className="absolute bottom-2 right-3 text-[10px] sm:text-xs text-neutral-500">
        Last 12 months
      </p>
    </div>
  );
}
