import MainTextHeading from "./MainTextHeading";
import MainTextParagraph from "./MainTextParagraph";
import editorDesktop from "../../public/images/illustration-laptop-desktop.svg";
import editorMobile from "../../public/images/illustration-laptop-mobile.svg";
import useWindowSize from "../../custom-hooks/use-window-size";
import Image from "next/image";
//
const SectionThird = () => {
  const { width } = useWindowSize();
  const editorImage = width > 1024 ? editorDesktop : editorMobile;
  return (
    <section className="flex flex-col lg:flex-row lg:items-center relative">
      <div className="w-full mb-12 md:w-3/5 mx-auto lg:absolute lg:-left-52 lg:w-[43.75rem] lg:-top-20 lg:my-0 ">
        <Image
          src={editorImage}
          layout="responsive"
          alt="editor"
          objectFit="cover"
        />
      </div>

      <div className="max-w-[720px] px-12 mx-auto lg:px-24 lg:mt-14 lg:ml-auto lg:mx-0">
        <div className="mt-0">
          <MainTextHeading>Free, open, simple</MainTextHeading>
          <MainTextParagraph>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </MainTextParagraph>
        </div>

        <div className="mt-12">
          <MainTextHeading>Powerful tooling</MainTextHeading>
          <MainTextParagraph>
            Batteris included. We built a simple straightforward CLI tool that
            makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </MainTextParagraph>
        </div>
      </div>
    </section>
  );
};

export default SectionThird;
