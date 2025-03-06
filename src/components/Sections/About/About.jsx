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
        <h2 className="text-xl font-semibold text-slate-200">🌟 Who I Am</h2>
        <p>
          Hello! I am a passionate{" "}
          <span className="hovered-text">Full Stack Web Developer</span> who
          loves building modern, scalable, and user-friendly web applications.
          My journey in web development started with curiosity and has evolved
          into a deep passion for solving complex problems with efficient
          digital solutions.
        </p>

        <h2 className="text-xl font-semibold text-slate-200">💻 What I Do</h2>
        <p>
          I specialize in developing high-performance web applications, focusing
          on clean architecture, seamless user experience, and optimized backend
          operations. Whether it’s building interactive frontend interfaces or
          designing robust backend systems, I always aim to create impactful
          digital products. Currently, I am working on projects in{" "}
          <span className="hovered-text">E-commerce</span> and
          <span className="hovered-text ml-2">Travel Tech</span>, ensuring
          scalable and efficient solutions for users worldwide.
        </p>

        <h2 className="text-xl font-semibold text-slate-200">🌱 Beyond Work</h2>
        <p>
          I believe in continuous learning and pushing the boundaries of what’s
          possible in web development. Beyond coding, I enjoy reading, exploring
          new technologies, and contributing to community-driven initiatives. My
          goal is to use technology to make a meaningful impact while constantly
          growing as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
