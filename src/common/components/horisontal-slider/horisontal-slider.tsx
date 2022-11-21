import { FC, useRef } from "react";
import cs from "classnames";
import styles from "./styles.module.scss";
import "./horisontal-slider.scss";
import SliderHorisontal from "react-slick";
import { Typography } from "../ui/typography";
import { HorisontalSliderProps } from "common/types/types";
import { ArrowLeft, ArrowRight, User } from "common/icons";
import { Icon } from "../ui/icon";
import { Grid } from "../ui/grid";

type Props = {
  className?: string;
  data: HorisontalSliderProps[];
};

export const HorisontalSlider: FC<Props> = ({ className, data }) => {
  const sliderRef = useRef(null);

  const settingsHorisontal = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="horisontal-slider">
      <div className={cs(styles.slider, className)}>
        <div
          className={styles.slickSliderArrowLeft}
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <Icon width={34} component={ArrowLeft} fill="var(--main-color)" />
        </div>
        <div
          className={styles.slickSliderArrowRight}
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <Icon width={34} component={ArrowRight} fill="var(--main-color)" />
        </div>
        <SliderHorisontal
          ref={sliderRef}
          {...settingsHorisontal}
          className={styles.slickSlider}
        >
          {data.map((item: HorisontalSliderProps) => (
            <div key={item.id} className={styles.slickSlide}>
              <div className={styles.slickSlideContent}>
                <Typography
                  variant="body4"
                  color="var(--black-color)"
                  weight="400"
                  className={styles.text}
                >
                  {item.text}
                </Typography>
                <Grid container spacing={1} alignItems="center">
                  <Grid item xl={3}>
                    <div className={styles.slickSlideUser}>
                      <Icon
                        width={18}
                        component={User}
                        fill="var(--main-color)"
                      />
                    </div>
                  </Grid>
                  <Grid item xl={9}>
                    <Typography
                      variant="body3"
                      color="var(--black-color)"
                      weight="400"
                      className={styles.name}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body0"
                      color="var(--gray-color)"
                      weight="400"
                      className={styles.position}
                    >
                      {item.position}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
          ))}
        </SliderHorisontal>
      </div>
    </div>
  );
};
