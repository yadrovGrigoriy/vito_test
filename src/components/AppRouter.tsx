import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from './404';
import ApiHendler from './Main/ApiHandler';
import ImageHandler from './Main/ImageHandler';
import Home from './Main/Home';

const AppRouter: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/image" component={ImageHandler}></Route>
            <Route exact path="/apisearch" component={ApiHendler} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default AppRouter;
