import * as React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    return (
        <div className="header__menu">
            <Link className="header__menu-item" to="/apisearch">
                Api Search
            </Link>
            <Link className="header__menu-item" to="/image">
                Image Handler
            </Link>
        </div>
    );
};
export default Menu;
