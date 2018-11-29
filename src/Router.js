import React, {Component} from 'react';
import { Scene, Router, Actions} from 'react-native-router-flux';
import StartMenu from './components/StartMenu';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="start" component={StartMenu} title="Start" initial hideNavBar/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
