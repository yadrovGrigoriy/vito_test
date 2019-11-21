import * as React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    return (
        <div className="header__menu">
            <Link className="header__menu-item" to="/apisearch">
                Api search
            </Link>
            <Link className="header__menu-item" to="/image">
                Image handler
            </Link>
        </div>
    );
};
export default Menu;
