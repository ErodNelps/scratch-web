import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/loco-icon.png';
import logoGroup from '../../assets/images/logoGroup@2x.png';
import { Color } from '../../constants/color';
import {
  Button,
  TextField,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Link
} from '@material-ui/core';
import store from '../../redux/store';
import { sagaActions } from '../../redux/saga/actions';
import { login } from '../../redux/user/user';
import withLoading from '../../HOC/withLoading';
import { useHistory } from 'react-router';
import paths from '../../configs/paths';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: Color.White,
      display: 'flex',
      width: 910,
      height: 570
    },
    details: {
      flex: 1
    },
    content: {
      display: 'flex',
      flex: 1,
      height: '90%',
      flexDirection: 'column'
    },
    cover: {
      flex: 1
    },
    loginButton: {
      width: '100%',
      height: 50,
      backgroundColor: Color.Button,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginForm: {
      display: 'flex',
      flex: 2,
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'auto 60px 0 60px',
      justifyContent: 'space-between'
    },
    loginInput: {
      height: 40,
      width: '100%',
      margin: '10px auto 10px auto'
    },
    loginButtonText: {
      color: Color.White,
      fontWeight: 'bold'
    },
    welcome: {
      flexGrow: 1,
      paddingTop: 30
    }
  })
);

const LoginCard = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    store.dispatch(login({ userName: username, password: password }));
    //asyncronous, implement guard route instead
    setTimeout(() => {
      history.push(paths.HOME);
    }, 2000);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={logoGroup}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className={classes.welcome}>
              <Typography component="h5" variant="h5">
                Welcome Back!
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Please login to continue.
              </Typography>
            </div>
            <div className={classes.loginForm}>
              <TextField
                className={classes.loginInput}
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <TextField
                type="password"
                label="Password"
                className={classes.loginInput}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Button className={classes.loginButton} onClick={handleLogin}>
                <Typography className={classes.loginButtonText}>
                  Login
                </Typography>
              </Button>
              <Typography variant="subtitle1" color="textSecondary">
                New to Scratch?
              </Typography>
              <Typography variant="subtitle1">
                <Link>Create Account Here</Link>
              </Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default withLoading(LoginCard);
