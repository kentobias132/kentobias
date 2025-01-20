"use client";
import { LucideGithub, LucideTwitter, LucideLinkedin } from "lucide-react";
import ShimmerButton from "../components/ui/shimmer-button";

export default function Hero() {
  return (
    <div className="flex flex-col mt-40 items-center">
      <h4 className="font-semibold tracking-tighter max-w-3xl text-center text-4xl sm:text-5xl">
        Hi, I'm
        <span className="text-darkText"> Tobi</span> a fullstack{" "}
        <span className="text-darkText">software engineer</span> crafting{" "}
        <span className="text-darkText">
          impactful digital solutions worldwide{" "}
        </span>
      </h4>

      <h4 className="text-lg text-center pt-2 font-medium text-darkText/90">
        Also known as KenTobias, I create scalable and efficient projects that
        deliver value.
      </h4>
      <a href="/Tobi_Kehinde_CV.pdf" download>
        <button className="border-[#707581] mt-5 rounded-lg border px-5 py-2.5 text-sm text-darkText">
          Check Resumé
        </button>
      </a>
      <div className="flex gap-2.5 items-center mt-2.5">
        <a href="https://github.com/kentobias132" target="_blank">
          <ShimmerButton
            shimmerSize={"1px"}
            borderRadius={"10px"}
            background="#363b45"
            className="p-2"
          >
            <LucideGithub size={16} color="white" />
          </ShimmerButton>
        </a>
        <a
          href="https://www.linkedin.com/in/tobi-kehinde-2a11a7213/"
          target="_blank"
        >
          <ShimmerButton
            shimmerSize={"1px"}
            borderRadius={"10px"}
            background="#363b45"
            className="p-2"
          >
            <LucideLinkedin size={16} color="white" />
          </ShimmerButton>
        </a>
        <a href="https://x.com/holuwerthobhi" target="_blank">
          <ShimmerButton
            shimmerSize={"1px"}
            borderRadius={"10px"}
            background="#363b45"
            className="p-2 "
          >
            <LucideTwitter size={16} color="white" />
          </ShimmerButton>
        </a>
      </div>
    </div>
  );
}
