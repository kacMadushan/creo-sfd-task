import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import GlobalStyles from './components/GlobalStyles';

render(
    <React.StrictMode>
        <App />
        <GlobalStyles />
    </React.StrictMode>,
    document.getElementById('root')
)