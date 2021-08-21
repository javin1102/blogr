import Link from "next/link";
import FooterHeading from "./Footer/FooterHeading";
import FooterList from "./Footer/FooterList";
const Footer = () => {
  return (
    <footer className="py-24 flex flex-col w-full items-center justify-center bg-[#25252d] rounded-tr-[8rem] md:flex-row md:justify-evenly md:items-start md:py-12">
      <Link href="/">
        <a
          className="no-underline font-ubuntu
         font-bold text-3xl text-white text-center mb-12"
        >
          Blogr
        </a>
      </Link>
      {/*Lists*/}
      <div className="flex flex-col my-8 md:my-0">
        <FooterHeading>Product</FooterHeading>
        <FooterList
          items={[
            "Overview",
            "Pricing",
            "Marketplace",
            "Features",
            "Integrations",
          ]}
        />
      </div>
      <div className="flex flex-col my-8 md:my-0">
        <FooterHeading>Company</FooterHeading>
        <FooterList items={["About", "Team", "Blog", "Careers"]} />
      </div>
      <div className="flex flex-col my-8 md:my-0">
        <FooterHeading>Connect</FooterHeading>
        <FooterList items={["Contact", "Newsletter", "LinkedIn"]} />
      </div>
    </footer>
  );
};

export default Footer;
