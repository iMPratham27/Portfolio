import TileFour from "./TileFour";
import TileOne from "./TileOne";
import TileThree from "./TileThree";
import TileTwo from "./TileTwo";

export default function BentoGrid() {
    return (
        <>
            <div className="border-y border-neutral-800 p-1">
                <div className="flex flex-col gap-1">
                    
                    <div className="flex gap-1">
                        <TileOne />
                        <TileTwo />
                    </div>

                    <div className="flex gap-1">
                        <TileThree />
                        <TileFour />
                    </div>

                </div>
            </div>

        </>
    );
}