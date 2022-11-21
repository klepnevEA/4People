import { Button } from "common/components/ui/button";
import { ItemSelect } from "common/components/ui/item-select";
import { Typography } from "common/components/ui/typography";
import cs from "classnames";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  price: number;
  periodOption: { value: string; label: string }[];
  teamMatesOption: { value: string; label: string }[];
  buttonVariang?: "outlined" | "primary";
  className?: string;
};

export const PricingCard = ({
  title,
  price,
  periodOption,
  teamMatesOption,
  buttonVariang = "outlined",
  className,
}: Props) => {
  return (
    <div className={cs(styles.pricingCard, className)}>
      <Typography
        variant="body4"
        color="var(--black-color)"
        weight="500"
        className={styles.title}
      >
        {title}
      </Typography>
      <div className={styles.price}>
        ${price}
        <span>/month</span>
      </div>
      <form>
        <ItemSelect
          options={periodOption}
          label="Period"
          className={styles.select}
        />
        <ItemSelect
          options={teamMatesOption}
          label="Teammates"
          className={styles.select}
        />
        <Button variant={buttonVariang} wide>
          Choose Plan
        </Button>
      </form>
    </div>
  );
};
