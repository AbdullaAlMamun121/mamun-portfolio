import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import profile from '../assets/mamun.jpg';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-gray-400 to-gray-500">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full text-center md:text-left md:w-1/2">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a MERN Stack Web Developer</h2>
                    <p className="text-gray-200 py-4 max-w-md">
                        I've created and designed web applications for the past year.
                        I adore developing web applications at the moment utilizing React, Next, Node, JavaScript, Bootstrap, Tailwind, and MongoDB.
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"></MdOutlineKeyboardArrowRight>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <img src={profile} alt="profile picture" className="rounded-full border border-white mx-auto w-2/3 h-[350px]" />
                </div>
            </div>
        </div>
    );
};

export default Home;
