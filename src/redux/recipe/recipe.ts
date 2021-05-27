import { createSlice } from '@reduxjs/toolkit';
// import catImage from '../../assets/images/cat@2x.png';
// import userCardImg from '../../assets/images/usercard-1@3x.png';
import feedImg from '../../assets/images/feed-1@2x.png';
import feedImg2 from '../../assets/images/feed-2@2x.png';
import feedImg3 from '../../assets/images/feed-3@2x.png';
import avatarImg from '../../assets/images/avatar@2x.png';

const initialState = {
  feed: [
    {
      id: 'bd7acbea-c1b1-46c2-ae5-3asdfscxv',
      title: 'Tofu Salad Ginger Garlic',
      content:
        'I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ...',
      image: feedImg,
      likeCount: 38,
      commentCount: 8,
      duration: '42 mins',
      ingredientsCount: 4,
      author: 'Nick Evans',
      postTime: '2h ago',
      avatar: avatarImg
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3asdfsxcacxv',
      title: 'Grilled Meatballs',
      content:
        'I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ...',
      image: feedImg2,
      likeCount: 38,
      commentCount: 8,
      duration: '42 mins',
      ingredientsCount: 4,
      author: 'Nick Evans',
      postTime: '2h ago',
      avatar: avatarImg
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3asdfsdf3czxacxv',
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
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3asdfsd3czacxv',
      title: 'Tofu Salad Ginger Garlic',
      content:
        'I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ...',
      image: feedImg,
      likeCount: 38,
      commentCount: 8,
      duration: '42 mins',
      ingredientsCount: 4,
      author: 'Nick Evans',
      postTime: '2h ago',
      avatar: avatarImg
    }
  ],
  loaded: false
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: initialState,
  reducers: {},

  extraReducers: {}
});
// export const selectFeed = (state) => state.recipe.feed;
