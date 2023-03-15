import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({title}) => {
    const onClick = () => {
        console.log("Clicked")
    }
  return (
    <header className="header">
       <h1> {title} </h1>
       <Button color="green" text="Add" onClick={onClick}/>
    </header>
  )
}


Header.defaultProps = {
    title: 'Task Tracker'
}

//Checks if the title is a String, helps to catch/prevent an error.
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle = {
//     color: "red",
//     backgroundColor: "black"
// }

export default Header
