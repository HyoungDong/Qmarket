import { createAction } from 'typesafe-actions';
import { SignInTypes } from './types';

export const requestSignIn = createAction(SignInTypes.RUQUEST_SIGNIN)<{
  id: string;
  pw: string;
  authType: string;
}>();

export const successSignIn = createAction(SignInTypes.SUCCESS_SIGNIN)();
export const failSignIn = createAction(SignInTypes.FAIL_SIGNIN)<{
  error: unknown;
}>();
