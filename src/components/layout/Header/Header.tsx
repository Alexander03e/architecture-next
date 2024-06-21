import { PageNavigation } from "@/components/ui/page-navigation/PageNavigation/PageNavigation";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className="container">
        <div className={styles.innerWrapper}>
          <PageNavigation />
        </div>
      </div>
    </header>
  );
};
