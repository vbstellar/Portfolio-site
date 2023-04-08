import Head from "next/head";
import ProjectCard from "@/components/ProjectCard";
import { BsFillMoonStarsFill, BsFillSunriseFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
//express git github java python
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { DiNodejs, DiMongodb, DiJava, DiPython, DiCss3 } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import p1 from "../../public/p1.png"
import p2 from "../../public/p2.png"
import p3 from "../../public/p3.png"
import web1 from "../../public/website1.png";
import web2 from "../../public/website2.png";
import web3 from "../../public/website3.png";
import web4 from "../../public/website4.png";
import web5 from "../../public/website5.png";
import web6 from "../../public/website6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Vishu{"'"}s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">vbstellar</h1>
            <ul className="flex items-center">
              <li className="hover:text-gray-400">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              {/* <li><BsFillSunriseFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl"/></li> */}
              <li>
                <a
                  href="https://resume.io/r/Y6q4mHQB6"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8 hover:bg-gradient-to-l"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Vishu Bansal
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Web Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              A Engineering Student and a <span className="text-teal-600">Freelancer</span>  who is interested in programming. I love to
              build web apps and can make full stack web applications. <span className="text-teal-600">Contact me</span> on any of my socials to 
              bring your ideas to reality.
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a
              href="https://www.twitter.com/vbstellar"
              className="hover:text-blue-400"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://www.linkedin.com/in/vishuban/"
              className="hover:text-blue-800"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.github.com/vbstellar"
              className="hover:text-black"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" alt="" />
          </div>
        </section>

        {/* section second */}

        <section>
          <div>
            <h3 className=" text-3xl py-8 dark:text-white font-semibold">Projects</h3>
            <p className=" text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
             Here are some of the projects that I build on different technologies. Below I have given github repo of all of them. Feel free to check them out.
            </p>
          </div>
          <div className="lg:flex gap-10">

          <ProjectCard 
            logo={p1}
            name="Aarna" 
            desc="Created a fully functional website for a Diagnostic Centre named Aarna."
            link="https://github.com/vbstellar/Aarna"
            website="https://aarnadiagnosticcentre.netlify.app/"
            tech1="React"
            tech2="Axios Server"
            tech3="TailwindCss"
          />
            <ProjectCard 
            logo={p2}
            name="Keeper" 
            desc="Keeper web app is a clone of google keep application to take notes."
            link="https://github.com/vbstellar/Keeper"
            website="https://github.com/vbstellar/Keeper"
            tech1="React"
            tech2="JS"
            tech3="Bootstrap"
          />
          <ProjectCard 
            logo={p3}
            name="Blog Site" 
            desc="Blog site to post blogs on tech topics. It uses local server to fetch files."
            link="https://github.com/vbstellar/BlogSite_NextApp"
            website="https://blog-site-next-app.vercel.app/"
            tech1="NextJs"
            tech2="Typescript"
            tech3="Vanilla Css"
          />
           
          </div>
        </section>

        
        <section>
          <div>
            <h3 className=" text-3xl py-8 dark:text-white font-semibold">
              Skills
            </h3>
            <div className=" text-5xl grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-16 py-3">
            <a
              href="https://nextjs.org/"
              className="text-black dark:text-white"
            >
              <SiNextdotjs/>  
            </a>
            <a
              href="https://react.dev/"
              className="text-blue-400"
            >
              <FaReact/>  
            </a>
            <a
              href="https://tailwindcss.com/"
              className="text-[#38bdf8]"
            >
              <SiTailwindcss/>
            </a>
            <a
              href="https://www.mongodb.com/"
              className="text-black dark:text-white"
            >
              <DiMongodb/>
            </a>
            <a
              href="https://nodejs.org/en"
              className="text-black dark:text-white"
            >
              <DiNodejs/>
            </a>
            <a
              href="https://www.javascript.com/"
              className="text-yellow-400"
            >
              <SiJavascript/>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              className="text-red-500"
            >
              <SiHtml5/>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              className="text-blue-500"
            >
              <DiCss3/>
            </a>
            <a
              href="https://expressjs.com/"
              className="text-black dark:text-white"
            >
              <SiExpress/>
            </a>
            <a
              href="https://expressjs.com/"
              className="text-red-600"
            >
              <BsGit/>
            </a>
            <a
              href="https://expressjs.com/"
              className="text-black dark:text-white"
            >
              <AiFillGithub/>
            </a>
            <a
              href="https://expressjs.com/"
              className="dark:text-white text-black"
            >
              <DiJava/>
            </a>
            <a
              href="https://expressjs.com/"
              className="dark:text-white"
            >
              <DiPython/>
            </a>
          </div>
          </div>
        </section>

        {/* section 3 */}
        <section className="pb-20">
          <div>
            <h3 className="text-3xl py-8 dark:text-white font-semibold">Experience</h3>
            <p className=" text-md py-2 leading-8 text-gray-800 dark:text-gray-200 pb-16">
              I am a web developer living in Delhi who{" "}
              <span className="text-teal-600">
                {" "}
                works remotely 
              </span>{" "}
              and also do <span className="text-teal-600">Freelancing.</span> {" "}
              If you are someone who have idea but don{"'"}t know who to bring it to
              reality then leave it to me. I can create beautiful web applications and help you
              grow your business, make landing pages, create your portfolio website, your projects, etc.
              You can contact me on <a href="#" className=" font-bold text-teal-600"> my socials</a> or <a href="mailto:bansalvishu56@gmail.com" className=" font-bold text-teal-600">mail me </a>and I surely will respond.
              Below you can see some of my work.
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              ></Image>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
