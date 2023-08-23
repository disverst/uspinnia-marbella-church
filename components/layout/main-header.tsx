import React from 'react';
import Link from 'next/link';
import LogoUS from 'components/layout/svgs/logoUS.svg';

import classes from 'components/layout/main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <div className={classes.logoImg}>
            <LogoUS />
          </div>
          <div className={classes.logoText}>
            <span>Парафія на честь Успіння</span>
            <span>Божої Матері в Марбеї</span>
          </div>
        </Link>
      </div>
      {/* <nav className={classes.navigation}>
        <ul className={classes.menu}>
          <li>
            <Link href="/events">Розклад</Link>
          </li>
          <li>
            <Link href="/events">Для дітей</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default MainHeader;
