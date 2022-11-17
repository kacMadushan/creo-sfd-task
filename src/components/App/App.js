import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Albums from '../../pages/Albums';
import Photos from '../../pages/Photos';
import NotFound from '../../pages/NotFound';
import * as ROUTES from '../../constants/routes';

const App = () => {
    return (
        <Router>
            <MaxWidthWrapper as="main">
                <Switch>
                    <Route exact path={ROUTES.ALBUMS} component={Albums} />
                    <Route path={ROUTES.PHOTOS} component={Photos} />
                    <Route path={ROUTES.NOTFOUND} component={NotFound} />
                </Switch>
            </MaxWidthWrapper>
        </Router>
    )
};

export default App;