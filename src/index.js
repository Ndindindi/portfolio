import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import configureStore from './store/index';


const store = configureStore();

const rootEl = document.getElementById('app-site');

// Create a reusable render method that we can call more than once
let render = () => {
    // Dynamically import our main App component, and render it
    const App = require('./containers/App').default;

    ReactDOM.render(
        <Provider store={store}>
            <HashRouter basename="/">
                <Switch>
                    <Route path="/" component={App}/>
                </Switch>
            </HashRouter>
        </Provider>,
        rootEl
    );
};

if (module.hot) {
    // Support hot reloading of components.
    // Whenever the App component file or one of its dependencies
    // is changed, re-import the updated component and re-render it
    module.hot.accept('./containers/App', () => {
        setTimeout(render);
    });
}
render();
