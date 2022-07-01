import React from 'react';
import { Img } from '../../atoms';
import {
  Container,
  IconContainer,
  imgStyle,
  InfoContainer,
  TitleContainer,
} from './styles';

type MainPageMain_GridItemProps = {
  icon?: string;
  title: string;
  info: string;
};

function MainPageMain_GridItem({
  icon,
  title,
  info,
}: MainPageMain_GridItemProps) {
  return (
    <Container>
      <IconContainer>
        <Img src={icon} Style={imgStyle} />
      </IconContainer>
      <TitleContainer>{title}</TitleContainer>
      <InfoContainer>{info}</InfoContainer>
    </Container>
  );
}

MainPageMain_GridItem.defaultProps = {
  name: 'temp',
};

export default MainPageMain_GridItem;
