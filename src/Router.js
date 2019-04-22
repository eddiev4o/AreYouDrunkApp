import React, {Component} from 'react';
import { Scene, Router, Actions} from 'react-native-router-flux';
import StartMenu from './components/StartMenu';
import UserProfile from './components/UserProfile';
import Game1Intro from './components/Game1Intro';
import Game1 from './components/Game1';
import Game2 from './components/Game2';
import Game3 from './components/Game3';
import Results from './components/Results';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="start" component={StartMenu} title="Start" initial hideNavBar/>
        <Scene key="auth" component = {LoginForm} title="Please Login" />
        <Scene key="form" component={UserProfile} title="Enter Info" />
        <Scene key="game1intro" component={Game1Intro} title="Game 1 Intro" hideNavBar/>
        <Scene key="game1" component={Game1} title="Game 1" hideNavBar/>
        <Scene key="game2" component={Game2} title="Game 2" hideNavBar/>
        <Scene key="game3" component={Game3} title="Game 3" hideNavBar/>
        <Scene key="results" component={Results} title="Results" hideNavBar/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
