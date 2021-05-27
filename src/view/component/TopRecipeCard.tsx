import { Typography, Paper } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import React from 'react';
import { Color } from '../../constants/color';

const useStyles = makeStyles((theme) =>
  createStyles({
    topRecipeCard: {
      padding: theme.spacing(3),
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
    topRecipeText: {
      color: Color.GreyoutText,
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'Nunito, sans-serif',
      marginTop: 10,
      marginBottom: 10
    },
    topRecipe: {
      marginTop: 20
    }
  })
);

const TopRecipeCard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.topRecipeCard}>
      <Typography className={classes.header}>Top 5 Recipe today</Typography>
      <div className={classes.topRecipe}>
        <Typography className={classes.topRecipeText}>
          Tea-Smoked Creamy Chicken
        </Typography>
        <Typography className={classes.topRecipeText}>
          Pickled Savory Tortilla
        </Typography>
        <Typography className={classes.topRecipeText}>
          Stuffed Basil & Mint Salmon
        </Typography>
        <Typography className={classes.topRecipeText}>
          Strawberry Jelly
        </Typography>
        <Typography className={classes.topRecipeText}>
          Cinnamon and Lime Toffee
        </Typography>
      </div>
    </Paper>
  );
};

export default TopRecipeCard;
