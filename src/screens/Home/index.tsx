import React from 'react';
import Banner from '../../components/Banner';
import Visited from '../../components/Visited';
import Lives from '../../components/Lives';
import ClassCalendar from '../../components/ClassCalendar';
import { FontAwesome } from '@expo/vector-icons';
import {
  Wrapper,
  Scroll,
  UserInfoContainer,
  Info,
  User,
  Plan,
  Id,
} from './styles';

const Index: React.FC = () => {
  return (
    <Wrapper>
      <UserInfoContainer>
        <FontAwesome name="user-circle" size={45} color="#888" />
        <Info>
          <User>Alan</User>
          <Plan>Basic I</Plan>
          <Id>Gympass ID: 12321212145</Id>
        </Info>
        <FontAwesome name="angle-down" size={30} color="#000" />
      </UserInfoContainer>
      <Scroll>
        <Banner />
        <Visited />
        <Lives />
        <ClassCalendar />
      </Scroll>
    </Wrapper>
  );
};

export default Index;
