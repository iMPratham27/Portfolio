import HeroSideText from "./HeroSideText";
import { TiltSpotlight } from "./TiltSpotLight";

export default function Hero() {
    return (
        <div
            className="
                flex min-h-screen
                flex-col-reverse md:flex-row
                justify-center items-center
                gap-10 md:gap-20
                px-4 sm:px-6 lg:px-12
                relative mb-5 md:mb-0
            "
            >

            <TiltSpotlight />
            
            <HeroSideText />
        </div>
    );
}