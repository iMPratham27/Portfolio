import { OrbitingCircles } from "@/components/ui/orbiting-circles"

export default function TileOne() {
  return (
    <>
      {/* Desktop only */}
      <div className="hidden md:flex">
        <div
          className="relative h-120 w-full flex items-center justify-center
            overflow-hidden rounded border border-neutral-800 bg-neutral-900/30"
        >
          <div
            className="pointer-events-none bg-linear-to-b from-white to-white/30 bg-clip-text
              text-transparent text-center text-3xl font-semibold"
          >
            Stack
          </div>

          <OrbitingCircles radius={130} iconSize={40} duration={18}>
            <img src="/tech-stack/nextjs.svg" className="h-full w-full" />
            <img src="/tech-stack/reactjs.svg" className="h-full w-full" />
            <img src="/tech-stack/nodejs.svg" className="h-full w-full" />
            <img src="/tech-stack/typescript.svg" className="h-full w-full" />
            <img src="/tech-stack/java.svg" className="h-full w-full" />
          </OrbitingCircles>

          <OrbitingCircles radius={190} iconSize={36} duration={28} reverse>
            <img src="/tech-stack/html.svg" className="h-full w-full opacity-90" />
            <img src="/tech-stack/tailwindcss.svg" className="h-full w-full opacity-90" />
            <img src="/tech-stack/mongodb.svg" className="h-full w-full opacity-90" />
            <img src="/tech-stack/mysql.svg" className="h-full w-full opacity-90" />
            <img src="/tech-stack/git.svg" className="h-full w-full opacity-90" />
          </OrbitingCircles>
        </div>
      </div>


      {/* Mobile */}
      <div className="md:hidden">
        <div className="rounded border border-neutral-800 bg-neutral-900/30 p-6">
          <p className="text-center text-xl font-semibold text-neutral-200 mb-4">
            Stack
          </p>

          <div className="grid grid-cols-4 gap-4 place-items-center">
            <img src="/tech-stack/reactjs.svg" className="h-8 w-8" />
            <img src="/tech-stack/nextjs.svg" className="h-8 w-8" />
            <img src="/tech-stack/nodejs.svg" className="h-8 w-8" />
            <img src="/tech-stack/typescript.svg" className="h-8 w-8" />
            <img src="/tech-stack/java.svg" className="h-8 w-8" />
            <img src="/tech-stack/mongodb.svg" className="h-8 w-8" />
            <img src="/tech-stack/tailwindcss.svg" className="h-8 w-8" />
            <img src="/tech-stack/git.svg" className="h-8 w-8" />
          </div>
        </div>
      </div>

    </>
  )
}