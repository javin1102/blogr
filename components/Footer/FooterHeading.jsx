const FooterHeading = (props) => {
  return (
    <h4 className=" mb-5 text-xl text-white font-ubuntu font-bold text-center md:text-left">
      {props.children}
    </h4>
  );
};

export default FooterHeading;
