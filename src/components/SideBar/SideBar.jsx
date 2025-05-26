import { Link, NavLink } from "react-router-dom";
import LogoN from "../../assets/images/logo-n.png";
import LogoSubtitle from "../../assets/images/logo.png";
import { SiHackerrank } from "react-icons/si";
import{ SiGeeksforgeeks } from "react-icons/si"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faCog,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faDiscord,

} from "@fortawesome/free-brands-svg-icons";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="nav_bar">
      <Link className="logo" to="/">
        <img src={LogoN} alt="logo" />
        <img src={LogoSubtitle} alt="Raja" className="sub_logo" />
      </Link>

      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active about_link" : "about_link")}
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active skills_link" : "skills_link")}
        >
          <FontAwesomeIcon icon={faCog} />
        </NavLink>

        <NavLink
          to="/work"
          className={({ isActive }) => (isActive ? "active work_link" : "work_link")}
        >
          <FontAwesomeIcon icon={faBriefcase} />
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active contact_link" : "contact_link")}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/rajaratnala/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>

        <li>
          <a href="https://github.com/RatnalaRaja" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>

        
        <li>
          <a href="https://www.hackerrank.com/profile/ratnalaraja" target="_blank" rel="noreferrer">
            <SiHackerrank  className="social-icon"  />
          </a>
        </li>

       <li>
          <a href="https://www.geeksforgeeks.org/user/ratnalaraja/" target="_blank" rel="noreferrer">
            <SiGeeksforgeeks className="social-icon gfg-icon" />
          </a>
       </li>


        <li>
          <a
            href="https://discordapp.com/users/1366721902290272276"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
