import "../Header/Header.css"
import NavLinks from "./NavLinks/NavLinks";
import MyMovies from "./MyMovies/MyMovies";

const Header = () => {

    return (
        <div className="header">
            <h1>MovieDB</h1>
            <div className="searchCluster">
                <input type="text" />
                <button>Sök</button>
            </div>
            <div className="header-right">

                {NavLinks()}
                {MyMovies()}

 
            </div>
        </div>
    )
}
export default Header;