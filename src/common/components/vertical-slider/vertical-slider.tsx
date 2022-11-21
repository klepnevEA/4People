import { FC } from "react";
import cs from "classnames";
import styles from "./styles.module.scss";
import "./vertical-slider.scss";
import Slider from "react-slick";
import { Typography } from "../ui/typography";
import { Icon } from "../ui/icon";
import { ChevronRight } from "common/icons";
import { VersicalSliderProps } from "common/types/types";

type Props = {
  className?: string;
  data: VersicalSliderProps[];
};

export const VerticalSlider: FC<Props> = ({ className, data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    swipeToSlide: true,
    swipe: true,
    arrows: false,
    dotsClass: "slickDots",
    verticalSwiping: true,
  };
  return (
    <div className="vertical-slider">
      <div className={cs(styles.slider, className)}>
        <Slider {...settings} className={styles.slickSlider}>
          {data.map((item: VersicalSliderProps) => (
            <div key={item.id} className={styles.slickSlide}>
              <Typography
                variant="body3"
                color="var(--black-color)"
                weight="500"
                className={styles.title}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                color="var(--black-color)"
                weight="400"
                className={styles.text}
              >
                {item.text}
              </Typography>
              <Typography
                component="a"
                variant="body1"
                align="center"
                color="var(--main-color)"
                weight="600"
                href={item.link}
                className={styles.link}
              >
                Learn More
                <Icon
                  width={22}
                  component={ChevronRight}
                  className={styles.linkIcon}
                />
              </Typography>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
