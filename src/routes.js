import React from 'react';

import{Route, IndexRoute} from 'react-router';

import App from './conponents/App';
import Home from './conponents/Home';
import SignupPage from './conponents/signup/SignupPage';
import RegisterPage from './conponents/register/RegisterPage';
import About from './conponents/About';

//dev branch
export default(
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/signup" component={SignupPage}></Route>
    <Route path='/register' component={RegisterPage}></Route>
    <Route path="/about" component={About}></Route>

    </Route>
)