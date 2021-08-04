import Styles from "@/styles/Skills.module.css";
import { IconContext } from "react-icons";
import { FiMonitor, FiUserCheck } from "react-icons/fi";
import { AiFillBug } from "react-icons/ai";
import { FaCss3, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiNextDotJs, SiCsharp, SiMysql } from "react-icons/si";
export default function Skills() {
  return (
    <>
      <div className={Styles.skills_section}>
        <div className={Styles.skill}>
          <IconContext.Provider value={{ size: "5em" }}>
            <FiMonitor />
          </IconContext.Provider>
          <p>
            Responsive design and development using a mobile-first approach.
          </p>
        </div>
        <div className={Styles.skill}>
          <IconContext.Provider value={{ size: "5em" }}>
            <AiFillBug />
          </IconContext.Provider>
          <p>
            Ability to identify problems and provide solutions to problems and
            challenges that arise.
          </p>
        </div>
        <div className={Styles.skill}>
          <IconContext.Provider value={{ size: "5em" }}>
            <FiUserCheck />
          </IconContext.Provider>
          <p>
            Able to be counted upon, reliable, and have a strong appreciation of
            doing tasks on time.{" "}
          </p>
        </div>
      </div>
      <div className={Styles.logos}>
        <div className={Styles.logo}>
          <IconContext.Provider value={{ size: "1.8em", color: "#4fc3f7" }}>
            <FaCss3 />
          </IconContext.Provider>
        </div>
        <div className={Styles.logo}>
          <IconContext.Provider value={{ size: "1.8em", color: "gold" }}>
            <DiJavascript1 />
          </IconContext.Provider>
        </div>
        <div className={Styles.logo}>
          <IconContext.Provider value={{ size: "1.8em", color: "#4fc3f7" }}>
            <FaReact />
          </IconContext.Provider>
        </div>
        <div className={Styles.logo}>
          <IconContext.Provider value={{ size: "1.8em", color: "ddd" }}>
            <SiNextDotJs />
          </IconContext.Provider>
        </div>
        <div className={Styles.logo}>
          <IconContext.Provider value={{ size: "1.8em", color: "#7c62aa" }}>
            <SiCsharp />
          </IconContext.Provider>
        </div>
        <div className={Styles.logo}>
          <IconContext.Provider value={{ size: "1.8em", color: "orange" }}>
            <SiMysql />
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
}
