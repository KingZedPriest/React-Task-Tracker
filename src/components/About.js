import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h4 className="font-bold text-2xl">
        Click on the link below for my Github link
      </h4>
      <div className="mx-auto text-center">
      <a
        className="text-green-600 hover:text-black mr-2"
        href="https://github.com/KingZedPriest"
      >
        Github Account
      </a>
      <Link className="hover:text-green-600" to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default About;
