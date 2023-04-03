export const formatEventsResponse = (eventsMap) => {
  return Object.keys(eventsMap).reduce((arr, key) => {
    const event = {
      id: key,
      ...eventsMap[key],
    };

    return [...arr, event];
  }, []);
};

export async function getFeaturedEvents() {
  const response = await fetch(
    'https://next-events-dfd52-default-rtdb.firebaseio.com/events.json?orderBy="isFeatured"&equalTo=true'
  );
  const responseJson = await response.json();

  return formatEventsResponse(responseJson);
}

export async function getAllEvents() {
  const response = await fetch(
    "https://next-events-dfd52-default-rtdb.firebaseio.com/events.json"
  );
  const responseJson = await response.json();

  return formatEventsResponse(responseJson);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const events = await getAllEvents();
  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export async function getEventById(id) {
  const response = await fetch(
    `https://next-events-dfd52-default-rtdb.firebaseio.com/events/${id}.json`
  );
  const responseJson = await response.json();

  return {
    id,
    ...responseJson,
  };
}
