import TextGradient from "../components/textGradient";
import ButtonGradient from "../components/buttonGradient";
import { motion } from "framer-motion";
function Main({ focus, setFocus }) {
  // function handleFocus(state) {
  //   setFocus(state);
  // }
  return (
    <div className="bg-white flex justify-center min-h-screen">
      <div className="flex max-w-6xl px-5 md:px-10 xl:px-0">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "anticipate", duration: 1 }}
          >
            <TextGradient
              focus={focus}
              className={"lg:text-8xl text-7xl text-center lg:text-start -translate-x-2 font-extrabold mb-5"}
            >
              Daniel Mosvich
            </TextGradient>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "anticipate", duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl max-w-md lg:text-start text-center text-zinc-600 dark:text-zinc-400 font-semibold mb-10 pr-5"
          >
            <span className="text-zinc-950 dark:text-white font-bold">
              Front end developer & digital artist
            </span>
            , with many years of experience. My passion for technology and
            design has led me to specialize in front-end development.
          </motion.p>

          {/* <ButtonGradient gradient>Contact me</ButtonGradient> */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "anticipate", duration: 1, delay: 0.4 }}
          >
            <ButtonGradient
              gradient
              focus={focus}
              onFocus={() => setFocus(true)}
              offFocus={() => setFocus(false)}
              className={"px-8 py-4 text-xl lg:px-10 lg:py-5 lg:text-2xl"}
            >
              <label>Contact me</label>
              {/* <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="-rotate-45"
              >
                <path
                  fill="currentColor"
                  d="m20.34 9.32l-14-7a3 3 0 0 0-4.08 3.9l2.4 5.37a1.06 1.06 0 0 1 0 .82l-2.4 5.37A3 3 0 0 0 5 22a3.14 3.14 0 0 0 1.35-.32l14-7a3 3 0 0 0 0-5.36Zm-.89 3.57l-14 7a1 1 0 0 1-1.35-1.3l2.39-5.37a2 2 0 0 0 .08-.22h6.89a1 1 0 0 0 0-2H6.57a2 2 0 0 0-.08-.22L4.1 5.41a1 1 0 0 1 1.35-1.3l14 7a1 1 0 0 1 0 1.78Z"
                ></path>
              </svg> */}
            </ButtonGradient>
          </motion.div>
        </div>
        <div className="flex-[1.3] items-center hidden lg:flex">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "anticipate", duration: 1}}
            // transition={{ delay:0.2}}
          >
            <img className="mx-auto" src="/images/8.png" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Main;
