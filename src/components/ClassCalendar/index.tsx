import React from 'react';
import { addDays } from 'date-fns';
import { Ionicons } from '@expo/vector-icons';

import logo from '../../../assets/logoApp.png';
import {
  Text,
  CalendarContainer,
  CalendarTitle,
  Scroll,
  DayContainer,
  DayWeek,
  Day,
  Mouth,
  AppsContainer,
  TitleContainer,
  AppsTitle,
  TitleBold,
  SubTitle,
  ScrollApp,
  App,
  Img,
  AppDescription,
  AppTitle,
  AppSubtitle,
} from './styles';

const Index: React.FC = () => {
  const dayArray = new Array(
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  );
  const monthArray = new Array(
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  );

  return (
    <>
      <Text>CALENDÁRIO DE AULAS</Text>

      <CalendarContainer>
        <CalendarTitle>
          Selecione uma data para ver aulas disponíveis ou agendadas
        </CalendarTitle>
        <Scroll>
          {new Array(14).fill(new Date()).map((item: Date, index) => (
            <DayContainer key={index}>
              <DayWeek>
                {dayArray[addDays(item, index).getDay()].substring(0, 3)}
              </DayWeek>
              <Day>{addDays(item, index).getDate()}</Day>
              <Mouth>
                {monthArray[addDays(item, index).getMonth()].substring(0, 3)}
              </Mouth>
            </DayContainer>
          ))}
        </Scroll>
        <AppsContainer>
          <TitleContainer>
            <TitleBold>Gympass</TitleBold>
            <AppsTitle>Wellness</AppsTitle>
            <Ionicons
              name="share-outline"
              size={24}
              color="#EA634E"
              style={{ flex: 1, textAlign: 'right' }}
            />
          </TitleContainer>
          <SubTitle>
            Apoveite todos os aplicativos no seu plano para ter uma experiência
            de bem-estar 360º.
          </SubTitle>

          <ScrollApp>
            <App key={Math.random()}>
              <Img source={logo} />
              <AppDescription>
                <AppTitle>Lifesum</AppTitle>
                <AppSubtitle>Seja mais feliz e saudável come...</AppSubtitle>
              </AppDescription>
            </App>
            <App key={Math.random()}>
              <Img source={logo} />
              <AppDescription>
                <AppTitle>Lifesum</AppTitle>
                <AppSubtitle>Seja mais feliz e saudável come...</AppSubtitle>
              </AppDescription>
            </App>
            <App key={Math.random()}>
              <Img source={logo} />
              <AppDescription>
                <AppTitle>Lifesum</AppTitle>
                <AppSubtitle>Seja mais feliz e saudável come...</AppSubtitle>
              </AppDescription>
            </App>
            <App key={Math.random()}>
              <Img source={logo} />
              <AppDescription>
                <AppTitle>Lifesum</AppTitle>
                <AppSubtitle>Seja mais feliz e saudável come...</AppSubtitle>
              </AppDescription>
            </App>
            <App key={Math.random()}>
              <Img source={logo} />
              <AppDescription>
                <AppTitle>Lifesum</AppTitle>
                <AppSubtitle>Seja mais feliz e saudável come...</AppSubtitle>
              </AppDescription>
            </App>
            <App key={Math.random()}>
              <Img source={logo} />
              <AppDescription>
                <AppTitle>Lifesum</AppTitle>
                <AppSubtitle>Seja mais feliz e saudável come...</AppSubtitle>
              </AppDescription>
            </App>
          </ScrollApp>
        </AppsContainer>
      </CalendarContainer>
    </>
  );
};

export default Index;
