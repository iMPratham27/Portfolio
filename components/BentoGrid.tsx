import TileFour from "./TileFour";
import TileOne from "./TileOne";
import TileThree from "./TileThree";
import TileTwo from "./TileTwo";

export default function BentoGrid() {
  return (
    <div className="border-y border-neutral-800 py-2 px-1">
      <div
        className="
          grid gap-1
          grid-cols-1
          md:grid-cols-2
        "
      >
        <TileOne />
        <TileTwo />
        <TileThree />
        <TileFour />
      </div>
    </div>
  );
}
