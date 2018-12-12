import { Actions } from 'react-native-router-flux';
import {
  PROFILE_CREATE,
  PROFILE_UPDATE
} from './types';

export const profileUpdate = ({ prop, value}) => {
  return {
    type: PROFILE_UPDATE,
    payload: { prop, value }
  }
};
