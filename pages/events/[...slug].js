import EventList from "@/components/events/event-list";
import { formatEventsResponse } from "@/api";
import { useRouter } from "next/router";
import useSWR from "swr";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug || [];

  const year = +filterData[0];
  const month = +filterData[1];
  const isFilterInvalid =
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12;

  const { data } = useSWR(
    "https://next-events-dfd52-default-rtdb.firebaseio.com/events.json",
    (url) => fetch(url).then((res) => res.json())
  );
  const events = data ? formatEventsResponse(data) : undefined;

  if (!filterData || !events) {
    return <p className="center">Loading...</p>;
  }

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  if (isFilterInvalid) {
    return <p className="center">Invalid filter. Please adjust your values.</p>;
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    <p className="center">No events found for the chosen filter</p>;
  }

  return (
    <div>
      <h1>Filtered events page</h1>
      <EventList events={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
