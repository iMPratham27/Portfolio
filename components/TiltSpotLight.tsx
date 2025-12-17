import { Tilt } from "@/components/ui/tilt";
import Image from "next/image";

function TiltSpotlight() {
  return (
    <div
      className="relative sm:max-w-xs md:max-w-sm aspect-4/5 bg-neutral-900/40
        outline-dotted outline-neutral-700 rounded-2xl p-2 pointer-events-none md:pointer-events-auto
      "
    >
      <Tilt
        rotationFactor={8}
        springOptions={{
          stiffness: 30,
          damping: 5,
          mass: 0.3,
        }}
        className="relative rounded-xl"
      >
        <Image
          src="/hero/profile.jpg"
          alt="Pratham"
          width={400}
          height={600}
          priority
          className=" w-full h-80 md:h-96 object-cover 
            rounded-xl shadow-xl transition-transform duration-500"
        />
      </Tilt>
    </div>
  );
}

export { TiltSpotlight };
