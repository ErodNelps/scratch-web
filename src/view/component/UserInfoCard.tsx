import { Paper, Typography, Avatar, Divider } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import React from 'react';
import { Color } from '../../constants/color';
import { User } from '../../App';
const useStyles = makeStyles((theme) =>
  createStyles({
    userInfoCard: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
      margin: '20px 10px'
    },
    userInfo: {
      boxShadow: 'none',
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'left'
    },
    userInfoText: {
      marginLeft: 15
    },

    profileStats: {
      boxShadow: 'none',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    },
    profileStatsBlock: {
      display: 'flex',
      flexDirection: 'column'
    },
    divider: {
      margin: '20px 0 15px 0'
    },
    header: {
      color: Color.FocusedText,
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Nunito, sans-serif'
    },
    text: {
      color: Color.GreyoutText,
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'Nunito, sans-serif'
    },
    followerText: {
      color: Color.GreyoutText,
      fontSize: 12,
      fontWeight: 400,
      fontFamily: 'Nunito, sans-serif'
    },
    statsHeader: {
      color: Color.FocusedText,
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Nunito, sans-serif'
    },
    statsLabel: {
      color: Color.GreyoutText
    },
    avatar: {
      width: 70,
      height: 70
    },
    followerGroup: {
      marginTop: 10,
      fontSize: 12,
      flexWrap: 'wrap',
      boxShadow: 'none',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    bullet: {
      margin: '0 10px 0 10px',
      color: Color.GreyoutText
    }
  })
);

type CardProps = {
  user: User;
};
const UserInfoCard = ({ user }: CardProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.userInfoCard}>
      <Paper className={classes.userInfo}>
        <Avatar className={classes.avatar} src={user.avatar} />
        <div className={classes.userInfoText}>
          <Typography className={classes.header}>
            {user.username || 'John Doe'}
          </Typography>
          <Typography className={classes.text}>{user.bio}</Typography>
          <div className={classes.followerGroup}>
            <Typography className={classes.followerText}>
              {user.followerCount} followers
            </Typography>
            <span className={classes.bullet}>•</span>
            <Typography className={classes.followerText}>
              {user.likeCount} likes
            </Typography>
          </div>
        </div>
      </Paper>
      <Divider variant="middle" className={classes.divider} />
      <Paper className={classes.profileStats}>
        <div className={classes.profileStatsBlock}>
          <Typography className={classes.statsHeader}>
            {user.recipeCount}
          </Typography>
          <Typography className={classes.statsLabel}>Recipes</Typography>
        </div>
        <div className={classes.profileStatsBlock}>
          <Typography className={classes.statsHeader}>
            {user.savedCount}
          </Typography>
          <Typography className={classes.statsLabel}>Saved</Typography>
        </div>
        <div className={classes.profileStatsBlock}>
          <Typography className={classes.statsHeader}>
            {user.followingCount}
          </Typography>
          <Typography className={classes.statsLabel}>Following</Typography>
        </div>
      </Paper>
    </Paper>
  );
};

export default UserInfoCard;
