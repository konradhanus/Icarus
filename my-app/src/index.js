/* global JSONstate */
import React from 'react';
import ReactDOM from 'react-dom';
import Icarus from './Icarus';

ReactDOM.render(
    <Icarus storage={JSONstate}/>, document.getElementById('root'));
