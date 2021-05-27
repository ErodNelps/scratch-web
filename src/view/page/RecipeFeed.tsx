import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardMedia,
  Avatar
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Color } from '../../constants/color';

import liveFeed from '../../assets/images/Video@2x.png';
import TopRecipeCard from '../component/TopRecipeCard';
import UserInfoCard from '../component/UserInfoCard';
import { Recipe, User } from '../../App';
import { useHistory } from 'react-router';
import RecipeSection from '../component/RecipeSection';
import { RootState } from '../../redux/store';
import { connect } from 'react-redux';
import paths from '../../configs/paths';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 60,
      boxSizing: 'border-box',
      paddingRight: 80,
      paddingLeft: 60
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
      marginBottom: 20
    },
    userInfoCard: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
      margin: '20px 10px'
    },
    feed: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
      paddingRight: 25,
      paddingLeft: 25,
      margin: '20px 10px'
    },
    follower: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxSizing: 'border-box',
      height: 80,
      margin: '20px 10px'
    },
    liveFeedCard: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
      margin: '20px 10px'
    },
    liveFeed: {
      marginTop: 30,
      shadow: 'none'
    },
    mostActiveCard: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
      margin: '20px 10px'
    },
    mostActiveList: {
      marginTop: 10,
      boxShadow: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    footerCard: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: Color.GreyoutText,
      boxShadow: 'none',
      margin: '20px 10px'
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      boxShadow: 'none',
      color: Color.FocusedText,
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'Nunito, sans-serif',
      flexWrap: 'wrap'
    },
    footerText: {
      color: Color.GreyoutText,
      fontWeight: 400,
      fontFamily: 'Nunito, sans-serif',
      fontSize: 12
    },
    footerScratch: {
      color: Color.GreyoutText,
      fontWeight: 400,
      fontFamily: 'Nunito, sans-serif',
      marginTop: 10,
      fontSize: 10,
      textAlign: 'left'
    },

    createButton: {
      paddingLeft: 10,
      paddingRight: 10,
      background: Color.Button,
      color: Color.White,
      fontFamily: 'Nunito, sans-serif'
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
    }
  })
);

type PageProps = {
  recipeFeed: Recipe[];
  user: User;
};

const RecipeFeed = ({ recipeFeed, user }: PageProps) => {
  // const history = useHistory();
  const classes = useStyles();
  const history = useHistory();
  const handleUserProfileClick = () => {
    history.push(paths.PROFILE);
  };

  useEffect(() => {
    return () => {};
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  let loading = setTimeout(() => {
    setIsLoading(false);
  }, 1000);
  useEffect(() => {
    return () => {
      clearTimeout(loading);
    };
  }, [isLoading]);
  return (
    <>
      <Grid container justify="center" spacing={0} className={classes.root}>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          xl={3}
          onClick={handleUserProfileClick}
        >
          <UserInfoCard user={user} />
          <TopRecipeCard />
        </Grid>

        <Grid item xs={12} sm={12} md={6} xl={6}>
          <Paper className={classes.follower} elevation={3}>
            <Typography className={classes.text}>
              286 of your followers are online
            </Typography>
            <Button className={classes.createButton}>Create Recipe</Button>
          </Paper>
          <RecipeSection isLoading={isLoading} recipeFeed={recipeFeed} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} xl={3}>
          <Paper className={classes.liveFeedCard}>
            <Typography className={classes.header}>
              Live cooking by scratch
            </Typography>
            <Card className={classes.liveFeed}>
              <CardMedia
                component="img"
                alt="Live Feed"
                height="155"
                image={liveFeed}
                title="Live Feed"
              />
            </Card>
          </Paper>
          <Paper className={classes.mostActiveCard}>
            <Typography className={classes.header}>Most Active</Typography>
            <Paper className={classes.mostActiveList}>
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
            </Paper>
          </Paper>
          <Paper className={classes.footerCard}>
            <Paper className={classes.footer}>
              <Typography className={classes.footerText}>
                About scratch
              </Typography>
              <Typography className={classes.footerText}>
                Help Center
              </Typography>
              <Typography className={classes.footerText}>
                Privacy Policy
              </Typography>
            </Paper>
            <Typography className={classes.footerScratch}>
              © scratch by Invision 2019
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  const recipeFeed = state.recipe.feed;
  const user = state.user.userInfo;
  return { recipeFeed, user };
};
export default connect(mapStateToProps)(RecipeFeed);
