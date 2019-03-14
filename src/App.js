import React, {Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import '@firebase/auth';
import Router from './Router';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyByHKU4aJNTkhAzRMRJ6FCKWEAwdjoWS8c',
      authDomain: 'areyoudrunkapp.firebaseapp.com',
      databaseURL: 'https://areyoudrunkapp.firebaseio.com',
      projectId: 'areyoudrunkapp',
      storageBucket: 'areyoudrunkapp.appspot.com',
      messagingSenderId: '445381648072'
    };
    firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
