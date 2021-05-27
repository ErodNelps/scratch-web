import { createSlice } from '@reduxjs/toolkit';
import catImage from '../../assets/images/cat@2x.png';
// import userCardImg from '../../assets/images/usercard-1@3x.png';
import avatarImg from '../../assets/images/avatar@2x.png';
// import feedImg2 from '../../assets/images/feed-2@2x.png';
import feedImg3 from '../../assets/images/feed-3@2x.png';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  recipeCat: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53adsaabb32',
      title: 'Western',
      image: catImage
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3addsad53abb32',
      title: 'Italian',
      image: catImage
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad5dasds3abb32',
      title: 'Dessert',
      image: catImage
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53sdadabb32',
      title: 'Chocolates',
      image: catImage
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3adewq53abb32',
      title: 'Soups',
      image: catImage
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abdasasdb32',
      title: 'Pasta',
      image: catImage
    },

    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abdassdb32',
      title: 'OverFlown',
      image: catImage
    }
  ],
  userRecipeList: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3asdfsdf3czx',
      username: 'abc',
      password: '123',
      title: 'Apple and Cocoa Cheesecake',
      content:
        'I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ...',
      image: feedImg3,
      likeCount: 38,
      commentCount: 8,
      duration: '42 mins',
      ingredientsCount: 4,
      author: 'Nick Evans',
      postTime: '2h ago',
      avatar: avatarImg
    }
  ],
  userInfo: {
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
  }
};

export const userSlice = createSlice({
  name: 'recipe',
  initialState: initialState,
  reducers: {
    saveEditProfile: (state, action) => {},
    saveEditProfileFulfilled: (state, action) => {
      console.log(action.payload.payload);
      state.userInfo = action.payload.payload;
    },
    saveEditProfileRejected: (state, action) => {},
    login: (state, action) => {
      state.isLoading = true;
    },
    loginFulfilled: (state, action) => {
      const authData = {
        userName: state.userInfo.userName,
        password: state.userInfo.password
      };

      if (
        action.payload.payload.userName === state.userInfo.userName ||
        action.payload.payload.password === state.userInfo.password
      ) {
        console.log('Success');
        state.isLoading = false;
        state.isLoggedIn = true;
        console.log(state.isLoggedIn);
      } else {
        console.log(authData);
        state.isLoading = false;
        state.isLoggedIn = false;
      }
    },
    loginRejected: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    fetchUser(state) {},
    fetchUserFulfilled: (state, action) => {
      // console.log(action.payload);
      state.userInfo = action.payload;
    },
    verifyLogin: (state, action) => {}
  }
});

export const {
  login,
  loginFulfilled,
  loginRejected,
  fetchUser,
  fetchUserFulfilled,
  saveEditProfile,
  saveEditProfileFulfilled,
  saveEditProfileRejected
} = userSlice.actions;
