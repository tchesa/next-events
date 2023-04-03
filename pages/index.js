import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/api";

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
      <EventList events={events} />
    </div>
  );
}
