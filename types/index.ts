export interface Event {
  id: string;
  title: string;
  shortDesc: string;
  date: string;
  image: string;
}

export interface EventListProps {
  items: Event[];
}
