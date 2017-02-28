import { AppContainer } from 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root');
const render = (Component: any) => {
    ReactDOM.render(<AppContainer><Component /></AppContainer>, rootEl)
};

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {

        // I do not know why!
        // if without this line, the hot reload not work!!!
        // no document for this issue.
        const NextApp = require("./App").default; 

        // You can use 'App' or 'NextApp'
        render(NextApp);
    });
}