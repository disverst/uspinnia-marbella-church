import React from 'react';
import EventList from 'components/events/event-list';
import classes from './second-section.module.css';
import { getAllEvents } from '../../dummy-data';

export default function SecondSection() {
  const events = getAllEvents();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1>Життя нашої Парафії</h1>
        <EventList items={events} />
      </div>
    </section>
  );
}
