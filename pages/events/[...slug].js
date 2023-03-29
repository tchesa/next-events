import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  // const [year, month] = router.query.slug;
  const year = +router.query.slug[0];
  const month = +router.query.slug[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return <p className="center">Invalid filter. Please adjust your values.</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: parseInt(year),
    month: parseInt(month),
  });

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
