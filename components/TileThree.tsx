import Image from "next/image"

export default function TileThree() {
    return (
        <div className="overflow-hidden bg-neutral-900/30 relative rounded 
        border border-neutral-800 p-1 max-h-96">
            <Image 
                width={500} 
                height={200} 
                src="/red-bull-car.jpeg" 
                alt="F1Car" 
                className=" rounded-xs w-full h-full transition-transform duration-400 hover:scale-[1.03] "
            />
        </div>
    );
}