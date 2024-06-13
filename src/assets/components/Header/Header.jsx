import "../Header/header.css"
import NavLinks from "./NavLinks/NavLinks";
import MyMovies from "./MyMovies/MyMovies";

const Header = () => {

    return (
        <div className="header">
            <h1>MovieDB</h1>
            <div className="header-right">

                {NavLinks()}
                {MyMovies()}

 
            </div>
        </div>
    )
}
export default Header;