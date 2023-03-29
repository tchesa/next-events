import EventContent from "@/components/events/event-content";
import EventLogistics from "@/components/events/event-logistics";
import EventSummary from "@/components/events/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();
  const eventId = router.query.id;
  const event = getEventById(eventId);

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <>
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
