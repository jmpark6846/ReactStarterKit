import React from 'react';
import { Router, Route, Link  } from 'react-router';
import Main from './components/main'


module.exports = (
    <Router>
        <Route path="/" component={ Main } />
    </Router>
);
