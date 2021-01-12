import React from "react";
import { styled, AppBar, Grid, Box, Link } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

const AppBarBody = styled(Grid)({
  maxHeight: 70,
  maxWidth: '1400px',
  margin: 'auto',
  paddingTop: '20px',
  paddingBottom: '20px'
});

const Logo = styled("img")(({ theme }) => ({
  width: 'auto',
  height: '20vw',
  maxHeight: '32px',
  marginLeft: '2vw',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    maxHeight: '25px'
  },
}));

const LinksContainer = styled(Grid)({
  marginRight: '2vw'
});

const LinkButton = styled(Link)(({ theme }) => ({
  fontSize: '14px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px'
  },
}));

const LinkDivider = styled(Grid)({
  borderLeft: 'solid 1px white',
  width: '1px',
  marginRight: '10px',
  marginLeft: '10px'
});

export const NavBar: React.FC = () => {
  const history = useHistory();
  const onLogoClick = () => history.push('/');

  return (
    <AppBar position="static">
      <AppBarBody container justify="space-between" alignItems='center'>
        <Grid item>
          <Box>
            <Logo src={process.env.PUBLIC_URL + "/logos/web3api.png"} alt="Web3 API Logo" onClick={onLogoClick} />
          </Box>
        </Grid>
        <Grid item>
          <LinksContainer container wrap='nowrap'>
            <Grid item>
              <LinkButton href="https://web3api.substack.com/" target="_blank" color={'textSecondary'} variant='body1'>
                Blog
              </LinkButton>
            </Grid>
            <LinkDivider item />
            <Grid item>
              <LinkButton href="https://github.com/web3-api/prototype" target="_blank" color={'textSecondary'} variant='body1'>
                Code
              </LinkButton>
            </Grid>
            <LinkDivider item />
            <Grid item>
              <LinkButton href="https://airtable.com/shrzxezSAlpoUUZNV" target="_blank" color={'textSecondary'} variant='body1'>
                Contact
              </LinkButton>
            </Grid>
            <LinkDivider item />
            <Grid item>
              <LinkButton href="https://github.com/Web3-API/dao/issues?q=is%3Aopen+is%3Aissue+label%3Arecruiting" target="_blank" color={'textSecondary'} variant='body1'>
                Build
              </LinkButton>
            </Grid>
          </LinksContainer>
        </Grid>
      </AppBarBody>
    </AppBar>
  );
};
