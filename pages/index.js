import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/api";
import Head from "next/head";

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 10,
  };
};

export default function Events({ events = [] }) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventList events={events} />
    </div>
  );
}
