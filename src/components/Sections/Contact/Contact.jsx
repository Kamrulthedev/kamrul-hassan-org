import { InView } from "@/components/motion-ui/InView";
import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import SectionHead from "@/components/SectionHead/SectionHead";
import { MdPhone } from "react-icons/md";
import { RiContactsBookFill, RiHomeOfficeLine } from "react-icons/ri";
import Email from "./Email";
const Contact = () => {
  return (
    <div id="contact" className="md:py-20 mb-10 md:mb-0">
      <SectionHead icon={RiContactsBookFill} title="🔗 Let's Network!" />
      <MobileSectionHead
        icon={RiContactsBookFill}
        title="Let's Make It Happen"
      />
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -30px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="p-4 space-y-4">
          <p className="flex items-center gap-2 text-slate-300">
            <RiHomeOfficeLine size={24} /> Cox`s Bazar, Bangladesh
          </p>
          <aside className="flex items-center  gap-2">
            <p className="text-slate-300 text-2xl">
              <MdPhone />
            </p>
            <p className="text-slate-300">
              <span className="hovered-text2">+8801827754168</span>
            </p>
          </aside>
          <Email />
        </div>
      </InView>
    </div>
  );
};

export default Contact;
