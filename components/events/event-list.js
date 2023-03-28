import EventItem from "./event-item";
import styles from "@/styles/event-list.module.css";

const EventList = ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <li key={event.id}>
          <EventItem event={event} />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
