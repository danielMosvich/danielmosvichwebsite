import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./sections/contact";
import Main from "./sections/main";
import Projects from "./sections/projects";
import About from "./sections/about";
import Footer from "./sections/footer";
import Header from "./sections/header";

function App() {
  const [focus, setFocus] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "#1B1B1B";
      document.documentElement.style.setProperty(
        "--linear-gradient-black",
        "linear-gradient(148deg, #e4e6e7, #fffbfb)"
      );
      // document.documentElement.style.setProperty('--linear-gradient-black',"linear-gradient(148deg, #c1c8cc, #fffbfb)")
    }
    if (localStorage.getItem("theme") === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#fff";
      document.documentElement.style.setProperty(
        "--linear-gradient-black",
        "linear-gradient(148deg, #555454, #000000)"
      );
    }
  }, [theme]);
  return (
    <div className="">
      {/* <Header theme={theme} setTheme={setTheme}/> */}
      <Main focus={focus} setFocus={setFocus} />
      <About />
      <Projects />
      <Contact focus={focus} setFocus={setFocus} />
      <Footer />
    </div>
  );
}

export default App;
