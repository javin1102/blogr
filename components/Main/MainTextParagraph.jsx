const MainTextParagraph = (props) => {
  const isWhiteColor = props.white ? "text-[#c8c8cb]" : "text-[#4b5862]";
  return (
    <p
      className={
        isWhiteColor +
        " font-light font-overpass text-sm text-center lg:text-left leading-7 lg:mx-0"
      }
    >
      {props.children}
    </p>
  );
};

export default MainTextParagraph;
