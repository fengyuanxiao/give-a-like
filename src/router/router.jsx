import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';

import Login from '../pages/login/login';
import Register from '../pages/login/register/register';
import './router.css';

const RouteModule = function (props) {
    return (
        <TransitionGroup
            style={{position: 'releative'}}
            childFactory={child => React.cloneElement(
                  child,
                  {classNames: props.history.action === 'PUSH'?'app4-push':'app4-pop'}
            )}
        >
            <CSSTransition
                key={props.location.pathname}
                timeout={500}
                classNames={props.history.action === 'PUSH'?'app4-push':'app4-pop'}
            >
                <Switch location={props.location}>
                    <Route exact path={'/'} component={Login} name={'首页'} />
                    <Route path={'/register'} component={Register} name={'第二页'} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};

class RouterComponents extends React.Component {
    render() {
        const Routes = withRouter(RouteModule);
        return (
            <Router>
                <Routes />
            </Router>
        );
    }
}

export default RouterComponents;