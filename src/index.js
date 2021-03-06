import React from 'react';
import Routes from './Routes';
import ReactDOM from 'react-dom';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, { attachAuthIsReady: true, useFirestoreForProfile: true, userProfile: 'users' })
    )
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={ store }>
            <Routes />
        </Provider>,
        document.getElementById('root')
    );
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
