import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import postsReducer from './Reducers/postsReducer';
import detailsReducer from './Reducers/detailsReducer';

const rootReducer = combineReducers({
    posts:postsReducer,
    Ipost: detailsReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store;