const FooterList = (props) => {
  return (
    <ul className="flex flex-col items-center justify-center md:items-start">
      {props.items.map((item, i) => (
        <li
          key={i}
          className="font-ubuntu text-[#c8c8cb] mb-3 las:mb-0 cursor-pointer hover:text-white"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
