import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();

  const eventId = router.query.id;

  return (
    <div>
      <h1>Event page</h1>
    </div>
  );
};

export default EventPage;
