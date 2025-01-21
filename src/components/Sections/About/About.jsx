import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import { FcAbout } from "react-icons/fc";

const About = () => {
  return (
    <section
      id="about"
      className="text-slate-400 space-y-6 leading-7 md:pt-20 md:pb-0 pb-10 md:p-4 p-0"
    >
      <MobileSectionHead icon={FcAbout} title="About Me" />
      <div className="px-4 md:px-0 space-y-6">
        <h2 className="text-xl font-semibold text-slate-200">
          🌟 Who I Am
        </h2>
        <p>
          Hello! I&apos;m a passionate Full Stack Developer with a strong focus
          on crafting seamless, user-friendly web experiences. By combining
          thoughtful design with robust engineering, I create solutions that
          are not just functional but impactful.
        </p>
        <h2 className="text-xl font-semibold text-slate-200">
          💻 What I Do
        </h2>
        <p>
          Currently, I&apos;m contributing as a{" "}
          <span className="hovered-text">Full Stack Developer</span> at{" "}
          <span className="hovered-text">Sundarban Courier Service</span>. My
          work revolves around building dynamic user interfaces and intuitive
          digital experiences that align with business objectives. Whether it’s
          creating scalable front-end components with{" "}
          <span className="hovered-text">React</span> or optimizing back-end
          operations using <span className="hovered-text">Node.js</span>, my
          focus is on delivering excellence.
        </p>
        <h2 className="text-xl font-semibold text-slate-200">
          🌱 Beyond Work
        </h2>
        <p>
          I thrive on pushing boundaries and tackling challenges that foster
          growth. Staying ahead in the ever-evolving tech landscape is a
          priority, so I&apos;m constantly experimenting with new tools and
          technologies. When I&apos;m not coding, you can find me writing,
          reading, or nurturing my garden, drawing creative inspiration from
          the beauty of nature.
        </p>
      </div>
    </section>
  );
};

export default About;
