import {Link} from "react-router-dom";

import "./menu.scss";

export const Menu = () => {
    return (
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to={{
                pathname: '/',
                hash: '#about',
            }}>About</Link>
            <Link to="/portofolio">Portofolio</Link>
            <Link to="/stories">Stories</Link>
            <Link to={
                {
                    pathname: '/',
                    hash: '#contact',
                }
            }>Contact</Link>
        </div>
    );
};

export default Menu;
