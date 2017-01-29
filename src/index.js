import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { changeAuthState, updateExpenses }  from './actions';
import firebase, { getReference } from './firebase';
import toArray from './lib/object-to-array';
import ApplicationContainer from './containers/ApplicationContainer';


let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch(changeAuthState(user));
});

getReference().on('value', (snapshot) => {
  const expenses = snapshot.val();
  if (expenses) store.dispatch(updateExpenses(toArray(expenses)));
});

render(
  <Provider store={store}>
    <ApplicationContainer/>
  </Provider>,
  document.getElementById('application')
);
