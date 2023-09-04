import { styled } from "styled-components";
import TextGradient from "../components/textGradient";
import { motion } from "framer-motion";
const GridLayout = styled(motion.div)`
  display: grid;
  gap: 25px;
  grid-template-columns: 1.4fr 1fr;
  grid-auto-rows: 1fr;

  /* background-color: red; */
  margin: 0 auto;
  grid-template-areas:
    "n1 n2"
    "n1 n3";

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "n1"
      "n2"
      "n3";
    grid-auto-rows: auto;
  }
`;
const GridArea1 = styled(motion.div)`
/* max-height: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: n1;
  min-height: 320px;
  border-radius: 25px;
  padding: 30px;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
  /* background-image:url("./images/dailyplanner.png");
  background-position: center; */
`;
const GridArea2 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-area: n2;
  min-height: 320px;
  border-radius: 25px;
  padding: 30px;
`;
const GridArea3 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-area: n3;
  border-radius: 25px;
  padding: 30px;
`;
const Container1 = styled.div`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgb(0, 0, 0); */
    background: rgba(0, 0, 0, 0.1);
    background: linear-gradient(
      0deg,
      rgb(250 250 249) 0%,
      rgba(213, 244, 250, 0) 50%,
      rgba(0, 212, 255, 0) 100%
    );
    z-index: 5;
  }
`;
const Container2 = styled.div`
  /* background-color: red; */
  /* padding:50px; */
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 600px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgb(250 250 249) 30%,
      rgba(213, 244, 250, 0) 90%,
      rgba(0, 212, 255, 0) 100%
    );
    z-index: 5;
  }
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform-style: preserve-3d;
    transform: rotateY(10deg) translate(10px);
    border-radius: 5px;
  }
`;
function Projects() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: "anticipate",
        duration: 1,
        delayChildren: 0.6,
        staggerChildren: 0.3,
        // delayChildren: 0.3,
        // staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-w-full min-h-screen py-32 bg-neutral-50 ring-2 ring-zinc-100 dark:bg-black/20 dark:ring-black/40">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-10 xl:px-0">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, viewport: 0.8 }}
            transition={{ ease: "anticipate", duration: 0.5 }}
          >
            <TextGradient
              className={"text-4xl md:text-5xl font-extrabold text-center"}
              err={true}
            >
              Some Things I’ve Built
            </TextGradient>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, viewport: 0.8 }}
            transition={{ ease: "anticipate", duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold text-center text-zinc-600 dark:text-zinc-400 mb-10"
          >
            Recent Projects
          </motion.h2>
        </div>
        <GridLayout
          className=""
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, viewport: 0.8 }}
        >
          <GridArea1
            variants={item}
            className="cursor-pointer ring-1 ring-zinc-300 bg-white dark:bg-neutral-800/80  dark:ring-neutral-700/80 overflow-hidden"
          >
            <Container1 className="w-full absolute h-[60%] bottom-0 left-0">
              <img
                className="w-full h-full object-cover object-top relative rounded-3xl ring-1 ring-zinc-300 lg:opacity-100 opacity-40"
                src="./images/dailyplanner.png"
                alt="image from daily planner.online"
              />
            </Container1>
            <div className="z-10 flex flex-col items-center">
              <TextGradient
                focus={true}
                className={"text-5xl  lg:text-7xl font-bold text-center"}
                err={true}
                color={"green"}
              >
                Daily Planner
              </TextGradient>
              <p className="text-lg text-center md:text-xl lg:text-2xl max-w-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-5">
                Organiza tu tiempo a otro nivel!
              </p>
              <div className="flex gap-2">
                <button className="whitespace-nowrap bg-emerald-500/90 hover:bg-emerald-700 text-white text-sm md:text-lg px-3 py-2  lg:px-7 lg:py-3 rounded-full font-semibold transition-colors duration-500 flex gap-3 items-center">
                  <label>Comienza ya!</label>
                </button>
                <button className="whitespace-nowrap bg-zinc-800 hover:bg-black transition-colors duration-500 text-white text-sm md:text-lg px-3 py-2  lg:px-7 lg:py-3 rounded-full  font-semibold flex items-center md:gap-3 gap-1">
                  <label>GitHub</label>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ffffff"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </GridArea1>
          <GridArea2
            variants={item}
            className="cursor-pointer ring-1 ring-zinc-300 bg-white dark:bg-neutral-800/80  dark:ring-neutral-700/80 relative overflow-hidden"
          >
            <Container2 className="absolute top-0 left-0 h-full w-full lg:opacity-100 opacity-50">
              <img
                src="./images/genshinpage.png"
                alt="image from genshinpage"
              />
            </Container2>
            <div className="z-10">
              <TextGradient
                focus={true}
                className={"text-3xl font-bold drop-shadow-sm"}
                color={"sky"}
              >
                Genshin Characters (Beta)
              </TextGradient>
              {/* <h3 className=" ">Genshin Characters Beta</h3> */}
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-zinc-600 dark:text-zinc-400">
                Watch the all information about Genshin Impact characters
              </p>
            </div>
          </GridArea2>
          <GridArea3
            variants={item}
            className="cursor-pointer ring-1 overflow-hidden ring-zinc-300 bg-white dark:bg-neutral-800/80  dark:ring-neutral-700/80 relative"
          >
            <div className="absolute flex w-full h-2/3 left-0  top-0">
              <img src="./images/23.png" className="object-contain" />
              <img src="./images/24.png" className=" object-contain" />
            </div>
            <TextGradient
              focus={true}
              className=" text-3xl font-bold mt-52"
              color={"blue"}
            >
              Tic Tac Toe Game
            </TextGradient>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-zinc-600 dark:text-zinc-400">
              An application of the well-known match 3 game which is made to
              play in turns.
            </p>
          </GridArea3>
        </GridLayout>
        <div className="w-full flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, viewport: 0.8 }}
            transition={{ ease: "anticipate", duration: 0.5 }}
            className="py-4 px-5 md:py-5 md:px-10 text-lg md:text-2xl bg-teal-600 shadow-xl hover:bg-teal-700 transition-colors shadow-teal-500/10 rounded-3xl text-white font-bold"
          >
            Show All Projects
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
