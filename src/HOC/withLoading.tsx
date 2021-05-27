import { CircularProgress } from '@material-ui/core';
import React from 'react';

type LoadingProps = {
  isLoading: boolean;
};

const withLoading =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & LoadingProps> =>
  ({ isLoading, ...props }: LoadingProps) =>
    isLoading ? <CircularProgress /> : <Component {...(props as P)} />;
export default withLoading;
