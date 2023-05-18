import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Routes from './router';


const App = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white'>
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
