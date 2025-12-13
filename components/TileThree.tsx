import Image from "next/image"

export default function TileThree() {
    return (
        <div className="bg-neutral-900/30 relative rounded border border-neutral-800 p-1">
            <Image 
                width={500} 
                height={200} 
                src="/red-bull-car.jpeg" 
                alt="F1Car" 
                className="rounded-2xl "
            />
        </div>
    );
}