import React from 'react';
import Link from 'next/link';
import PhoneIcon from 'components/icons/phone-icon';
import MailIcon from 'components/icons/mail-icon';
import MapIcon from 'components/icons/map-icon copy';
import classes from './footer-section.module.css';

export default function FooterSection() {
  const contactLinks = [
    {
      text: 'м. Марбелья вул. Alfredo Palma',
      href: 'https://maps.app.goo.gl/wYvLiS2zGRWotjgZ9',
      icon: <MapIcon />,
    },
    {
      text: '+34 666 675 414 свящ. Ігор Будник',
      href: 'tel:+34666675414',
      icon: <PhoneIcon />,
    },
    {
      text: 'usp.marbella.ch@gmail.com',
      href: 'mailto:usp.marbella.ch@gmail.com',
      icon: <MailIcon />,
    },
  ];

  return (
    <footer className={classes.section}>
      <div className={classes.container}>
        <div className={classes.contacts}>
          <h2>Наші контакти</h2>
          {contactLinks.map((link) => (
            <Link href={link.href} key={link.href} className={classes.link}>
              <span className={classes.icon}>{link.icon}</span>
              <span className={classes.text}>{link.text}</span>
            </Link>
          ))}
        </div>
        <div className={classes.mapPicture}>
          <img src="images/map.png" alt="Карта" />
        </div>
      </div>
    </footer>
  );
}
