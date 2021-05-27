import React from 'react';
import {
  Card,
  CardActions,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Color } from '../../constants/color';
import { Recipe } from '../../App';
const useStyles = makeStyles(() => ({
  cookButton: {
    paddingLeft: 10,
    paddingRight: 10,
    background: Color.White,
    boxSizing: 'border-box',
    border: '2px solid',
    borderColor: Color.Button,
    borderRadius: 8,
    color: Color.Button,
    fontFamily: 'Nunito, sans-serif'
  }
}));

type CardProps = {
  item: Recipe;
};
const UserRecipeCard = ({ item }: CardProps) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Recipe Card"
          height="140"
          image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="textSecondary" component="p">
          ± {item.duration}
        </Typography>
        <Button size="small" className={classes.cookButton}>
          Cook
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserRecipeCard;
