import HeroSideText from "./HeroSideText";
import { TiltSpotlight } from "./TiltSpotLight";

export default function Hero() {
    return (
        <div className="flex min-h-screen justify-center items-center gap-20 px-6 relative">
      
            <TiltSpotlight />
            
            <HeroSideText />
        </div>
    );
}