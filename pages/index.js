import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}
