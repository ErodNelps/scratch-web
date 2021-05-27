import { takeLatest } from 'redux-saga/effects';
import { fetchUser, login, saveEditProfile } from '../user/user';
import { fetchUserSaga, loginSaga, saveEditSaga } from './userSaga';

export function* watcherSaga() {
  yield takeLatest(login, loginSaga);
  yield takeLatest(fetchUser, fetchUserSaga);
  yield takeLatest(saveEditProfile, saveEditSaga);
}
