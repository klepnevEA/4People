import { Cta } from "sections/cta";
import { Feature } from "sections/feature";
import { Footer } from "sections/footer";
import { Header } from "sections/header";
import { MainSlide } from "sections/main-slide";
import { Pricing } from "sections/pricing";
import { SingUpForm } from "sections/sing-up-form";
import { Testimonials } from "sections/testimonials";
import styles from "./styles.module.scss";

const verticalSlider = [
  {
    id: 1,
    title: "First Feature",
    text: "Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons",
    link: "https://ya.ru/",
  },
  {
    id: 2,
    title: "Second Feature",
    text: "Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons",
    link: "https://ya.ru/",
  },
  {
    id: 3,
    title: "Third Feature",
    text: "Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons",
    link: "https://ya.ru/",
  },
  {
    id: 4,
    title: "Fourth Feature",
    text: "Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons",
    link: "https://ya.ru/",
  },
];

const horisontalSlider = [
  {
    id: 1,
    text: '"Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process"',
    name: "Alexander F",
    position: "IT Admin at Digital Group",
  },
  {
    id: 2,
    text: '"Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process"',
    name: "Robert B",
    position: "UX Designer at Digital Group",
  },
  {
    id: 3,
    text: '"Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process"',
    name: "Vadim Z",
    position: "Executive at Digital Group",
  },
  {
    id: 4,
    text: '"Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process"',
    name: "Alexander F",
    position: "IT Admin at Digital Group",
  },
];

export const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <MainSlide />
        <Feature dataSlider={verticalSlider} />
        <SingUpForm />
        <Pricing />
        <Cta />
        <Testimonials dataSlider={horisontalSlider} />
      </div>
      <Footer />
    </div>
  );
};
