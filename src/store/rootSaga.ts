import { all, call } from 'redux-saga/effects';
import { watchRequestSignIn } from './SignIn/saga';

export default function* rootSaga() {
  yield all([call(watchRequestSignIn)]);
}
