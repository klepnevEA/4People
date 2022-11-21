import { Button } from "common/components/ui/button";
import { Container } from "common/components/ui/container";
import { Grid } from "common/components/ui/grid";
import { Input } from "common/components/ui/input";
import { Typography } from "common/components/ui/typography";
import { InputController } from "common/helpers/input-controller";
import { useForm } from "react-hook-form";
import Amazon from "common/images/logos/amazon.svg";
import Facebook from "common/images/logos/facebook.svg";
import Google from "common/images/logos/google.svg";
import Linkedin from "common/images/logos/linkedin.svg";
import Logitech from "common/images/logos/logitech.svg";
import Philips from "common/images/logos/philips.svg";

import styles from "./styles.module.scss";

export const Cta = () => {
  const {
    register,
    control,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={styles.cta}>
      <Container>
        <Grid
          container
          spacing={1}
          justify="center"
          alignContent="space-between"
        >
          <Grid item xs={8}>
            <div>
              <Typography
                variant="title"
                color="var(--black-color)"
                weight="600"
              >
                Modern & Digital Platform
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <Grid
                container
                spacing={1}
                alignContent="space-between"
                className={styles.content}
              >
                <Grid item xs={7}>
                  <InputController
                    {...{
                      control,
                      register,
                      name: "mail",
                      rules: {
                        required: true,
                      },
                      render: (props: any) => (
                        <Input
                          className={styles.input}
                          {...props}
                          placeholder="Type your email"
                        />
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Button
                    type={"submit"}
                    size="big"
                    wide
                    disabled={!isDirty || !isValid}
                  >
                    Confirm
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <div className={styles.ctaDivider}></div>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item>
            <img src={Amazon} alt="Amazon" className={styles.ctaLogo} />
          </Grid>
          <Grid item>
            <img src={Facebook} alt="Facebook" className={styles.ctaLogo} />
          </Grid>
          <Grid item>
            <img src={Google} alt="Google" className={styles.ctaLogo} />
          </Grid>
          <Grid item>
            <img src={Linkedin} alt="Linkedin" className={styles.ctaLogo} />
          </Grid>
          <Grid item>
            <img src={Logitech} alt="Logitech" className={styles.ctaLogo} />
          </Grid>
          <Grid item>
            <img src={Philips} alt="Philips" className={styles.ctaLogo} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
