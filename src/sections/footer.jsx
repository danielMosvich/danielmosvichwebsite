function Footer() {
  return (
    <div className="">
      <div className="sm:mt-0 mt-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center py-14 px-5 md:px-10 xl:px-0">
        <div className="flex flex-col items-center md:items-start">
          {/* <h4>Daniel Mosvich</h4> */}
            <p className="text-2xl font-bold text-black dark:text-white flex text-center md:text-start">
              Daniel Mosvich
              {/* <h5 className="font-bold text-black text-3xl hover:animate-letter-bounce">M</h5> */}
            </p>
            <p className="text-lg font-semibold text-zinc-600 dark:text-zinc-400 text-center md:text-start">
            build with react and tailwind
            {/* <span>
              <svg
                className="hover:text-rose-500 transition-colors duration-500 inline-block"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                />
              </svg>
            </span> */}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg border-b-2 border-zinc-600 dark:border-zinc-400 mb-2 pb-1 font-semibold text-zinc-800 dark:text-white text-center md:text-end ">
            Mira mis redes
          </p>
          <ul className="flex gap-5">
            <li className="hover:scale-110 cursor-pointer hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black rounded-xl p-1 transition-all duration-500">
              <svg
                width="2rem"
                height="2rem"
                // className="w-6 h-6 md:w-7 md:h-7"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5h47.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
                />
              </svg>
            </li>
            <li className="hover:scale-110 cursor-pointer hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black  rounded-xl p-1 transition-all duration-500">
              <svg
               width="2rem"
               height="2rem"
                // className="w-6 h-6 md:w-7 md:h-7"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                />
              </svg>
            </li>
            <li className="hover:scale-110 cursor-pointer hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black  rounded-xl p-1 transition-all duration-500">
              <svg
               width="2rem"
               height="2rem"
                // className="w-6 h-6 md:w-7 md:h-7"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                />
              </svg>
            </li>
            <li className="hover:scale-110 cursor-pointer hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black  rounded-xl p-1 transition-all duration-500">
              <svg
               width="2rem"
               height="2rem"
                // className="w-6 h-6 md:w-7 md:h-7"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
