import { HorisontalSlider } from "common/components/horisontal-slider";
import { Container } from "common/components/ui/container";
import { Typography } from "common/components/ui/typography";
import { HorisontalSliderProps } from "common/types/types";
import styles from "./styles.module.scss";

type Props = {
  dataSlider: HorisontalSliderProps[];
};

export const Testimonials = ({ dataSlider }: Props) => {
  return (
    <div className={styles.testimonials}>
      <Container>
        <Typography
          variant="title"
          align="center"
          color="var(--black-color)"
          weight="600"
          className={styles.title}
        >
          What People Are Saying
        </Typography>
        <HorisontalSlider data={dataSlider} />
      </Container>
    </div>
  );
};
