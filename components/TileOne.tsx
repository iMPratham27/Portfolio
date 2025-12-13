import { OrbitingCircles } from "@/components/ui/orbiting-circles"

export default function TileOne() {
  return (
    <div className="relative h-120 w-120 flex items-center justify-center 
        overflow-hidden rounded border border-neutral-800 bg-neutral-900/30">

      <div
        className=" pointer-events-none bg-linear-to-b from-white to-white/30 bg-clip-text 
        text-transparent text-center text-3xl font-semibold leading-none tracking-tight">
        Stack
      </div>

      {/* Inner orbit */}
      <OrbitingCircles radius={130} iconSize={40} duration={18}>
        <img src="/tech-stack/nextjs.svg" className="h-full w-full opacity-100" />
        <img src="/tech-stack/reactjs.svg" className="h-full w-full opacity-100" />
        <img src="/tech-stack/nodejs.svg" className="h-full w-full opacity-100" />
        <img src="/tech-stack/typescript.svg" className="h-full w-full opacity-100"/>
        <img src="/tech-stack/java.svg" className="h-full w-full opacity-100" />
      </OrbitingCircles>

      {/* Outer orbit */}
      <OrbitingCircles radius={185} iconSize={36} duration={28} reverse>
        <img src="/tech-stack/html.svg" className="h-full w-full opacity-90" />
        <img src="/tech-stack/tailwindcss.svg" className="h-full w-full opacity-90" />
        <img src="/tech-stack/mongodb.svg" className="h-full w-full opacity-90" />
        <img src="/tech-stack/mysql.svg" className="h-full w-full opacity-90" />
        <img src="/tech-stack/git.svg" className="h-full w-full opacity-90" />
      </OrbitingCircles>
    </div>
  )
}
