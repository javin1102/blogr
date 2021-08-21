import Link from "next/link";
const NavButtons = () => {
  return (
    <div
      className="w-min flex flex-col items-center mt-10 mx-auto
    lg:flex-row lg:mt-0 lg:mr-0 "
    >
      <Link href="#">
        <a
          className="font-overpass text-lg 
        inline-block 
        text-center font-bold text-[#1f3f5b] mb-2 py-3 lg:text-white
         lg:font-ubuntu lg:font-normal lg:mr-8 "
        >
          Login
        </a>
      </Link>
      <Link href="#">
        <a
          className="text-center font-overpass text-lg 
        inline-block w-[150px] bg-gray-800 text-white
        rounded-full bg-gradient-to-r 
        from-[#ff8f70] to-[#ff3d54] font-bold py-3
        lg:text-[#ff3d54] lg:bg-none lg:bg-white
         lg:font-ubuntu lg:font-bold "
        >
          Sign Up
        </a>
      </Link>
    </div>
  );
};

export default NavButtons;
