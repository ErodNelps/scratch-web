import React, { useContext, useState, useEffect } from 'react';
import {} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Color } from '../../constants/color';
import { Recipe, User } from '../../App';
import { useHistory } from 'react-router';
import store, { RootState } from '../../redux/store';
import LoginCard from '../component/LoginCard';
import backgroundCover from '../../assets/images/background@3x.png';
// import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import paths from '../../configs/paths';
import { fetchUser } from '../../redux/user/user';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex'
    },
    background: {
      position: 'absolute',
      backgroundImage: `url(${backgroundCover})`,
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity: 0.6,
      zIndex: 0
    },
    loginContainer: {
      zIndex: 1
    }
  })
);

type PageProps = {
  recipeFeed: Recipe[];
  user: User;
  isLoading: boolean;
  isLoggedIn: boolean;
};

const Login = ({ recipeFeed, user, isLoading, isLoggedIn }: PageProps) => {
  // const history = useHistory();
  const classes = useStyles();
  const history = useHistory();
  const handleUserProfileClick = () => {
    history.push(paths.HOME);
  };

  useEffect(() => {
    if (isLoggedIn) {
      store.dispatch(fetchUser());
      history.push(paths.HOME);
    }
    history.push(paths.BASE);
    return () => {};
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.background}></div>
      <div className={classes.loginContainer}>
        <LoginCard isLoading={isLoading} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  const recipeFeed = state.recipe.feed;
  const user = state.user.userInfo;
  const isLoading = state.user.isLoading;
  const isLoggedIn = state.user.isLoggedIn;
  return { recipeFeed, user, isLoading, isLoggedIn };
};

export default connect(mapStateToProps)(Login);
