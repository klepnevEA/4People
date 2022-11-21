import { Button } from "common/components/ui/button";
import { Container } from "common/components/ui/container";
import { Grid } from "common/components/ui/grid";
import { Typography } from "common/components/ui/typography";

export const Ui = () => {
  return (
    <Container>
      <Grid container spacing={1} alignItems="center">
        <Grid item xl={1}>
          <Typography variant="body2" color="var(--black-color)" weight="600">
            Кнопки
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center">
        <Grid item xl={1}>
          <Button>More Features</Button>
        </Grid>
        <Grid item xl={1}>
          <Button disabled>More Features</Button>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center">
        <Grid item xl={1}>
          <Button variant="outlined">More Features</Button>
        </Grid>
        <Grid item xl={1}>
          <Button variant="outlined" disabled>
            More Features
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="center">
        <Grid item xl={1}>
          <Button variant="transparent">More Features</Button>
        </Grid>
        <Grid item xl={1}>
          <Button variant="transparent" disabled>
            More Features
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={1} alignItems="center">
        <Grid item xl={1}>
          <Button variant="secondary">More Features</Button>
        </Grid>
        <Grid item xl={1}>
          <Button variant="secondary" disabled>
            More Features
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
