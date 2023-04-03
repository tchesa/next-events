import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/api";
import { useRouter } from "next/router";
import Head from "next/head";

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
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={handleSearch} />
      <EventList events={events} />
    </>
  );
};

export default EventsPage;
