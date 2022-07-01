import { ActionType } from 'typesafe-actions';
import { delToken, setToken, signOut } from './action';
import * as action from './action';

export type SetTokenAction = ActionType<typeof setToken>;
export type DelTokenAction = ActionType<typeof delToken>;
export type SignOutAction = ActionType<typeof signOut>;
export type AllAction = ActionType<typeof action>;

export const AuthTypes = {
  SET_TOKEN: 'TOKEN_SET' as const,
  DEL_TOKEN: 'TOKEN_DEL' as const,
  SIGN_OUT: 'SIGN_OUT' as const,
};

export type InitialStateType = {
  accessToken: string;
  isSignIn: boolean;
};
