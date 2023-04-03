import EventContent from "@/components/events/event-content";
import EventLogistics from "@/components/events/event-logistics";
import EventSummary from "@/components/events/event-summary";
import { getEventById, getFeaturedEvents } from "@/api";
import Head from "next/head";

export const getStaticProps = async (context) => {
  const eventId = context.params.id;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  return {
    paths: events.map((event) => ({ params: { id: event.id } })),
    fallback: "blocking",
  };
};

const EventPage = ({ event }) => {
  if (!event) {
    return <p className="center">Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventPage;
