"use client"

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech: string[];
  href?: string;
}

export function HomeProjectCard({image, title, description, tech, href="#"}: ProjectCardProps) {
  return (
    <div
      className=" group rounded-xl border border-neutral-800 cursor-pointer
        bg-neutral-950 p-2  hover:border-neutral-700 transition translate-0
    ">
      
      <div className="relative h-72 w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          className="object-cover object-top transition-transform 
          duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-2xl text-neutral-300 font-semibold tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-neutral-500 line-clamp-2">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs rounded-full border border-neutral-800
                bg-neutral-900/60 px-2 py-1 text-neutral-500"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href={href}
          className=" mt-2 inline-flex text-sm font-medium text-neutral-400
            items-center gap-2 group-hover:text-white transition"
        >
          View project
          <Image 
            src="/projects/arrow-up-right.png" 
            alt="View Project" 
            height={16} 
            width={16}
            className="opacity-80 group-hover:opacity-100 transition"
          />
        </Link>
      </div>
    </div>
  );
}
