import { Icon } from "common/components/ui/icon";
import { Typography } from "common/components/ui/typography";
import { ArrowRight } from "common/icons";
import MainImage from "common/images/ipad.svg";
import styles from "./styles.module.scss";

export const MainSlide = () => {
  return (
    <div className={styles.mainSlide}>
      <div className={styles.mainContent}>
        <Typography
          variant="body4"
          align="center"
          color="var(--main-color)"
          weight="600"
          className={styles.subTitle}
        >
          Long Headline Sample
        </Typography>
        <Typography
          variant="mainTitle"
          align="center"
          color="var(--black-color)"
          weight="700"
          className={styles.title}
        >
          Headline of Modern
          <br /> & Digital Platform
        </Typography>
        <Typography
          variant="body3"
          align="center"
          color="var(--gray-color)"
          weight="500"
          className={styles.text}
        >
          Nowadays, it isn’t uncommon to see lenders
          <br /> rapidly adopting a digital lending strategy
        </Typography>
        <Typography
          component="a"
          variant="body2"
          align="center"
          color="var(--main-color)"
          weight="500"
          href="https://en.wikipedia.org/wiki/Tom_and_Jerry"
          className={styles.link}
        >
          Learn More
          <Icon width={22} component={ArrowRight} className={styles.linkIcon} />
        </Typography>
      </div>
      <img
        src={MainImage}
        className={styles.mainImage}
        alt="картинка красивая"
      />
    </div>
  );
};
