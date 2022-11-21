import cs from "classnames";
import { Button } from "../ui/button";
import styles from "./styles.module.scss";

export const Nav = () => {
  return (
    <ul className={cs(styles.nav)}>
      <li className={cs(styles.navItem)}>
        <Button variant="transparent">Home</Button>
      </li>
      <li className={cs(styles.navItem)}>
        <Button variant="transparent">Features</Button>
      </li>
      <li className={cs(styles.navItem)}>
        <Button variant="transparent">Pricing</Button>
      </li>
      <li className={cs(styles.navItem)}>
        <Button variant="transparent">About Us</Button>
      </li>
    </ul>
  );
};
