import Link from "next/link";
import DarkArrow from "../../public/images/icon-arrow-dark.svg";
import LightArrow from "../../public/images/icon-arrow-light.svg";
import Image from "next/image";
import useWindowDimensions from "../../custom-hooks/use-window-size";
import React, { useRef, useEffect } from "react";

const NavLink = (props) => {
  const { width } = useWindowDimensions();
  const arrow = width > 1024 ? LightArrow : DarkArrow;
  const activeArrowClass =
    props.activeChild === props.id ? "rotate-[-180deg]" : "rotate-0";
  const dropDownTransitionClass =
    props.activeChild === props.id
      ? " max-h-[500px] opacity-100 "
      : " max-h-[0px] opacity-0 ";
  const dropDownref = useRef();

  //Click outside close dropdown
  useEffect(() => {
    const handler = (event) => {
      if (
        !dropDownref.current.contains(event.target) &&
        !event.target.classList.contains("dropdown")
      ) {
        props.setActive(0);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div className="mb-7 lg:mb-0 lg:mt-2 lg:mx-5 relative">
      <div
        className="flex w-[fit-content] mx-auto items-center cursor-pointer dropdown"
        onClick={() => {
          props.setActive(props.id);
          if (props.activeChild === props.id) props.setActive(0);
        }}
        ref={dropDownref}
      >
        <span
          className="font-overpass font-bold text-lg text-[#1f3f5b] mr-2 
        lg:text-white lg:font-ubuntu lg:font-normal dropdown"
        >
          {props.title}
        </span>
        <Image
          src={arrow}
          alt="arrow"
          layout="fixed"
          width={13}
          height={9}
          className={activeArrowClass + " transition-transform dropdown"}
        />
      </div>
      <div
        className={
          // dropDownListClass +
          "flex flex-col bg-gray-200 w-full rounded-lg mt-5 lg:bg-white lg:mt-0 lg:absolute lg:rounded-md lg:top-9 lg:min-w-[125px] " +
          "transition-all overflow-hidden duration-300 " +
          dropDownTransitionClass
        }
      >
        {props.dropDown.map((item, i) => (
          <Link key={i} href="#">
            <a
              className="py-4 text-[#393957a9] text-center text-base font-bold 
            font-overpass hover:text-black"
            >
              {item}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLink;
