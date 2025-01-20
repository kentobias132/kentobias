import Marquee from "react-fast-marquee";
import flutter from "../assets/icons/flutter.svg";
import javascript from "../assets/icons/Javascript.svg";
import typescript from "../assets/icons/Typescript.svg";
import nodejs from "../assets/icons/Nodejs.svg";
import nextjs from "../assets/icons/nextjs.svg";
import dart from "../assets/icons/dart.svg";
import Image from "next/image";

export default function Skills() {
  return (
    <Marquee style={{ transform: "rotate(3deg)" }} speed={100} autoFill>
      <div className="flex gap-8 mx-4">
        <Image
          width={80}
          height={80}
          src={flutter.src}
          alt="fluter image"
          className=" rounded-3xl border-[3px] border-gray-100 bg-gray-300"
        />
        <Image
          width={80}
          height={80}
          src={dart.src}
          alt="dart"
          className=" p-2 rounded-3xl border-[3px] border-gray-100 bg-gray-300"
        />
        <Image
          width={80}
          height={80}
          src={nodejs.src}
          alt="node"
          className=" p-4 rounded-3xl border-[3px] border-gray-100 bg-gray-200"
        />
        <div className="size-20 rounded-3xl border-[3px] bg-black border-gray-100">
          <Image
            width={80}
            height={80}
            src={nextjs.src}
            alt="next"
            className="w-full bg-white rounded-full"
          />
        </div>
        <Image
          width={80}
          height={80}
          src={typescript.src}
          alt="typescript"
          className=" rounded-3xl border-[3px] border-gray-100"
        />
      </div>
    </Marquee>
  );
}
