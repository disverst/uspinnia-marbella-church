import React from 'react';
import EventItem from './event-item';
import classes from './event-list.module.css';

interface Event {
  id: string;
  title: string;
  shortDesc: string;
  date: string;
  image: string;
}

interface EventListProps {
  items: Event[];
}

function EventList(props: EventListProps) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          shortDesc={event.shortDesc}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
