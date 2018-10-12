import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Jsx from './jsx/Jsx';
import PropTypesIndex from './PropTypes/PropTypesIndex';
import Refs from './refs/Refs';
import UncontrolledComponent from './UncontrolledComponent/UncontrolledComponent';
import Optimization from './Optimization/Optimization';
import Reconciliation from './Reconciliation/Reconciliation';
import Context from './Context/Context';
import Fragments from './Fragments/Fragments';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Fragments />, document.getElementById('root'));
registerServiceWorker();
