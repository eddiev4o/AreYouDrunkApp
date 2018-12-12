import {
  PROFILE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  sex: '',
  weight: '',
  drinks: '',
  time: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
