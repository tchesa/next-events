import Link from "next/link";
import styles from "@/styles/event-item.module.css";

const EventItem = ({ event }) => {
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = event.location.replace(", ", "\n");
  const exploreLink = `/events/${event.id}`;

  return (
    <div className={styles.item}>
      <img src={`/${event.image}`} alt={event.title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{event.title}</h2>
          <div className={styles.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>Explore event</Link>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
