import React from 'react';
import EventList from 'components/events/event-list';
import Button from 'components/ui/button';
import AddressIcon from 'components/icons/address-icon';
import classes from './second-section.module.css';
import { getLastThreeEvents } from '../../dummy-data';

export default function SecondSection() {
  const events = getLastThreeEvents();
  const exploreLink = `/events`;
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1>Життя нашої Парафії</h1>
        <EventList items={events} />
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Усі події</span>
            <span className={classes.icon}>
              <AddressIcon />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
