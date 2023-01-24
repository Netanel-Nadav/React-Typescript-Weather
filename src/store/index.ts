import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// import { yourReducers } from './reducers/';

const rootReducer = combineReducers({
    // yourReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
