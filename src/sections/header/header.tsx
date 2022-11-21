import { Nav } from "common/components/nav";
import { Button } from "common/components/ui/button";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <div>
        <Button variant="transparent">Sign In</Button>
        <Button size="small" className={styles.headerButton}>
          Sign Up
        </Button>
      </div>
    </header>
  );
};
