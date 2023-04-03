import Link from "next/link";
import styles from "@/styles/button.module.css";

const Button = ({ href, children, onClick }) => {
  if (href) {
    return (
      <Link className={styles.btn} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
