import React from 'react';

import {
  ScrollView,
  BannerContainer,
  BannerImg,
  BannerTitle,
  BannerSubTitle,
  BannerInvite,
} from './styles';

import banner1 from '../../../assets/banner1.png';
import banner2 from '../../../assets/banner2.png';
import banner3 from '../../../assets/banner3.png';
import banner4 from '../../../assets/banner4.png';

const Banner: React.FC = () => {
  return (
    <>
      <ScrollView>
        <BannerContainer>
          <BannerImg source={banner1} resizeMode="cover">
            <BannerTitle>Aulas com personal</BannerTitle>
            <BannerSubTitle>
              Foco total para você atingir seus objetivos.
            </BannerSubTitle>
            <BannerInvite style={{ color: '#519e90' }}>Começar</BannerInvite>
          </BannerImg>
        </BannerContainer>

        <BannerContainer>
          <BannerImg source={banner2} resizeMode="cover">
            <BannerTitle>Apps sem custo extra</BannerTitle>
            <BannerSubTitle>
              Acessi limitado aos melhores apps de bem-estar e nutrição.
            </BannerSubTitle>
            <BannerInvite style={{ color: '#d47477' }}>Descubra</BannerInvite>
          </BannerImg>
        </BannerContainer>

        <BannerContainer>
          <BannerImg source={banner3} resizeMode="cover">
            <BannerTitle>Dependentes</BannerTitle>
            <BannerSubTitle>
              Aproveite o Gympass com seus familiares :)
            </BannerSubTitle>
            <BannerInvite style={{ color: '#7856b1' }}>
              Ver dependentes
            </BannerInvite>
          </BannerImg>
        </BannerContainer>

        <BannerContainer>
          <BannerImg source={banner4} resizeMode="cover">
            <BannerTitle>Aulas interativas em grupo</BannerTitle>
            <BannerSubTitle>
              Participe de uma aula em grupo e mantenha seu corpo ativo em casa
            </BannerSubTitle>
            <BannerInvite style={{ color: '#8899e2' }}>
              Ver horários
            </BannerInvite>
          </BannerImg>
        </BannerContainer>
      </ScrollView>
    </>
  );
};

export default Banner;
