import React from 'react';
import styled from '@emotion/styled';

import { ContentSection } from './';
import { colors } from '../../../styles';

const CharacterDetail = ({ character }) => {
  const { gender, image, name, species, status } = character;

  return (
    <ContentSection>
      <CoverImage src={image} alt="" />
      <CharacterDetails>
        <DetailRow>
          <h1>{name}</h1>
        </DetailRow>
        <DetailRow>
          <DetailItem>
            <h5>{species}</h5>
            <h5>{gender}</h5>
            <h5>{status}</h5>
          </DetailItem>
        </DetailRow>
      </CharacterDetails>
    </ContentSection>
  );
};

export default CharacterDetail;

const CoverImage = styled.img({
  objectFit: 'cover',
  maxHeight: 400,
  borderRadius: 4,
  marginBottom: 30,
});

const CharacterDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: `solid 1px ${colors.text}`,
  backgroundColor: colors.background,

  h1: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 5,
    fontSize: '1.5em',
    textTransform: 'capitalize',
  },
  h5: {
    fontSize: '1.2em',
    marginBottom: 5,
    color: colors.text,
    textTransform: 'capitalize',
  },
});

const DetailRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: `solid 1px ${colors.text}`,
});

const DetailItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: colors.text,
  alignSelf: 'center',
});
