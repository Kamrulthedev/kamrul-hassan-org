import Link from "next/link";
import {
  FaBlog,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
const socialIcons = [
  {
    name: "github",
    url: "https://github.com/Kamrulthedev",
    icon: FaGithub,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/kamrul-hassan-8661a5288/",
    icon: FaLinkedin,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@KamrulHasan-ue7xo",
    icon: FaYoutube,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/KamrulScripts/",
    icon: FaFacebook,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/kamrulscripts/",
    icon: FaInstagram,
  },
];
const SocialLink = () => {
  return (
    <>
      {socialIcons.map((item) => (
        <Link
          href={item.url}
          key={item.name}
          target="_blank"
          rel="noreferrer"
          aria-label={item.name}
          className="lg:text-2xl text-xl text-slate-light hover:text-slate-lightest transition-all"
        >
          <item.icon />
        </Link>
      ))}

      {/* Blogs Page */}
     <Link href="/blogs">
      <button className="btn-getBlogs2 text-[12px] relative flex items-center gap-1">
        Blogs <FaBlog />
      </button>
    </Link>


    {/* resume */}
      <Link
        href={
          "https://drive.google.com/file/d/1J9P0xbKg3vxSUP0KiWAoILdcCe0JsI8k/view?usp=sharing"
        }
        target="_blank"
        download
      >
        <button className="btn-getResume2  relative px-3 py-1.5 flex items-center gap-0.5">
          Resume <FiDownloadCloud />
        </button>
      </Link>
    </>
  );
};

export default SocialLink;
