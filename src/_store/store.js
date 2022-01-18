import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

import reducer from '../_reducers/user_reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
