import { Container } from "common/components/ui/container";
import { Grid } from "common/components/ui/grid";
import { PricingCard } from "./modules/pricing-card";
import styles from "./styles.module.scss";

const PLUG = [
  { value: "Monthly1", label: "Monthly1" },
  { value: "Monthly2", label: "Monthly2" },
  { value: "Monthly3", label: "Monthly3" },
];

const PLUG2 = [
  { value: "User 1", label: "User 1" },
  { value: "User 2", label: "User 2" },
  { value: "User 3", label: "User 3" },
];

export const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={4}>
            <PricingCard
              title="Starter"
              price={49}
              periodOption={PLUG}
              teamMatesOption={PLUG2}
            />
          </Grid>
          <Grid item xs={4}>
            <PricingCard
              title="Premium"
              price={89}
              periodOption={PLUG}
              teamMatesOption={PLUG2}
              buttonVariang="primary"
            />
          </Grid>
          <Grid item xs={4}>
            <PricingCard
              title="Unlimited"
              price={199}
              periodOption={PLUG}
              teamMatesOption={PLUG2}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
