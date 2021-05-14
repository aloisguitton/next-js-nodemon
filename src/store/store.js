import {applyMiddleware, combineReducers, createStore} from 'redux';
import authReducer from './reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { default as ReduxThunk } from 'redux-thunk'
const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
}

const allReducers = combineReducers({
    authReducer: authReducer
})

const persistedReducer = persistReducer(persistConfig, allReducers) // create a persisted reducer

const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    composeWithDevTools(applyMiddleware(ReduxThunk))// add any middlewares here
)

const  persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export {store, persistor}