import { socials } from "@/config/socials";
import Image from "next/image";

export default function HeroSideText() {
    return (
        <div className="flex flex-col items-start gap-4 -mt-10">
            <p className="text-sm font-medium text-green-400 tracking-tight">
                $ whoami
            </p>

            <h1 className="text-5xl font-semibold bg-linear-to-b from-white to-white/60 bg-clip-text 
                text-transparent leading-[1.15]">
                Prathamesh Dhadankar
            </h1>

            <p className="text-neutral-400 text-xl max-w-md">
                Full-stack developer with{" "}
                <span className="bg-linear-to-b from-red-400 to-red-700 bg-clip-text 
                text-transparent font-medium">race-weekend energy</span>.
            </p>

            <div className="flex items-center gap-4 mt-2">
            {[
                { src: "/hero/github-logo.png", alt: "GitHub", url: `${socials.github}` },
                { src: "/hero/linkedin-logo.png", alt: "LinkedIn", url: `${socials.linkedin}` },
                { src: "/hero/x-logo.png", alt: "X", url: `${socials.x}` },
                { src: "/hero/mail-logo.png", alt: "Email", url: `${socials.email}` },
            ].map((icon) => (
                <a
                key={icon.alt}
                href={icon.url}
                target="_blank"
                className="
                    p-2 rounded-full
                    border border-neutral-800
                    bg-neutral-900/40
                    hover:bg-neutral-800/60
                    hover:border-neutral-700
                    transition
                "
                >
                <Image
                    width={22}
                    height={22}
                    src={icon.src}
                    alt={icon.alt}
                    className="opacity-80 hover:opacity-100 transition"
                />
                </a>
            ))}
            </div>

            
        </div>
    );
}
