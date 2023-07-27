import React, { useState } from "react";
import img1 from "../assets/portfolio/chef-1.png";
import img2 from "../assets/portfolio/chef-2.png";
import img3 from "../assets/portfolio/chef-3.png";
import img4 from "../assets/portfolio/school-1.png";
import img5 from "../assets/portfolio/school-2.png";
import img6 from "../assets/portfolio/school-3.png";
import img7 from "../assets/portfolio/school-4.png";
import img8 from "../assets/portfolio/school-5.png";
import img9 from "../assets/portfolio/toy-1.png";
import img10 from "../assets/portfolio/toy-2.png";
import img11 from "../assets/portfolio/toy-3.png";
import img12 from "../assets/portfolio/toy-4.png";
import img13 from "../assets/portfolio/toy-5.png";
import img14 from "../assets/portfolio/toy-6.png";
import img15 from "../assets/portfolio/gym1.png";
import img16 from "../assets/portfolio/gym2.png";
import img17 from "../assets/portfolio/gym3.png";
import img18 from "../assets/portfolio/gym4.png";
import img19 from "../assets/portfolio/gym5.png";

const ImageCarousel = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNextClick = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setActiveImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative">
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            className={`rounded-md duration-200 hover:scale-105 ${
              index === activeImageIndex ? "" : "hidden"
            }`}
            src={image}
            alt="projects"
          />
        ))}
      </div>
      <div className="flex justify-center items-center absolute bottom-0 left-0 w-full">
        <button
          className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-transparent border border-white text-black rounded-md"
          style={{ backgroundColor: "transparent" }}
          onClick={handlePrevClick}
        >
          Previous
        </button>

        <button
          className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-transparent border border-white text-black rounded-md"
          style={{ backgroundColor: "transparent" }}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: [img1, img2, img3],
      demo: "https://chef-recipe-assignment.web.app/",
      code: "https://github.com/AbdullaAlMamun121/chef-recipe-client",
      summary:
        "Discover a chef and recipe app with mouthwatering dishes. Explore talented chefs, delightful menu items, and detailed recipes. Add favorites, contact us, and order now for an incredible culinary experience!",
    },
    {
      id: 2,
      src: [img4, img5, img6, img7, img8],
      demo: "https://languagelearning-5d814.web.app/",
      code: "https://github.com/AbdullaAlMamun121/foreign-language-learning-client",
      summary:
        "Explore a comprehensive education platform with user registration and authentication. Manage instructors, enroll students, and select classes seamlessly. Benefit from responsive design and integrated APIs for smooth user experience. Enjoy hassle-free payment processing and role-based access control for efficient administration.",
    },
    {
      id: 3,
      src: [img9, img10, img11, img12, img13, img14],
      demo: "https://toy-assignment-11.web.app/",
      code: "https://github.com/AbdullaAlMamun121/toyWorld-client",
      summary:
        "Discover a delightful baby toy project where you can find the perfect toys for your little ones. Create your own custom items and explore detailed information about each toy. Enjoy a gallery section on the homepage, along with convenient sub-category filtering. Plus, after logging in, you can easily update or delete your created toys for a personalized experience.",
    },
    {
      id: 4,
      src: [img15, img16, img17, img18, img19],
      demo: "https://gym-instruction-abdullaalmamun121.vercel.app/",
      code: "https://github.com/AbdullaAlMamun121/gym-instructor",
      summary:
        "Welcome to our gym instructor project! Discover our happy client section, where our satisfied members share their success stories. Explore the benefits section to learn about our specialized programs and expert trainers. Don't miss our diverse classes section, catering to all fitness levels. Reach out to us through the contact us section and start your fitness journey today! TypeScript, ReactJS, and Tailwind CSS power this dynamic and user-friendly experience. Get ready to transform your life with our fitness expertise!",
    },
  ];

  const [activeProjectSummary, setActiveProjectSummary] = useState(
    Array(portfolios.length).fill(false)
  );

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  const handleSummaryClick = (index) => {
    setActiveProjectSummary((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-gray-900 to-gray-500 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8 mt-40 ">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">View a few of my most recent efforts here.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, demo, code, summary }, index) => (
              <div key={id} className="project-item">
                {" "}
                {/* Wrap each project in a container div */}
                <div className="shadow-md shadow-gray-600 rounded-lg">
                  <ImageCarousel images={src} />
                  <div className="flex justify-center items-center">
                    <button
                      className="w-1/2 px-2 py-3 mt-4 duration-200 hover:scale-105"
                      onClick={() => handleDemoClick(demo)}
                    >
                      Live site
                    </button>
                    <button
                      className="w-1/2 px-2 py-3 mt-4 duration-200 hover:scale-105"
                      onClick={() => handleCodeClick(code)}
                    >
                      Code
                    </button>
                    <button
                      className="w-1/2 px-2 py-3 mt-4 duration-200 hover:scale-105"
                      onClick={() => handleSummaryClick(index)}
                    >
                      Summary
                    </button>
                  </div>
                </div>
                {activeProjectSummary[index] && (
                  <div className="bg-white text-black p-4 mt-4">
                    <p>{summary}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
