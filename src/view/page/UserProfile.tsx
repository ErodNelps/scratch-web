import React, { useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Button,
  List,
  ListItem
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Color } from '../../constants/color';

import UserInfoCard from '../component/UserInfoCard';
import UserControlCard from '../component/UserControlCard';
import CatCard from '../component/CatCard';
import backgroundCover from '../../assets/images/cover@4x.png';
import UserRecipeCard from '../component/UserRecipeCard';
import { Category, Recipe, User } from '../../App';
import { connect } from 'react-redux';
import { RootState } from '../../redux/store';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      flexGrow: 1,
      paddingTop: 60,
      boxSizing: 'border-box',
      paddingLeft: 60,
      paddingRight: 80,
      zIndex: 1
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
    addButton: {
      paddingLeft: 10,
      paddingRight: 10,
      background: Color.White,
      boxSizing: 'border-box',
      border: '2px solid',
      borderColor: Color.Button,
      borderRadius: 8,
      color: Color.Button,
      fontFamily: 'Nunito, sans-serif'
    },
    text: {
      color: Color.FocusedText,
      fontSize: '0.8rem',
      fontWeight: 400,
      fontFamily: 'Nunito, sans-serif'
    },
    header: {
      color: Color.FocusedText,
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Nunito, sans-serif'
    },
    profileHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(3),
      backgroundColor: Color.Transparent,
      textAlign: 'center',
      boxSizing: 'border-box',
      height: 80,
      margin: '20px 10px',
      boxShadow: 'none',
      paddingRight: 80
    },
    bigHeader: {
      color: Color.FocusedText,
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: 'Nunito, sans-serif'
    },
    catList: {
      display: 'flex',
      flexDirection: 'row',
      justifyItems: 'space-between',
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      margin: '20px 10px',
      background: Color.Transparent,
      overflow: 'auto',
      maxWidth: '100%',
      '&-webkit-scrollbar': {
        display: 'none'
      }
    },
    userRecipeList: {
      position: 'relative',
      flexGrow: 1,
      padding: 25,
      boxSizing: 'border-box'
    }
  })
);

type PageProps = {
  user: User;
  recipeCat: Category[];
  userRecipeList: Recipe[];
};

const UserProfile = ({ user, recipeCat, userRecipeList }: PageProps) => {
  const classes = useStyles();
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <div className={classes.cover}></div>
      <Grid container justify="center" spacing={0} className={classes.root}>
        <Grid item xs={12} sm={12} md={3} xl={3}>
          <UserInfoCard user={user} />
          <UserControlCard />
        </Grid>

        <Grid item xs={12} sm={12} md={9} xl={9}>
          <Paper className={classes.profileHeader}>
            <Typography className={classes.bigHeader}>My Recipes</Typography>
            <Button className={classes.addButton}>Add New</Button>
          </Paper>
          <List className={classes.catList}>
            {recipeCat ? (
              recipeCat.map((item) => (
                <ListItem key={'listItem' + item.id}>
                  <CatCard item={item} key={'cat' + item.id} />
                </ListItem>
              ))
            ) : (
              <>Fetching Feed</>
            )}
          </List>
          <Paper className={classes.userRecipeList}>
            <Grid container justify="center" spacing={3}>
              {userRecipeList ? (
                userRecipeList.map((recipe, index) =>
                  index % 2 !== 0 ? (
                    <Grid item sm={6} xl={4} key={recipe.id}>
                      <UserRecipeCard
                        item={recipe}
                        key={'userRecipe' + recipe.id}
                      />
                    </Grid>
                  ) : (
                    <></>
                  )
                )
              ) : (
                <>Fetching Recipes</>
              )}

              {userRecipeList ? (
                userRecipeList.map((recipe, index) =>
                  index % 2 === 0 ? (
                    <Grid item sm={6} xl={4} key={recipe.id}>
                      <UserRecipeCard
                        item={recipe}
                        key={'userRecipe2' + recipe.id}
                      />
                    </Grid>
                  ) : (
                    <></>
                  )
                )
              ) : (
                <>Fetching Recipes</>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  const recipeCat = state.user.recipeCat;
  const userRecipeList = state.user.userRecipeList;
  const user = state.user.userInfo;
  return {
    user,
    recipeCat,
    userRecipeList
  };
};

export default connect(mapStateToProps)(UserProfile);
