import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav>
                <div className="navbar-container">
                    <div className="navbar-left">
                        <span className="logo"></span>
                    </div>
                    <div className="navbar-right">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/contact"}>Contact Us</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}