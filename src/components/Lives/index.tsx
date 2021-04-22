import React from 'react';
import imgDance from './../../../assets/dance.jpg';
import { AntDesign } from '@expo/vector-icons';
import {
  Container,
  Scroll,
  Title,
  LivesContainer,
  TitleClassontainer,
  TitleLives,
  Lives,
  Photo,
  Live,
  LiveName,
  LiveTitleWrapper,
  LiveTitle,
  LiveDate,
  Button,
  ButtonLabel,
} from './styles';

const Index: React.FC = () => {
  return (
    <>
      <Title>Próximas Lives</Title>
      <Container>
        <Scroll>
          <LivesContainer>
            <TitleClassontainer>
              <AntDesign size={18} name="user" color="#C6C4F2" />
              <TitleLives>Aulas individuais</TitleLives>
            </TitleClassontainer>

            <Lives>
              <Photo source={imgDance} resizeMode="cover"></Photo>
              <Live>
                <LiveName>Joana da Silva</LiveName>
                <LiveTitleWrapper>
                  <AntDesign size={18} name="youtube" color="#666" />
                  <LiveTitle>Ritmos online</LiveTitle>
                </LiveTitleWrapper>
                <LiveDate>Abr 15 . 7h00 . 30 min</LiveDate>
              </Live>
            </Lives>
            <Lives>
              <Photo source={imgDance} resizeMode="cover"></Photo>
              <Live>
                <LiveName>Joana da Silva</LiveName>
                <LiveTitleWrapper>
                  <AntDesign size={18} name="youtube" color="#666" />
                  <LiveTitle>Ritmos online</LiveTitle>
                </LiveTitleWrapper>
                <LiveDate>Abr 15 . 7h00 . 30 min</LiveDate>
              </Live>
            </Lives>
            <Lives>
              <Photo source={imgDance} resizeMode="cover"></Photo>
              <Live>
                <LiveName>Joana da Silva</LiveName>
                <LiveTitleWrapper>
                  <AntDesign size={18} name="youtube" color="#666" />
                  <LiveTitle>Ritmos online</LiveTitle>
                </LiveTitleWrapper>
                <LiveDate>Abr 15 . 7h00 . 30 min</LiveDate>
              </Live>
            </Lives>
          </LivesContainer>

          <LivesContainer>
            <TitleClassontainer>
              <AntDesign size={18} name="user" color="#C6C4F2" />
              <TitleLives>Aulas em grupo</TitleLives>
            </TitleClassontainer>
            <Lives>
              <Photo source={imgDance} resizeMode="cover"></Photo>
              <Live>
                <LiveName>Joana da Silva</LiveName>
                <LiveTitleWrapper>
                  <AntDesign size={18} name="youtube" color="#C6C4F2" />
                  <LiveTitle>Ritmos online</LiveTitle>
                </LiveTitleWrapper>
                <LiveDate>Abr 15 . 7h00 . 30 min</LiveDate>
              </Live>
            </Lives>
            <Lives>
              <Photo source={imgDance} resizeMode="cover"></Photo>
              <Live>
                <LiveName>Joana da Silva</LiveName>
                <LiveTitleWrapper>
                  <AntDesign size={18} name="youtube" color="#C6C4F2" />
                  <LiveTitle>Ritmos online</LiveTitle>
                </LiveTitleWrapper>
                <LiveDate>Abr 15 . 7h00 . 30 min</LiveDate>
              </Live>
            </Lives>
            <Lives>
              <Photo source={imgDance} resizeMode="cover"></Photo>
              <Live>
                <LiveName>Joana da Silva</LiveName>
                <LiveTitleWrapper>
                  <AntDesign size={18} name="youtube" color="#C6C4F2" />
                  <LiveTitle>Ritmos online</LiveTitle>
                </LiveTitleWrapper>
                <LiveDate>Abr 15 . 7h00 . 30 min</LiveDate>
              </Live>
            </Lives>
          </LivesContainer>
        </Scroll>
        <Button>
          <ButtonLabel>Buscar mais lives</ButtonLabel>
        </Button>
      </Container>
    </>
  );
};

export default Index;
