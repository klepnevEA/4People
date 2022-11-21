import { Container } from "common/components/ui/container";
import { Grid } from "common/components/ui/grid";
import { Icon } from "common/components/ui/icon";
import Logo from "common/images/main-logo.svg";
import styles from "./styles.module.scss";
import { ArrowRight, Facebook } from "common/icons";
import { Twitter } from "common/icons";
import { Linkedin } from "common/icons";
import { Google } from "common/icons";
import { Button } from "common/components/ui/button";
import { Typography } from "common/components/ui/typography";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justify="space-between"
          className={styles.footerMenu}
        >
          <Grid item xl={2}>
            <img src={Logo} alt="logo" className={styles.logo} />
          </Grid>
          <Grid item xl={10}>
            <Grid container spacing={1} justify="center">
              <Grid item>
                <a href="https://ya.ru/">
                  <Icon width={24} component={Facebook} />
                </a>
              </Grid>
              <Grid item>
                <a href="https://ya.ru/">
                  <Icon width={24} component={Twitter} />
                </a>
              </Grid>
              <Grid item>
                <a href="https://ya.ru/">
                  <Icon width={24} component={Linkedin} />
                </a>
              </Grid>
              <Grid item>
                <a href="https://ya.ru/">
                  <Icon width={24} component={Google} />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={2}>
            <Button
              variant="secondary"
              wide
              icon={<Icon width={24} component={ArrowRight} />}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justify="center"
          className={styles.footerMenu}
        >
          <Grid item>
            <Typography
              component="a"
              href="https://ya.ru/"
              variant="body0"
              color="var(--gray-color)"
            >
              Privacy Policy
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="a"
              href="https://ya.ru/"
              variant="body0"
              color="var(--gray-color)"
            >
              Terms of Conditions
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="a"
              href="https://ya.ru/"
              variant="body0"
              color="var(--gray-color)"
            >
              Legal
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="a"
              href="https://ya.ru/"
              variant="body0"
              color="var(--gray-color)"
            >
              Help
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item>
            <Typography
              href="https://ya.ru/"
              variant="body0"
              color="var(--gray-color)"
            >
              © 2020 All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
