import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Universities from './components/Universities';
import University from './components/University';
import About from './components/About';


export default (
  <Route>

  <Route path="/" component={App}>
    <IndexRoute component={Universities} />
    <Route path='universities'component={Universities} />
    <Route path='universities/:id' component={University} />
    <Route path='about' component={About} />
  </Route>

    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
