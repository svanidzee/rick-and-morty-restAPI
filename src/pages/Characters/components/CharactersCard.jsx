import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { colors, mq } from '../../../styles';

const CharacterCard = ({ character }) => {
  const { id, image, name } = character;

  return (
    <CardContainer to={`/character/${id}`}>
      <CardContent>
        <CardImageContainer>
          <CardImage src={image} alt={name} />
        </CardImageContainer>
        <CardBody>
          <CardTitle>{name || ''}</CardTitle>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default CharacterCard;

const CardContainer = styled(Link)({
  textDecoration: 'none',
  borderRadius: 6,
  backgroundSize: 'cover',
  backgroundColor: 'white',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [mq[0]]: {
    width: '90%',
  },
  [mq[1]]: {
    width: '47%',
  },
  [mq[2]]: {
    width: '31%',
  },
  height: 300,
  margin: 10,
  overflow: 'hidden',
  position: 'relative',
  ':hover': {
    transition: 'opacity .3s ease-in',
    opacity: '0.9',
  },
  cursor: 'pointer',
});

const CardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100%',
});

const CardTitle = styled.h3({
  textAlign: 'center',
  fontSize: '1.4em',
  lineHeight: '1em',
  fontWeight: 700,
  color: colors.text,
  flex: 1,
});

const CardImageContainer = styled.div({
  height: 220,
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const CardImage = styled.img({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  filter: 'grayscale(20%)',
});

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: 'flex',
  color: 'violet',
  flexDirection: 'column',
  justifyContent: 'space-around',
});
