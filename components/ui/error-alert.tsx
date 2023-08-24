import React, { ReactNode } from 'react';
import classes from './error-alert.module.css';

interface ErrorAlertProps {
  children: ReactNode;
}

function ErrorAlert(props: ErrorAlertProps) {
  const { children } = props;
  return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;
