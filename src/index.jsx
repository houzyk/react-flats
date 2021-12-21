import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from "./components/App";

// Styles
import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');
if (root) ReactDOM.render(<App />, root);
