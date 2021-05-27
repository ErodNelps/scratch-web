import { call, takeLatest, put } from 'redux-saga/effects';
import { sagaActions } from '../saga/actions';
import {
  fetchUserFulfilled,
  loginFulfilled,
  loginRejected,
  saveEditProfileFulfilled
} from '../user/user';
import catImage from '../../assets/images/cat@2x.png';
// import userCardImg from '../../assets/images/usercard-1@3x.png';
import avatarImg from '../../assets/images/avatar@2x.png';
// import feedImg2 from '../../assets/images/feed-2@2x.png';
import feedImg3 from '../../assets/images/feed-3@2x.png';
import { User } from '../../App';
// let callAPI = async ({ url, method, data }) => {
//   return await Axios({
//     url,
//     method,
//     data
//   });
// };

const userInfo = {
  id: 'UID_1',
  userName: 'abc',
  password: '123',
  username: 'Nick Evans',
  bio: 'Potato Master',
  recipeCount: 20,
  savedCount: 75,
  followingCount: 248,
  followerCount: 584,
  likeCount: '23k',
  phone: '0123456789',
  email: 'minhthuong@gmail.com',
  avatar: avatarImg
};

type LoginData = {
  userName: string;
  password: string;
};

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export type UserType = typeof userInfo;

export function* fetchUserSaga() {
  try {
    let data: UserType = yield call(() => userInfo);
    yield put(fetchUserFulfilled(data));
  } catch (e) {
    yield put({ type: 'FETCH_USER_REJECTED' });
  }
}
export function* saveEditSaga(data: User) {
  try {
    yield put(saveEditProfileFulfilled(data));
  } catch (e) {
    yield put({ type: 'EDIT_PROFILE_REJECTED' });
  }
}

export function* loginSaga(data: LoginData) {
  try {
    yield call(delay, 2000);
    yield put(loginFulfilled(data));
  } catch (e) {
    setTimeout(() => {}, 2000);
    yield put(loginRejected(data));
  }
}
