import { Tilt } from "@/components/ui/tilt";

function TiltSpotlight() {
  return (
    <div className="relative max-w-sm aspect-4/5 bg-neutral-900/40 outline-dotted outline-neutral-700 rounded-2xl p-2">
      <Tilt
        rotationFactor={8}
        springOptions={{
          stiffness: 30,
          damping: 5,
          mass: 0.3,
        }}
        className="relative rounded-xl"
      >
        <img
          src="/profile.jpg"
          alt="Pratham"
          className="
            w-full h-96
            object-cover rounded-xl
            shadow-xl
            transition-transform duration-500
          "
        />
      </Tilt>
    </div>
  );
}

export { TiltSpotlight };
