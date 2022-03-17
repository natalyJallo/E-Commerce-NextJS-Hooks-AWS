import {Container, Grid, Image, Input} from "semantic-ui-react";
const TopBar = () => {
  return (
    <Container>
      <Grid className="top-bar">
        <Grid.Column width={8} className="top-bar__left">
          <h2>Logo</h2>
        </Grid.Column>
        <Grid.Column width={8} className="top-bar__right">
          <h2>menu</h2>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default TopBar;