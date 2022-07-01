import { call, put, takeEvery } from '@redux-saga/core/effects';
import { axios } from '../../api';
import { setToken } from '../Auth/action';
import { failSignIn, successSignIn } from './action';
import { SignInAction, SignInTypes } from './types';

type reqeustProps = {
  id?: string;
  pw?: string;
  authType: string;
};

const reqeustSignIn = async ({ id, pw, authType }: reqeustProps) => {
  const res = await axios({
    method: 'post',
    url: `api/auth`,
    data: {
      id,
      pw,
      authType,
    },
  });
  console.log(res);
  return res;
};

function* handleRequestSingIn(action: SignInAction) {
  try {
    const { data: data } = yield call(reqeustSignIn, action.payload);
    yield put(successSignIn());
    yield put(setToken({ accessToken: data.accessToken }));
    console.log(data.accessToken);
  } catch (error) {
    yield put(failSignIn({ error }));
  }
}

export function* watchRequestSignIn() {
  yield takeEvery(SignInTypes.RUQUEST_SIGNIN, handleRequestSingIn);
}
