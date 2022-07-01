import { createReducer } from 'typesafe-actions';
import { AllAction, InitialStateType, SignInTypes } from './types';

const initialState: InitialStateType = {
  id: '',
  pw: '',
  loading: false,
  error: undefined,
};

const signInReducer = createReducer<InitialStateType, AllAction>(initialState, {
  [SignInTypes.RUQUEST_SIGNIN]: state => ({
    ...state,
    loading: true,
  }),
  [SignInTypes.SUCCESS_SIGNIN]: state => ({
    ...state,
    loading: false,
  }),
  [SignInTypes.FAIL_SIGNIN]: state => ({
    ...state,
    loading: false,
  }),
});

export default signInReducer;
