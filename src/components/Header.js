import PropTypes from "prop-types";
import Button from "./Button.js";
import { useLocation } from "react-router";

const Header = ({ title, show, showStatus }) => {
  const location = useLocation()
  return (
    <header className="header">
      <h1> {title} </h1>
      {location.pathname === "/" &&
        <Button
        color={showStatus ? "red" : "green"}
        text={showStatus ? "Close" : "Add"}
        onClick={show}
      />}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//Checks if the title is a String, helps to catch/prevent an error.
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//     color: "red",
//     backgroundColor: "black"
// }

export default Header;
