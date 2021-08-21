import MainTextHeading from "./MainTextHeading";
import MainTextParagraph from "./MainTextParagraph";
import editorDesktop from "../../public/images/illustration-editor-desktop.svg";
import editorMobile from "../../public/images/illustration-editor-mobile.svg";
import useWindowSize from "../../custom-hooks/use-window-size";
import Image from "next/image";
const SectionOne = () => {
  const { width } = useWindowSize();
  const editorImage = width > 1024 ? editorDesktop : editorMobile;
  return (
    <section className="flex flex-col lg:flex-row lg:items-center relative">
      <div className="w-4/5 mt-12 md:w-3/5 mx-auto lg:w-[43.75rem] lg:absolute lg:-right-48 -top-20">
        <Image
          src={editorImage}
          layout="responsive"
          alt="editor"
          objectFit="cover"
        />
      </div>

      <div className="max-w-[650px] px-12 mx-auto lg:px-24 lg:mt-14 lg:mx-0">
        <div className="mt-16">
          <MainTextHeading>Introducing an extensible editor</MainTextHeading>
          <MainTextParagraph>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add funcitonality or change the looks of blog.
          </MainTextParagraph>
        </div>

        <div className="mt-16">
          <MainTextHeading>Robust content management</MainTextHeading>
          <MainTextParagraph>
            Flexible content management ebales users to easily move through
            posts. Increase the usability of your blog by adding customized
            vategories, sections, format, or flow. With this functionalitu,
            you're in full control.
          </MainTextParagraph>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
