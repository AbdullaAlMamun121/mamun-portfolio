import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/abdulla-al-mamun-bb4aaa148/",
      style: "rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/AbdullaAlMamun121"
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:hmdabdulla121@gmail.com"
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "./public/mamun-resume.pdf",
      style: "rounded-br-md",
      download: true
    },
  ];
  return (
    <div className="lg:flex flex-col top-[45%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-center items-center w-40 h-14 px-4 hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
            style={{
              transform: "translateY(0)",
              transition: "transform 0.3s"
            }}
            onMouseEnter={(e) => (e.target.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
          >
            <a
              className="flex justify-between items-center w-full text-white"
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
