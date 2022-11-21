import { Button } from "common/components/ui/button";
import { Container } from "common/components/ui/container";
import { Grid } from "common/components/ui/grid";
import { Typography } from "common/components/ui/typography";
import { VerticalSlider } from "common/components/vertical-slider";
import { VersicalSliderProps } from "common/types/types";
import styles from "./styles.module.scss";

type Props = {
  dataSlider: VersicalSliderProps[];
};

export const Feature = ({ dataSlider }: Props) => {
  return (
    <div className={styles.feature}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xl={4}>
            <VerticalSlider data={dataSlider} className={styles.slider} />
          </Grid>
          <Grid item xl={8}>
            <div className={styles.content}>
              <Typography
                variant="title"
                color="var(--black-color)"
                weight="600"
                className={styles.title}
              >
                Headline of Modern & Digital
                <br /> Lending Platform Seconds
              </Typography>
              <Typography
                variant="body3"
                color="var(--gray-color)"
                weight="500"
                className={styles.text}
              >
                Nowadays, it isn’t uncommon to see lenders rapidly adopting a
                digital lending strategy to streamline the lending process
                Gorgeous, high-quality design system for mobile, tablet &
                desktop devices
              </Typography>
              <Button>More Features</Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
