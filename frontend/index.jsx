import React from 'react';
import ReactDOM from 'react-dom';

import brace from 'brace';
import Routes from './routes';
import Navbar from './Navbar';
import {FixNamedRoutesSupport} from 'react-router-named-routes';

require('expose?$i!inflection');

let routes = (<Routes/>);

FixNamedRoutesSupport(routes);



ReactDOM.render( routes, document.getElementById('root') );

ReactDOM.render( <Navbar />, document.getElementById('navbar') );
