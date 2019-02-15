/** @format */

import {AppRegistry} from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import App from './src/App';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);
