import React, { useState, useEffect, useCallback } from 'react';
import { Avatar, Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import userValidator from '../../helper/userValidator';
import backgroundCover from '../../assets/images/cover@4x.png';
import CustomInputField from '../component/CustomInputField';
import { useHistory } from 'react-router';
import store, { RootState } from '../../redux/store';
import { connect } from 'react-redux';
import { User } from '../../App';
import paths from '../../configs/paths';
import { saveEditProfile } from '../../redux/user/user';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',

    padding: 60,
    boxSizing: 'border-box',
    zindex: 1
  },
  cover: {
    position: 'absolute',
    width: '100%',
    height: '50vh',
    backgroundImage: `url(${backgroundCover})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: 0.2,
    zIndex: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 2
  },
  avatar: {
    alignSelf: 'center',
    justifySelf: 'center',
    flex: 1,
    width: 1
  }
}));
type PageProps = {
  userInfo: User;
};

const EditProfile = ({ userInfo }: PageProps) => {
  const history = useHistory();
  const classes = useStyles();
  const [newUserName, setNewUserName] = useState({
    value: userInfo.username,
    invalid: false
  });
  const [userBio, setUserBio] = useState({
    value: userInfo.bio,
    invalid: false
  });
  const [email, setEmail] = useState({
    value: userInfo.email,
    invalid: false
  });
  const [phone, setPhone] = useState({
    value: userInfo.phone,
    invalid: false
  });

  const onUserNameChange = useCallback((value: string) => {
    if (userValidator('username', value)) {
      setNewUserName({ value: value, invalid: true });
    } else {
      setNewUserName({ value: value, invalid: false });
    }
  }, []);
  const onBioChange = useCallback((value: string) => {
    if (userValidator('bio', value)) {
      setUserBio({ value: value, invalid: true });
    } else {
      setUserBio({ value: value, invalid: false });
    }
  }, []);
  const onEmailChange = useCallback((value: string) => {
    if (userValidator('email', value)) {
      setEmail({ value: value, invalid: true });
    } else {
      setEmail({ value: value, invalid: false });
    }
  }, []);
  const onPhoneChange = useCallback((value: string) => {
    if (userValidator('phone', value)) {
      setPhone({ value: value, invalid: true });
    } else {
      setPhone({ value: value, invalid: false });
    }
  }, []);

  const handleSaveProfile = () => {
    if (
      newUserName.invalid ||
      userBio.invalid ||
      email.invalid ||
      phone.invalid
    ) {
      return;
    }
    store.dispatch(
      saveEditProfile({
        ...userInfo,
        ...{
          username: newUserName.value,
          bio: userBio.value,
          email: email.value,
          phone: phone.value
        }
      })
    );
    history.push(paths.PROFILE);
  };

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <div className={classes.cover}></div>
      <Grid container justify="center" spacing={0} className={classes.root}>
        <Grid item xs={12} sm={8} md={6} xl={6}>
          <Paper className={classes.form}>
            <Avatar className={classes.avatar} />
            <CustomInputField
              label="Full Name"
              value={newUserName.value}
              invalid={newUserName.invalid}
              onInputChange={onUserNameChange}
            />
            <CustomInputField
              label="Bio"
              value={userBio.value}
              invalid={userBio.invalid}
              onInputChange={onBioChange}
            />
            <CustomInputField
              label="Email"
              value={email.value}
              invalid={email.invalid}
              onInputChange={onEmailChange}
            />
            <CustomInputField
              label="Phone"
              value={phone.value}
              invalid={phone.invalid}
              onInputChange={onPhoneChange}
            />
            <Button onClick={handleSaveProfile}>Save Profile</Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  const userInfo = state.user.userInfo;
  return { userInfo };
};

export default connect(mapStateToProps)(EditProfile);
