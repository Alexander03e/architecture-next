import Link from "next/link";
import styles from "./PageNavigation.module.css";
import { UnderLinedLink } from "../../links/UnderLinedLink/UnderLinedLink";
export const PageNavigation = () => {
  return (
    <div className={styles.wrapper}>
      <UnderLinedLink title="Главная страница" href="/" />
      <UnderLinedLink title="Посты" href="/posts" />
      <UnderLinedLink title="Туду список" href="/todo" />
    </div>
  );
};
