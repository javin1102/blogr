const MainTextHeading = (props) => {
  const isWhiteColor = props.white ? "text-white" : "text-[#1f3f5b]";
  return (
    <h4
      className={
        isWhiteColor +
        " font-overpass font-bold mb-4 text-2xl text-center lg:text-left lg:mx-0"
      }
    >
      {props.children}
    </h4>
  );
};

export default MainTextHeading;
