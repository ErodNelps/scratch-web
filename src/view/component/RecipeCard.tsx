import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  Avatar,
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
  root: {
    marginBottom: 10,
    boxShadow: 'none'
  },
  cardHeader: {
    backgroundColor: `${Color.White} 10%`
  },
  cardMedia: {},
  cardAction: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
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
  onSaveButtonClick: (item: Recipe) => void;
};

const RecipeCard = ({ item, onSaveButtonClick }: CardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={item.avatar}
            // className={classes.avatar}
          >
            R
          </Avatar>
        }
        title={item.author}
        subheader={item.postTime}
        className={classes.cardHeader}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={item.image}
          title="Contemplative Reptile"
          className={classes.cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.likeCount} likes
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.commentCount} comments
        </Typography>
        <Button
          size="small"
          className={classes.button}
          onClick={() => onSaveButtonClick(item)}
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
