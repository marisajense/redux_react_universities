import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <Link to='/universities'>Universities</Link>
    <br />
    <Link to='/about'>About</Link>
    { children }
  </div>
)

export default App;
