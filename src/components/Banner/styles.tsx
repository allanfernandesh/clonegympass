import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


export const ScrollView = styled.ScrollView.attrs(() => ({
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
}))`
  height: 190px;
`;

export const BannerContainer = styled.View`
  background: red;
  width: ${Dimensions.get('screen').width.toFixed(0)}px;
`;

export const BannerImg = styled.ImageBackground`
  height: 100%;
  justify-content: center;
  padding: 0 24px;
`;

export const BannerTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
 
`;

export const BannerSubTitle = styled.Text`
  margin: 16px 0;
  width: 65%;
`;

export const BannerInvite = styled.Text`
  font-weight: bold;
`;