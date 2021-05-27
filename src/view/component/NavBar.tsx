import {
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Color } from '../../constants/color';
import logo from '../../assets/images/loco-icon.png';
import notifIcon from '../../assets/icon/notification@3x.png';
import mailIcon from '../../assets/icon/message@3x.png';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { User } from '../../App';
import { connect } from 'react-redux';
import { RootState } from '../../redux/store';
import paths from '../../configs/paths';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  logo: {
    marginRight: theme.spacing(1),
    backgroundSize: 'contain'
  },
  grow: {
    flexGrow: 1
  },
  toolbar: {
    display: 'flex',
    maxHeight: 80,
    alignItems: 'flex-start',
    alignContent: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    height: 80
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end'
  },
  appbar: {
    display: 'flex',
    backgroundColor: Color.White,
    borderRadius: 8,
    boxShadow: 'none',
    alignItems: 'space-between',
    justifyContent: 'center'
  },
  logoGroup: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyItems: 'space-between'
  },
  searchbar: {
    flex: 2,
    alignSelf: 'center'
  },

  sectionDesktop: {
    display: 'flex',
    justifyItems: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  iconButton: {
    width: 36,
    height: 36,
    marginRight: theme.spacing(4)
  },
  icon: {
    width: 36,
    height: 36
  }
}));
type PageProps = {
  userInfo: User;
};
const NavBar = ({ userInfo }: PageProps) => {
  const classes = useStyles();
  const history = useHistory();
  const onLogoClick = useCallback(() => {
    history.push(paths.HOME);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.logoGroup}>
            <IconButton
              edge="start"
              className={classes.logo}
              color="inherit"
              aria-label="open drawer"
              onClick={onLogoClick}
            >
              <img src={logo}></img>
            </IconButton>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ alignSelf: 'center' }}
            >
              scratch
            </Typography>
          </div>
          <div className={classes.grow} />
          <TextField
            id="search-navbar"
            className={classes.searchbar}
            placeholder={'Search Recipe, Profile, or Ingredients'}
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="notification"
              color="inherit"
              className={classes.iconButton}
            >
              <Avatar className={classes.icon} src={notifIcon}></Avatar>
            </IconButton>
            <IconButton
              aria-label="mail"
              color="inherit"
              className={classes.iconButton}
            >
              <Avatar className={classes.icon} src={mailIcon}></Avatar>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="user"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar src={userInfo.avatar} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  const userInfo = state.user.userInfo;
  return { userInfo };
};

export default connect(mapStateToProps)(NavBar);
