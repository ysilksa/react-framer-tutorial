import {BasicsOfMotion} from "../components/BasicsOfMotion";
import {Gestures} from "../components/Gestures";
import { AnimationControls } from "../components/AnimationControls";
// import { ViewBasedAnimations } from "../components/ViewBaseAnimations";
import { ScrollAnimations } from "../components/ScrollAnimations";

export default function Home() {
  return (
    <div>
      <BasicsOfMotion />
      <Gestures/>
      <AnimationControls/>
      {/* <ViewBasedAnimations/> */}
      <ScrollAnimations/>
    </div>
  );
}
