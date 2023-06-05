import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2023 <span className="font-bold">Priest</span></p>
            <Link className="text-green-600 hover:text-black" to="/about"> About </Link>
        </footer>
    )
}

export default Footer;