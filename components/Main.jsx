import SectionOne from "./Main/Section-1";
import SectionSecond from "./Main/Section-2";
import SectionThird from "./Main/Section-3";
const Main = () => {
  return (
    <main className="py-20 overflow-hidden relative">
      <h3 className="text-[#1f3f5b] font-overpass font-bold text-4xl text-center">
        Designed for the future
      </h3>
      <SectionOne />
      <SectionSecond />
      <SectionThird />
    </main>
  );
};

export default Main;
