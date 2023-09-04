import { TagCloud } from "@frank-mayer/react-tag-cloud";
// import TextGradient from "../components/textGradient";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0,scale:0.9 },
  visible: {
    y: 0,
    scale:1,
    opacity: 1
  }
};
function About() {
  return (
    <div className="bg-white w-full  flex  py-24">
      {/* <h2>About me</h2> */}
      <div className="flex gap-5 max-w-6xl mx-auto  px-5 md:px-10 xl:px-0">
        <div className="hidden relative lg:flex flex-1 justify-start items-start select-none">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, viewport: 0.5 }}
            transition={{ ease: "anticipate", duration: 0.5}}
            className="top-10 h-full"
          >
            <TagCloud
              className="font-bold text-zinc-950 dark:text-white text-xl  sticky top-20 -translate-y-10"
              options={{
                radius:
                  Math.min(450, window.innerWidth, window.innerHeight) / 2,
                maxSpeed: "normal",
              }}
            >
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "React Native",
                "NextJS",
                "Tailwind",
                "Material UI",
                "Python",
                "Node",
                "Express",
                "MongoDB",
              ]}
            </TagCloud>
          </motion.div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-5">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, viewport: 0.8 }}
            transition={{ ease: "anticipate", duration:0.5, delay: 0.2 }}
            className={"text-4xl dark:text-white font-extrabold"}
          >
            About Me
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, viewport: 0.8 }}
            transition={{ ease: "anticipate", duration:0.5, delay: 0.2 }}
            className="text-lg md:text-xl font-semibold text-zinc-600 dark:text-zinc-400 pr-6"
          >
            I&apos;m an experienced front-end developer and digital artist
            passionate about technology and design
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, viewport: 0.8 }}
            transition={{ ease: "anticipate", duration:0.5, delay: 0.2 }}
            className="text-lg md:text-xl font-semibold text-zinc-600 dark:text-zinc-400"
          >
            Specialized in front-end development, I continuously learn to offer
            enhanced solutions for clients. Excited to contribute to your future
            projects. Thanks for getting to know me!
          </motion.p>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, viewport: 0.8 }}
              transition={{ ease: "anticipate", duration:0.5, delay: 0.2 }}
              className={"text-4xl dark:text-white font-extrabold my-5"}
            >
              Experience
            </motion.h2>
            <motion.ul className="flex flex-col gap-5"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, viewport: 0.8 }}
            >
              <motion.li
                variants={item}
                className="p-5 flex flex-col relative ring-1 ring-transparent hover:ring-rose-400/50 hover:bg-rose-300/20 transition-all duration-300 rounded-xl dark:hover:ring-zinc-600/50 dark:hover:bg-zinc-500/10"
              >
                <div className="flex flex-col md:flex-row gap-5">
                  <label className="text-zinc-500 text-md whitespace-nowrap font-[500] w-44">
                    2022 - Actually
                  </label>

                  <div className="">
                    <h2 className=" font-bold text-xl -translate-y-1 dark:text-white">
                      Frontend Developer
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Creo paginas web y aplicaciones para manejar el tiempo y
                      ser mas productivos
                    </p>
                    <ul className="flex gap-2 flex-wrap my-3">
                      <li className="bg-zinc-800 text-sm dark:bg-white dark:text-black text-white font-semibold w-fit px-4 py-1 rounded-full">
                        React
                      </li>
                      <li className="bg-zinc-800 text-sm dark:bg-white dark:text-black text-white font-semibold w-fit px-4 py-1 rounded-full">
                        React Native
                      </li>
                      <li className="bg-zinc-800 text-sm dark:bg-white dark:text-black text-white font-semibold w-fit px-4 py-1 rounded-full">
                        Node
                      </li>
                      <li className="bg-zinc-800 text-sm dark:bg-white dark:text-black text-white font-semibold w-fit px-4 py-1 rounded-full">
                        MongoDB
                      </li>
                      <li className="bg-zinc-800 text-sm dark:bg-white dark:text-black text-white font-semibold w-fit px-4 py-1 rounded-full">
                        Tailwind
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.li>
              <motion.li
                variants={item}
                className="p-5 flex flex-col relative ring-1 ring-transparent hover:ring-rose-400/50 hover:bg-rose-300/20 transition-all duration-300 rounded-xl dark:hover:ring-zinc-600/50 dark:hover:bg-zinc-500/10"
              >
                <div className="flex flex-col md:flex-row gap-5">
                  <label className="text-zinc-500 text-md whitespace-nowrap font-[500] w-44">
                    2022 - Actually
                  </label>

                  <div className="">
                    <h2 className=" font-bold text-xl -translate-y-1 dark:text-white">
                      Frontend Developer
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Creo paginas web y aplicaciones para manejar el tiempo y
                      ser mas productivos
                    </p>
                    <ul className="flex gap-2 flex-wrap my-3">
                      <li className="bg-zinc-800 text-sm dark:bg-white dark:text-black text-white font-semibold w-fit px-4 py-1 rounded-full">
                        React
                      </li>
                      <li className="bg-zinc-800 text-sm dark:bg-white dark:text-black text-white font-semibold w-fit px-4 py-1 rounded-full">
                        React Native
                      </li>
                      <li className="bg-zinc-800 text-sm dark:bg-white dark:text-black text-white font-semibold w-fit px-4 py-1 rounded-full">
                        Node
                      </li>
                      <li className="bg-zinc-800 text-sm dark:bg-white dark:text-black text-white font-semibold w-fit px-4 py-1 rounded-full">
                        MongoDB
                      </li>
                      <li className="bg-zinc-800 text-sm dark:bg-white dark:text-black text-white font-semibold w-fit px-4 py-1 rounded-full">
                        Tailwind
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.li>
              
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
