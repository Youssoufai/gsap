import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import { SecondSection } from "./components/SecondSection";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";

export default function Home() {
  return (
    <>
      <SmoothScrollWrapper>
        <HeroSection />
        <SecondSection />
      </SmoothScrollWrapper>
    </>
  );
}
