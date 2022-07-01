import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import authReducer from './Auth/reducer';
import signInReducer from './SignIn/reducer';
import storage from 'redux-persist/lib/storage';

const persisConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

const rootReducer = combineReducers({
  authReducer,
  signInReducer,
});

export default persistReducer(persisConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
