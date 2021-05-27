import { Typography, Paper } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Color } from '../../constants/color';

import EditIcon from '../../assets/icon/edit-icon@2x.png';
import LogoutIcon from '../../assets/icon/logout-icon@2x.png';
import SettingIcon from '../../assets/icon/setting-icon@2x.png';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import React from 'react';
import paths from '../../configs/paths';

const useStyles = makeStyles((theme) =>
  createStyles({
    userControlCard: {
      color: theme.palette.text.secondary,
      boxShadow: 'none',
      margin: '20px 10px',
      textAlign: 'left'
    },
    text: {
      color: Color.FocusedText,
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'Nunito, sans-serif'
    },
    header: {
      color: Color.FocusedText,
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Nunito, sans-serif'
    },
    controlLabel: {
      color: Color.GreyoutText,
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'Nunito, sans-serif',
      marginLeft: 10
    },
    userButtonGroup: {
      display: 'flex',
      paddingTop: 25,
      flexDirection: 'column',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    userButton: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      background: 'inherit',
      paddingLeft: 25,
      paddingRight: 25,
      borderRadius: 0,
      margin: ' 0  0 25px 0',
      boxShadow: 'none',
      width: '100%',
      height: 25,
      '&:hover': {
        backgroundColor: Color.HoverButton,
        cursor: 'pointer'
      }
    },
    buttonIcon: {
      height: 'inherit'
    }
  })
);

const UserControlCard = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleEditProfileClick = useCallback(() => {
    history.push(paths.PROFILE_EDIT);
  }, []);

  return (
    <Paper className={classes.userControlCard}>
      <div className={classes.userButtonGroup}>
        <Paper className={classes.userButton} onClick={handleEditProfileClick}>
          <img alt="Edit" src={EditIcon} className={classes.buttonIcon}></img>
          <Typography className={classes.controlLabel}>Edit Profile</Typography>
        </Paper>
        <Paper className={classes.userButton}>
          <img
            alt="Edit"
            src={SettingIcon}
            className={classes.buttonIcon}
          ></img>
          <Typography className={classes.controlLabel}>Settings</Typography>
        </Paper>
        <Paper className={classes.userButton}>
          <img alt="Edit" src={LogoutIcon} className={classes.buttonIcon}></img>
          <Typography className={classes.controlLabel}>Logout</Typography>
        </Paper>
      </div>
    </Paper>
  );
};

export default UserControlCard;
