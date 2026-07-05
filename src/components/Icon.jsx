import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faXTwitter,
  faFacebook,
  faTiktok,
  faDiscord,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faJava,
  faPython,
  faFlutter,
  faDartLang,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faChevronDown,
  faGraduationCap,
  faBriefcase,
  faArrowRight,
  faArrowRightLong,
  faImages,
  faVideo,
  faCircleCheck,
  faCircleExclamation,
  faPaperPlane,
  faHeart,
  faMoon,
  faSun,
  faFileArrowDown,
  faSchool,
  faUniversity,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

const ICONS = {
  "fa-linkedin": faLinkedin,
  "fa-github": faGithub,
  "fa-instagram": faInstagram,
  "fa-x-twitter": faXTwitter,
  "fa-facebook": faFacebook,
  "fa-tiktok": faTiktok,
  "fa-discord": faDiscord,
  "fa-html5": faHtml5,
  "fa-css3-alt": faCss3Alt,
  "fa-js": faJs,
  "fa-react": faReact,
  "fa-node-js": faNodeJs,
  "fa-java": faJava,
  "fa-python": faPython,
  "fa-flutter": faFlutter,
  "fa-dart-lang": faDartLang,
  "fa-envelope": faEnvelope,
  "fa-chevron-down": faChevronDown,
  "fa-graduation-cap": faGraduationCap,
  "fa-briefcase": faBriefcase,
  "fa-arrow-right": faArrowRight,
  "fa-arrow-right-long": faArrowRightLong,
  "fa-images": faImages,
  "fa-video": faVideo,
  "fa-circle-check": faCircleCheck,
  "fa-circle-exclamation": faCircleExclamation,
  "fa-paper-plane": faPaperPlane,
  "fa-heart": faHeart,
  "fa-moon": faMoon,
  "fa-sun": faSun,
  "fa-file-arrow-down": faFileArrowDown,
  "fa-school": faSchool,
  "fa-university": faUniversity,
  "fa-print": faPrint,
};

const PREFIX_TOKENS = ["fa-brands", "fab", "fa-solid", "fas"];

export default function Icon({ icon = "", className = "" }) {
  const tokens = icon.split(/\s+/).filter(Boolean);
  const iconToken = tokens.find((t) => ICONS[t]);
  const def = ICONS[iconToken];

  if (!def) return null;

  const extraClasses = tokens
    .filter((t) => !PREFIX_TOKENS.includes(t) && t !== iconToken)
    .join(" ");

  return (
    <FontAwesomeIcon
      icon={def}
      className={[extraClasses, className].filter(Boolean).join(" ")}
    />
  );
}
