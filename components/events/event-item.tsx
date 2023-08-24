import React from 'react';
import DateIcon from 'components/icons/date-icon';
import ArrowRightIcon from 'components/icons/arrow-right-icon';
import AddressIcon from 'components/icons/address-icon';
import { Event } from 'types';
import classes from './event-item.module.css';
import Button from '../ui/button';

function EventItem(props: Event) {
  const { title, image, date, shortDesc, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('uk-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <time>{shortDesc}</time>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
