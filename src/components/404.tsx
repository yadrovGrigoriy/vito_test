import * as React from 'react';
import { Link } from 'react-router-dom';

interface IAppProps {}

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <div className="not-found__err-number">404</div>
            <p className="not-found__err-text">Sorry page not found</p>
            <div className="not-found__go-back">
                <Link to="/">Go Home?</Link>
            </div>
        </div>
    );
};

export default NotFound;
