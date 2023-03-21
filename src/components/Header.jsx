import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { colors, widths } from '../styles';

const Header = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink to="/">
            <HomeButton>
              <Title>
                <h3>Rick&Morty</h3>
              </Title>
            </HomeButton>
          </HomeLink>
        </HomeButtonContainer>
        {children}
      </Container>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `solid 1px #020202`,
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '5px 30px',
  minHeight: 80,
  backgroundColor: 'white',
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
});

const HomeLink = styled(Link)({
  textDecoration: 'none',
});

const HomeButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
});

const HomeButton = styled.div({
  color: colors.text,
  alignItems: 'center',
});

const Title = styled.div({
  h3: {
    lineHeight: '1em',
    marginBottom: 0,
  },
});
