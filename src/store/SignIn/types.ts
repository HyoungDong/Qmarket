import { ActionType } from 'typesafe-actions';
import { failSignIn, requestSignIn, successSignIn } from './action';
import * as action from './action';

export type SignInAction = ActionType<typeof requestSignIn>;
export type FailAction = ActionType<typeof failSignIn>;
export type SuccessAction = ActionType<typeof successSignIn>;
export type AllAction = ActionType<typeof action>;

export const SignInTypes = {
  RUQUEST_SIGNIN: 'SIGNIN_REQUEST' as const,
  SUCCESS_SIGNIN: 'SIGNIN_SUCCESS' as const,
  FAIL_SIGNIN: 'SIGNIN_FAIL' as const,
};

export type InitialStateType = {
  id: string;
  pw: string;
  loading: boolean;
  error?: string;
};
