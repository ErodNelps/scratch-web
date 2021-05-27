import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import RecipeCard from './RecipeCard';
import { Recipe } from '../../App';
import { useHistory } from 'react-router';
import WithLoading from '../../HOC/withLoading';
import paths from '../../configs/paths';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    feed: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
      paddingRight: 25,
      paddingLeft: 25,
      margin: '20px 10px'
    }
  })
);

type ChildProps = {
  recipeFeed: Recipe[];
};

const RecipeSection = ({ recipeFeed }: ChildProps) => {
  const classes = useStyles();
  const history = useHistory();
  const onSaveButtonClick = (item: Recipe) => {
    history.push(paths.PROFILE);
  };

  return (
    <>
      <Paper className={classes.feed}>
        {recipeFeed ? (
          recipeFeed.map((item, index) => (
            <RecipeCard
              item={item}
              key={index}
              onSaveButtonClick={onSaveButtonClick}
            />
          ))
        ) : (
          <>Fetching Feed</>
        )}
      </Paper>
    </>
  );
};

export default WithLoading(RecipeSection);
// export default RecipeSection;
