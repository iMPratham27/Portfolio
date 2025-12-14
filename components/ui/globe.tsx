"use client"

import { useEffect, useRef } from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.3,
  mapSamples: 10000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [{ location: [19.076, 72.8777], size: 0.1 }],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)

  const widthRef = useRef(0)
  const phiRef = useRef(0)

  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return // 🔒 HARD GUARD

    const onResize = () => {
      widthRef.current = canvas.offsetWidth
    }

    onResize()
    window.addEventListener("resize", onResize)

    // 🟢 Create globe ONLY once
    globeRef.current = createGlobe(canvas, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        state.phi = phiRef.current + rs.get()
        state.width = widthRef.current * 2
        state.height = widthRef.current * 2
      },
    })

    // Fade in
    requestAnimationFrame(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1"
      }
    })

    return () => {
      window.removeEventListener("resize", onResize)

      // 🔥 DESTROY SAFELY
      if (globeRef.current) {
        globeRef.current.destroy()
        globeRef.current = null
      }
    }
  }, [config, rs])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-140",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX
          canvasRef.current!.style.cursor = "grabbing"
        }}
        onPointerUp={() => {
          pointerInteracting.current = null
          canvasRef.current!.style.cursor = "grab"
        }}
        onPointerOut={() => {
          pointerInteracting.current = null
          canvasRef.current!.style.cursor = "grab"
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            r.set(r.get() + delta / MOVEMENT_DAMPING)
          }
        }}
        onTouchMove={(e) => {
          if (e.touches[0] && pointerInteracting.current !== null) {
            const delta = e.touches[0].clientX - pointerInteracting.current
            r.set(r.get() + delta / MOVEMENT_DAMPING)
          }
        }}
      />
    </div>
  )
}
