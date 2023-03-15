import PropTypes from "prop-types"
const Button = ({text, color, onClick}) => {
  return <button style={{backgroundColor: color}} className="btn duration-700 hover:text-black" onClick={onClick}>Add</button>
}

Button.defaultProps ={
  color: "steelblue",
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}
export default Button
