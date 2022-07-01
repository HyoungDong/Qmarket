import { createReducer } from 'typesafe-actions';
import { AllAction, AuthTypes, InitialStateType } from './types';

const initialState: InitialStateType = {
  accessToken: '',
  isSignIn: false,
};

const authReducer = createReducer<InitialStateType, AllAction>(initialState, {
  [AuthTypes.SET_TOKEN]: (state, action) => ({
    ...state,
    accessToken: action.payload.accessToken,
    isSignIn: true,
  }),
  [AuthTypes.DEL_TOKEN]: state => ({
    ...state,
    accessToken: '',
  }),
  [AuthTypes.SIGN_OUT]: state => ({
    ...state,
    accessToken: '',
    isSignIn: false,
  }),
});

export default authReducer;
