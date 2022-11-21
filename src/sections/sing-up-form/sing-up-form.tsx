import { Button } from "common/components/ui/button";
import { Container } from "common/components/ui/container";
import { Grid } from "common/components/ui/grid";
import { Icon } from "common/components/ui/icon";
import { Input } from "common/components/ui/input";
import { Typography } from "common/components/ui/typography";
import { InputController } from "common/helpers/input-controller";
import { EyeOff, Mail, User } from "common/icons";
import { useForm } from "react-hook-form";
import BeautifulButton from "common/images/beautiful-button.png";
import styles from "./styles.module.scss";

export const SingUpForm = () => {
  const {
    register,
    control,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => console.log(data);
  return (
    <div className={styles.singUpForm}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography
              variant="titleSmall"
              color="var(--black-color)"
              weight="600"
              className={styles.title}
            >
              Sign Up to Learn More
              <br /> About Design Struct
            </Typography>
            <Typography
              variant="body1"
              color="var(--gray-color)"
              weight="400"
              className={styles.text}
            >
              Nowadays, it isn’t uncommon to see lenders rapidly
              <br /> adopting a digital lending strategy to the process
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <InputController
                {...{
                  control,
                  register,
                  name: "name",
                  rules: {
                    required: true,
                  },
                  render: (props: any) => (
                    <Input
                      label="Username:"
                      className={styles.input}
                      icon={<Icon width={22} component={User} />}
                      {...props}
                    />
                  ),
                }}
              />
              <InputController
                {...{
                  control,
                  register,
                  name: "email",
                  rules: {
                    required: true,
                  },
                  render: (props: any) => (
                    <Input
                      label="email:"
                      className={styles.input}
                      icon={<Icon width={22} component={Mail} />}
                      {...props}
                    />
                  ),
                }}
              />
              <InputController
                {...{
                  control,
                  register,
                  name: "password",
                  rules: {
                    required: true,
                  },
                  render: (props: any) => (
                    <Input
                      label="Password:"
                      className={styles.inputBigMargin}
                      icon={<Icon width={22} component={EyeOff} />}
                      {...props}
                    />
                  ),
                }}
              />
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Button
                    type={"submit"}
                    size="big"
                    wide
                    disabled={!isDirty || !isValid}
                  >
                    Sign Up
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant="body1"
                    color="var(--gray-color)"
                    weight="400"
                  >
                    By signing up you agree with our{" "}
                    <a href="https://www.figma.com/exit?url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTom_and_Jerry">
                      Terms
                      <br /> of Conditions
                    </a>{" "}
                    and Privacy Policy rules
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
      <picture className={styles.beautifulButton}>
        <source media="(max-width: 799px)" srcSet={BeautifulButton} />
        <img src={BeautifulButton} alt="красивая кнопочка" />
      </picture>
    </div>
  );
};
