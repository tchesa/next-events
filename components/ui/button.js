import Link from "next/link";
import styles from "@/styles/button.module.css";

const Button = ({ href, children }) => {
  return (
    <Link className={styles.btn} href={href}>
      {children}
    </Link>
  );
};

export default Button;
