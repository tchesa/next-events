import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const handleSearch = (year, month) => {
    router.push({
      pathname: "/events/[...slug]",
      query: {
        slug: [year, month],
      },
    });
  };

  return (
    <>
      <EventsSearch onSearch={handleSearch} />
      <EventList events={events} />
    </>
  );
};

export default EventsPage;
