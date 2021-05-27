import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Category } from '../../App';
import React from 'react';
const useStyles = makeStyles(() => ({
  container: {
    height: 138,
    width: 155,
    borderRadius: 8,
    padding: 0,
    opacity: 0.5,
    spacing: '0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      opacity: 1
    }
  },
  cardTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center'
  }
}));

type CardProps = {
  item: Category;
};
const CatCard = ({ item }: CardProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Cat"
            height="100%"
            image={item.image}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CatCard;
