import Image from "next/image";

export default function HeroSideText() {
    return (
        <div className="flex flex-col items-start gap-4 -mt-10">
            <p className="text-sm font-medium text-green-400 tracking-tight">
                $ whoami
            </p>

            <h1 className="text-5xl font-semibold text-white leading-[1.15]">
                Prathamesh Dhadankar
            </h1>

            <p className="text-neutral-400 text-xl max-w-md">
                Full-stack developer with{" "}
                <span className="text-red-600 font-medium">race-weekend energy</span>.
            </p>

            <div className="flex items-center gap-4 mt-2">
            {[
                { src: "/github-logo.png", alt: "GitHub" },
                { src: "/linkedin-logo.png", alt: "LinkedIn" },
                { src: "/x-logo.png", alt: "X" },
                { src: "/mail-logo.png", alt: "Email" },
            ].map((icon) => (
                <a
                key={icon.alt}
                href="#"
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
                    width={20}
                    height={20}
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
