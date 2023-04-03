import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/api";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
  };
};

const EventsPage = ({ events = [] }) => {
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
