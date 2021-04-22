import React from 'react';
import { View } from 'react-native';

import Image from '../../../assets/img1.png';

import {
  VisitedContainer,
  Title,
  Img,
  Scroll,
  VisitedInfo,
  VisitedQtd,
  Vistitedlabel,
} from './styles';

const Visited: React.FC = () => {
  return (
    <VisitedContainer>
      <Title>E aí, já encontrou uma atividade para amar?</Title>
      <View style={{ flexDirection: 'row' }}>
        <Img source={Image} />
        <Scroll>
          <VisitedInfo>
            <VisitedQtd>200</VisitedQtd>
            <Vistitedlabel>check-ins</Vistitedlabel>
          </VisitedInfo>

          <VisitedInfo>
            <VisitedQtd>60</VisitedQtd>
            <Vistitedlabel>check-ins seguidos</Vistitedlabel>
          </VisitedInfo>

          <VisitedInfo>
            <VisitedQtd>01</VisitedQtd>
            <Vistitedlabel>academias</Vistitedlabel>
          </VisitedInfo>

          <VisitedInfo>
            <VisitedQtd>01</VisitedQtd>
            <Vistitedlabel>bairros</Vistitedlabel>
          </VisitedInfo>

          <VisitedInfo>
            <VisitedQtd>01</VisitedQtd>
            <Vistitedlabel>cidades</Vistitedlabel>
          </VisitedInfo>
        </Scroll>
      </View>
    </VisitedContainer>
  );
};

export default Visited;
