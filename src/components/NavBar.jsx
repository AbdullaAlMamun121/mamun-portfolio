import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="relative z-50">
      <div className="flex justify-between items-center w-full h-20 px-4 bg-gray-400 text-white">
        <div>
          <h2 className="text-5xl font-semibold ml-2 cursor-pointer">Abdulla Al Mamun</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-gray-300 hover:text-white duration-200 capitalize"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-gray-300 pr-4 z-10 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-20 left-0 w-full max-h-screen overflow-y-auto bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 md:hidden"
          style={{ paddingTop: "80px", paddingBottom: "80px" }} // Add more padding
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-4xl cursor-pointer capitalize hover:text-white"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
