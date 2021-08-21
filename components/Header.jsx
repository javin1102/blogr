import Navbar from "./Nav/Navbar";
import Link from "next/link";
import Image from "next/image";
import bg from "../public/images/bg-pattern-intro.svg";
//bg-gradient-to-b from-[#ff8f70] to-[#ff3d54]
const Header = () => {
  return (
    <div
      className="flex flex-col
     py-8 px-6 h-[500px] rounded-bl-[8rem] lg:px-36 bg-gradient-to-b 
     from-[#ff8f70] to-[#ff3d54] relative"
    >
      <div className="absolute top-0 left-0 w-full rounded-bl-[8rem] h-full overflow-hidden z-[1]">
        <Image
          src={bg}
          alt="asd"
          layout="fill"
          objectFit="cover"
          className="scale-[1.7]"
        />
      </div>

      <Navbar />
      <div
        className=" flex flex-col
       px-6 items-center my-auto z-[1]"
      >
        <h4 className="font-overpass font-bold text-white text-center text-3xl sm:text-5xl">
          A modern publishing platform
        </h4>

        <p className="text-center text-white font-overpass mt-4 text-base sm:text-xl ">
          Grow your audience and build your online brand
        </p>
        <div className="mt-8 w-full flex flex-col items-center sm:flex-row justify-center">
          <Link href="/">
            <a
              className="inline-block w-[130px] text-center p-3 bg-white rounded-full text-sm border-2 border-white 
            font-ubuntu font-bold text-[#ff525d] mb-4 sm:mr-9 sm:mb-0 "
            >
              Start For Free
            </a>
          </Link>
          <Link href="/">
            <a className="inline-block w-[130px] text-center p-3 rounded-full border-white  text-sm border-2  font-ubuntu font-bold text-white">
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
