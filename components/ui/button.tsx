import React, { ReactNode } from 'react';
import Link from 'next/link';
import classes from './button.module.css';

interface ButtonProps {
  link?: string;
  onClick?: () => void;
  children: ReactNode;
}

function Button(props: ButtonProps) {
  const { link, onClick, children } = props;

  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
