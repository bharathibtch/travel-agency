import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducer';

const middleware = [thunk];

export const store = createStore(
    RootReducer,
    {},
    compose(applyMiddleware(...middleware))
);

export default store;

