import {createStore} from 'redux';
import reducers from '../reducers/index';

export default function configureStore(initialState) {
    const store = createStore(reducers, {});

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer)
        });
    }
    return store;
}
