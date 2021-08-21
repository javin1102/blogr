import Link from "next/link";
import NavLink from "./NavLink";
import NavButtons from "./NavButtons";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../custom-hooks/use-window-size";
const Navbar = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const [activeChild, setActiveChild] = useState(0);
  const { width } = useWindowDimensions();
  const activeClassBurger = width <= 1024 && activeBurger ? "tham-active" : "";

  const dropDownItems = [
    {
      title: "Product",
      dropDown: [
        "Overview",
        "Pricing",
        "Marketplace",
        "Features",
        "Integrations",
      ],
    },
    {
      title: "Company",
      dropDown: ["About", "Team", "Blog", "Careers"],
    },
    {
      title: "Connect",
      dropDown: ["Contact", "Newsletter", "Linkedin"],
    },
  ];

  const activeClassLists = () => {
    if (width > 1024) {
      return "opacity-100 transition-none ";
    }
    if (activeBurger) {
      return "max-h-[800px] opacity-100 transition-all";
    }
    return "max-h-[0px] opacity-0 transition-all";
  };

  return (
    <nav
      className="flex items-center justify-between relative z-10 
    lg:items-start"
    >
      <Link href="/">
        <a
          className="no-underline font-ubuntu
         font-bold text-3xl text-white"
        >
          Blogr
        </a>
      </Link>
      <div
        className={
          "bg-white rounded-xl absolute w-full top-16 px-7 py-10 shadow-2xl  duration-[400ms] max-h-[800px] overflow-y-hidden lg:overflow-y-visible " +
          activeClassLists() +
          " lg:static lg:flex lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:ml-6 lg:justify-evenly lg:max-h-full"
        }
      >
        <div className="lg:flex">
          {dropDownItems.map((item, i) => (
            <NavLink
              key={i + 1}
              title={item.title}
              dropDown={item.dropDown}
              setActive={(val) => {
                setActiveChild(val);
              }}
              activeChild={activeChild}
              id={i + 1}
            />
          ))}
        </div>

        <div className="w-full h-[1.5px] bg-gray-200 lg:hidden"></div>

        <NavButtons />
      </div>
      <div
        className={
          activeClassBurger + " lg:hidden tham tham-e-squeeze tham-w-6"
        }
        onClick={() => {
          setActiveBurger(!activeBurger);
        }}
      >
        <div className="tham-box">
          <div className="tham-inner bg-white" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
