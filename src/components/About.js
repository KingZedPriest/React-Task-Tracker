import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h4 className="font-bold text-2xl">
        Click on the link below for my Github link
      </h4>
      <a
        className="text-green-600 hover:text-black mr-2"
        href="https://github.com/KingZedPriest"
      >
        Github Account
      </a>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default About;
