const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Перша служба',
    desc: "Здійснено перше богослужіння в Успінській парафії міста Марбеї. Першої зустрічі взяли участь десять людей, які виявили глибокий інтерес до релігійних подій. Протоієрей Ігор, що керує парафією, відзначив важливість цього моменту в історії громади. Він завітав на богослужіння, провів релігійний обряд та поділився духовним відомостями з присутніми. Одним із ключових моментів було спільне причастя учасників Христового Тіла та Крові, що символізує об'єднання вірян з Христом та між собою. Ця перша зустріч відкрила новий розділ в історії парафії та покликала вірних до ще глибшого розуміння віри та духовності",
    shortDesc:
      'Перше богослужіння в Успінській парафії Марбеї: важливий крок у уховному розвитку',
    date: '2023-05-12',
    image: 'images/blog1_p1.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    desc: "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    shortDesc: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'images/blog2_p2.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    desc: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    shortDesc: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'images/blog3_p3.jpg',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'Networking for extroverts',
    desc: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    shortDesc: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'images/blog3_p3.jpg',
    isFeatured: true,
  },
  {
    id: 'e5',
    title: 'Networking for extroverts',
    desc: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    shortDesc: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'images/blog3_p3.jpg',
    isFeatured: true,
  },
  {
    id: 'e6',
    title: 'Networking for extroverts',
    desc: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    shortDesc: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'images/blog3_p3.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getLastThreeEvents() {
  const lastThreeEvents = DUMMY_EVENTS.slice(-3);
  return lastThreeEvents;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
