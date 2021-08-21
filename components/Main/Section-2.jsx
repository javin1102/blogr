import Image from "next/image";
import MainTextHeading from "./MainTextHeading";
import MainTextParagraph from "./MainTextParagraph";
import phoneImage from "../../public/images/illustration-phones.svg";
import bgImage from "../../public/images/bg-pattern-circles.svg";
//
const SectionSecond = () => {
  return (
    <section className="relative mt-36 mb-20 h-[31.25rem] md:h-[28.125rem] lg:h-[18.75rem]">
      <div className="w-full h-full bg-gradient-to-b from-[#2c2d3f] to-[#3f4164] rounded-bl-[8rem] rounded-tr-[8rem] overflow-hidden">
        <div className="w-full -translate-y-24 lg:w-1/2 lg:-translate-y-96 lg:-translate-x-36">
          <Image
            src={bgImage}
            layout="responsive"
            alt="editor"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center absolute -top-28 lg:-top-0 w-full lg:h-full">
        <div className="w-[70%] sm:w-3/5 md:w-1/3 mx-auto lg:min-w-[25rem] lg:max-w-[26rem] lg:mx-0 lg:ml-24">
          <Image
            src={phoneImage}
            layout="responsive"
            alt="editor"
            objectFit="cover"
          />
        </div>
        <div className="max-w-[720px] px-12 mx-auto lg:px-24 lg:mx-0 lg:ml-auto">
          <MainTextHeading white={true}>
            State of the Art Infrastructure
          </MainTextHeading>
          <MainTextParagraph white={true}>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </MainTextParagraph>
        </div>
      </div>
    </section>
  );
};

export default SectionSecond;
