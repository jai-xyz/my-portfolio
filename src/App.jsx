import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import resume from "/ORTEGA_RESUME.pdf";
export default function App() {
  // TABS STATE
  const [activeTab, setActiveTab] = useState("projects");
  const handleTabChange = (tab) => {
    setActiveTab(activeTab === tab ? activeTab : tab);
  };

  // PROJECTS DATA
  const defaultProjects = [
    {
      id: 1,
      name: "Online Reservation System for Photo Booth Business",
      type: "Capstone Project",
      technologies:
        "PHP/Laravel, JavaScript/Vue 3, TailwindCSS, MySQL (via PHPMyAdmin)",
      description:
        "Developed an online booking system to simplify and improve the reservation process for a photobooth business. Added PayMongo as a payment gateway to support multiple payment options like GCash, Maya, and bank transfers.",
      link: "https://aeonsphotobooth.jebsdev.solutions/",
    },
    {
      id: 2,
      name: "Modern Café Menu Interface",
      type: "School Project",
      technologies: "HTML, CSS, JavaScript",
      description:
        "Developed an interactive and visually appealing café menu website using front-end technologies, designed to showcase the menu, highlight key café details, and enhance user engagement and navigation.",
      link: "https://jai-xyz.github.io/menu4you/",
    },
    {
      id: 3,
      name: "Digital Street Food Experience",
      type: "School Project",
      technologies: "HTML, CSS, JavaScript, PHP, MySQL (via PHPMyAdmin)",
      description:
        "Developed a web application that simulates a street food experience, allowing users to view and order street food items online. Implemented a user-friendly interface and a secure login system.",
    },
    {
      id: 4,
      name: "Flight Reservation System",
      type: "School Project",
      technologies: "HTML, CSS, JavaScript, PHP, MySQL (via PHPMyAdmin)",
      description:
        "Developed as an online platform, this website enables users to search for and book flights within the Philippines. It offers a user-friendly interface, allowing customers to easily select flight options based on preferences such as dates and destinations across the country.",
    },
  ];

  const [projects, setProjects] = useState(defaultProjects);
  // const contentRef = useRef(null);
  // const [isScrollable, setIsScrollable] = useState(false);

  // useEffect(() => {
  //   if (contentRef.current) {
  //     setIsScrollable(
  //       contentRef.current.scrollHeight > contentRef.current.clientHeight
  //     );
  //   }
  // }, [activeTab, projects]);

  return (
    // main body
    <div className="min-2xl:max-w-5xl min-xl:max-w-5xl min-lg:max-w-4xl min-md:max-w-2xl mx-4 min-xl:mx-auto h-full rounded-lg shadow bg-white min-lg:mt-8 min-xxs:mt-4  flex min-lg:flex-row min-lg:mx-auto min-md:mx-auto min-xxs:flex-col">
      {/* left side */}
      <div className="min-lg:w-2/5 px-4 py-4 flex flex-col justify-between min-md:w-full">
        {/* image and name */}
        <div>
          <div className="flex justify-left items-center">
            <img
              src="./1x1.jpg"
              width={60}
              className="border border-gray-500 rounded-full"
              alt="profile"
            />
            <div className="ml-4 mt-2 flex flex-col items-left justify-left">
              <h2 className="text-lg font-semibold -mb-1">Jairo Ortega</h2>
              <span className="text-xs font-light text-gray-600">
                Web Developer
              </span>
            </div>
          </div>
          {/* descriptions */}
          <div className="text-xs mt-4 flex flex-col items-left justify-left">
            <div className="mb-2">
              I'm <span className="font-medium">Jairo Lexter N. Ortega</span>,
              24 years old of age. An aspiring{" "}
              <span className="font-medium">web developer </span> from Cavite,
              Philippines.
            </div>
            <div className="mb-2">
              Email:{" "}
              <span className="font-medium">
                ortega.jairolexter.n@gmail.com
              </span>
            </div>
            <div className="mb-2">
              {" "}
              Mobile number:<span className="font-medium"> 09665925180</span>
            </div>
            <div className="mb-2 flex items-center">
              Socials:
              <a
                href="https://github.com/jai-xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-2 rounded-md img-grayscale bg-gray-200 px-2 py-1 inline-flex items-center"
              >
                <img
                  src="./github.png"
                  alt="github"
                  width={14}
                  className="mr-1"
                />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jairo-lexter-ortega-822324348/"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-2 rounded-md img-grayscale bg-gray-200 px-2 py-1 inline-flex items-center"
              >
                <img
                  src="./linkedin.png"
                  alt="linkedin"
                  width={14}
                  className="mr-1"
                />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="my-2 border-t border-gray-100"></div>
          {/* technical skills with logo */}
          <div className="mt-2">
            <h3 className="text-sm font-bold">Technical skills</h3>
            <div className="grid min-lg:grid-cols-3 mt-1 gap-2 pe-2 min-xs:grid-cols-5 min-xxs:grid-cols-3">
              <div className="img-grayscale border border-gray-300 hover:border-gray-500 rounded-md flex flex-col items-center justify-center px-6 pt-2 pb-1 ">
                <div>
                  <img src="./html.png" width={24} alt="html" />
                </div>
                <span className="text-[10px] mt-1">HTML</span>
              </div>

              <div className="img-grayscale border border-gray-300 hover:border-gray-500  rounded-md flex flex-col items-center justify-center px-6 pt-2 pb-1 ">
                <div>
                  <img src="./css.png" width={24} alt="css" />
                </div>
                <span className="text-[10px] mt-1">CSS</span>
              </div>

              <div className="img-grayscale border border-gray-300 hover:border-gray-500  rounded-md flex flex-col items-center justify-center px-6 pt-2 pb-1 ">
                <div>
                  <img src="./js.png" width={24} alt="js" />
                </div>
                <span className="text-[10px] mt-1">JavaScript</span>
              </div>

              <div className="img-grayscale border border-gray-300 hover:border-gray-500  rounded-md flex flex-col items-center justify-center px-6 pt-2 pb-1 ">
                <div>
                  <img src="./vue.png" width={24} alt="vue" />
                </div>
                <span className="text-[10px] mt-1">Vue</span>
              </div>

              <div className="img-grayscale border border-gray-300 hover:border-gray-500  rounded-md flex flex-col items-center justify-center px-6 pt-2 pb-1 ">
                <div>
                  <img src="./react.png" width={24} alt="react" />
                </div>
                <span className="text-[10px] mt-1">React</span>
              </div>

              <div className="img-grayscale border border-gray-300 hover:border-gray-500  rounded-md flex flex-col items-center justify-center px-6 pt-2 pb-1 ">
                <div>
                  <img src="./nodejs.png" width={24} alt="nodejs" />
                </div>
                <span className="text-[10px] mt-1">NodeJS</span>
              </div>

              <div className="img-grayscale border border-gray-300 hover:border-gray-500   rounded-md flex flex-col items-center justify-center px-6 pt-3 pb-1 ">
                <div>
                  <img src="./php.png" width={30} alt="php" />
                </div>
                <span className="text-[10px] mt-2">PHP</span>
              </div>

              <div className="img-grayscale border border-gray-300 hover:border-gray-500  rounded-md flex flex-col items-center justify-center px-6 pt-2 pb-1 ">
                <div>
                  <img src="./laravel.png" width={24} alt="laravel" />
                </div>
                <span className="text-[10px] mt-1">Laravel</span>
              </div>
              <div className="img-grayscale border border-gray-300 hover:border-gray-500  rounded-md flex flex-col items-center justify-center px-6 pt-2 pb-1 ">
                <div>
                  <img src="./mysql.png" width={24} alt="mysql" />
                </div>
                <span className="text-[10px] mt-1">MySQL</span>
              </div>
              <div className="img-grayscale  border border-gray-300 hover:border-gray-500  rounded-md flex flex-col items-center justify-center px-6 pt-2 pb-1 ">
                <div>
                  <img src="./git.png" width={24} alt="git" />
                </div>
                <span className="text-[10px] mt-1">Git</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center min-lg:mt-auto min-xxs:mt-4">
          <button className="bg-gray-200 text-sm font-medium text-gray-600 hover:text-white hover:bg-blue-400  transition duration-300 ease-in-out  w-full py-1 rounded-md">
            <a href={resume} download="Resume_JairoOrtega.pdf">
              DOWNLOAD CV
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 inline-block mb-0.5 transition-colors duration-300 ease-in-out"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
            </svg>
          </button>
        </div>
      </div>
      {/* right side */}
      <div className="min-lg:w-3/4 py-4 min-lg:border-l min-lg:border-t-0 min-xxs:border-t border-gray-200">
        <div className="px-4 text-xs font-light text-gray-600">
          Explore my projects and educational background, including
          certifications that showcase my skills and commitment to growth.
        </div>
        <div className="flex mx-auto items-center min-sm:flex-row min-xxs:flex-col  w-full border-b border-gray-200 mt-2">
          <div
            onClick={() => handleTabChange("projects")}
            className={`min-sm:w-1/2 min-xxs:w-full px-4 py-4 cursor-pointer text-center bg-white hover:bg-gray-100 relative`}
          >
            <button className="font-bold relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 inline-block me-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              Projects
              {activeTab === "projects" && (
                <span className="absolute bottom-[-16px] rounded-lg left-1/2 transform -translate-x-1/2 border-b-[5px] border-blue-400 w-full"></span>
              )}
            </button>
          </div>
          <div
            onClick={() => handleTabChange("education")}
            className={`min-sm:w-1/2 min-xxs:w-full px-4 py-4 cursor-pointer text-center bg-white hover:bg-gray-100 relative`}
          >
            <button className="font-bold relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 inline-block me-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              Education & Certifications
              {activeTab === "education" && (
                <span className="absolute bottom-[-16px] rounded-lg left-1/2 transform -translate-x-1/2 border-b-[5px] border-blue-400 w-full"></span>
              )}
            </button>
          </div>
        </div>
        <div
        // ref={contentRef}
        // className={`${
        //   isScrollable
        //     ? "overflow-y-scroll"
        //     : activeTab === "education"
        //     ? "overflow-y-scroll"
        //     : ""
        // }`}
        // style={{
        //   height:
        //     activeTab === "education" && window.innerHeight > 768
        //       ? "auto"
        //       : activeTab === "education" && window.innerHeight < 768
        //       ? "550px"
        //       : "550px",
        // }}
        >
          {activeTab === "projects" ? (
            projects.map((project) => (
              <ShowProjects
                key={project.id}
                name={project.name}
                type={project.type}
                technologies={project.technologies}
                description={project.description}
                link={project.link ? project.link : "none"}
              />
            ))
          ) : (
            <ShowEducation />
          )}
        </div>
      </div>
    </div>
  );
}

function ShowProjects({ name, type, technologies, description, link }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="mx-4 bg-gray-100 rounded-md p-2 text-sm">
          <h3 className="text-sm font-bold uppercase flex justify-between items-center">
            <span>
              {name}
              <span className="ms-1 text-xs font-bold text-gray-600">
                {type}
              </span>
            </span>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5  ${
                  link === "none" ? "hidden" : "text-blue-500"
                }`}
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
              </svg>
            </a>
          </h3>
          <div className="text-xs">
            Technologies:
            <span className="font-medium"> {technologies}</span>
          </div>
          <div className="mt-4 text-xs text-gray-600">{description}</div>
        </div>
      </div>
    </div>
  );
}

function ShowEducation() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="mx-4 bg-gray-100 rounded-md p-2 text-sm">
          <h3 className="text-sm font-bold uppercase">
            Bachelor of Science in Information Technology
          </h3>
          <div className="text-xs font-bold">
            Cavite State University - Silang Campus
          </div>
          <div className="text-xs ">2021 - PRESENT</div>
          <div className="mt-2 text-xs text-gray-600">
            Relevant Coursework: Computer Programming, Data Structures and
            Algorithms. Advanced Database System (MySQL), System Analysis and
            Design, Web System and Technologies (PHP), Integrated Programming
            and Technologies and Object-Oriented Programming
          </div>
        </div>
        <div className="my-1 border-t border-gray-100 mx-4"></div>
      </div>
      <div className="mt-4 mb-8 px-4">
        <Swiper
          style={{
            "--swiper-navigation-color": "#42a5f5 ",
            "--swiper-pagination-color": "#42a5f5 ",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="./certs/cert1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./certs/cert2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./certs/cert3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./certs/cert4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./certs/cert5.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./certs/cert6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./certs/cert7.png" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./certs/cert1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./certs/cert2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./certs/cert3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./certs/cert4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./certs/cert5.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./certs/cert6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./certs/cert7.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
