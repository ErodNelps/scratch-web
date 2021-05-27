import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';

import './App.css';
import UserProfile from './view/page/UserProfile';
import RecipeFeed from './view/page/RecipeFeed';
import EditProfile from './view/page/EditProfile';
import NavBar from './view/component/NavBar';
// import catImage from './assets/images/cat@2x.png';
// import userCardImg from './assets/images/usercard-1@3x.png';
// import feedImg from './assets/images/feed-1@2x.png';
// import feedImg2 from './assets/images/feed-2@2x.png';
// import feedImg3 from './assets/images/feed-3@2x.png';
// import avatarImg from './assets/images/avatar@2x.png';
import paths from './configs/paths';
import Login from './view/page/Login';
import store, { RootState } from './redux/store';
import { fetchUser } from './redux/user/user';
import { connect } from 'react-redux';

export type Category = {
  id: string;
  title: string;
  image: string;
};

export type Recipe = {
  id: string;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  commentCount: number;
  duration: string;
  ingredientsCount: number;
  author: string;
  postTime: string;
  avatar: string;
};

export type User = {
  id: string;
  username: string;
  bio: string;
  recipeCount: number;
  savedCount: number;
  followingCount: number;
  followerCount: number;
  likeCount: string;
  phone: string;
  email: string;
  avatar: string;
};

function App() {
  const history = useHistory();
  useEffect(() => {
    // store.dispatch(fetchUser());
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={[paths.BASE]}>
            <Switch>
              <Route exact path={paths.BASE} component={Login} />
            </Switch>
          </Route>
          <Route exact path={[paths.HOME, paths.PROFILE, paths.PROFILE_EDIT]}>
            <NavBar />
            <Switch>
              <Route exact path={paths.HOME} component={RecipeFeed} />
              <Route exact path={paths.PROFILE} component={UserProfile} />
              <Route exact path={paths.PROFILE_EDIT} component={EditProfile} />
            </Switch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {};
};

export default connect(mapStateToProps)(App);
