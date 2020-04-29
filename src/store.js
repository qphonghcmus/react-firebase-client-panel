import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
// Reducers
// @todo

const firebaseConfig = {
  apiKey: "AIzaSyB_vJez6hyTM60ShZ8ijgrmZDpfZU-fs5M",
  authDomain: "react-client-panel-9becf.firebaseapp.com",
  databaseURL: "https://react-client-panel-9becf.firebaseio.com",
  projectId: "react-client-panel-9becf",
  storageBucket: "react-client-panel-9becf.appspot.com",
  messagingSenderId: "795432505828",
  appId: "1:795432505828:web:327d71ecbfd25b283d37f1",
  measurementId: "G-DPX1MK58W3",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);

firebase.firestore(); // <- needed if using firestore

// add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});

// Init firestore

// create initial state
const initialState = {};

// create store
const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export { rrfProps, store };
