import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


export const Container = styled.View`
    background: #fff;
    align-items: center;
    padding: 32px 16px;
`;


export const Scroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 10,
    alingItems: 'center',
    justifyContent: 'space-between'
  }
}))`
  width: 100%;
  `;

export const LivesContainer = styled.View`
  width: ${Dimensions.get('screen').width.toFixed(0) - 20}px;
`;


export const Title = styled.Text`
  margin: 32px 0 32px 16px;
`;


export const TitleClassontainer = styled.View`
  flex-direction: row;
`;

export const TitleLives = styled.Text`
  margin-left: 8px;
  font-weight: bold;
`;

export const Lives = styled.View`
  flex-direction: row;
  padding: 16px 0;
  border-bottom-width: 1px;
  border-color: #eee;
  border-style: solid;
  margin-bottom: 16px;
  width: ${Dimensions.get('screen').width.toFixed(0) - 70}px;
`;

export const Photo = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 16px;
`;


export const Live = styled.View`

`;


export const LiveTitleWrapper = styled.View`
  flex-direction: row;
`;

export const LiveName = styled.Text`
  margin-bottom: 8px;
  font-size: 16px;
`;


export const LiveTitle = styled(LiveName)`
  margin-left: 8px;
  color: #555;
  font-size: 14px;
`;


export const LiveDate = styled(LiveName)`
  font-size: 14px;
`;

export const Button = styled.TouchableWithoutFeedback`
`;

export const ButtonLabel = styled.Text`
  color: #5A4292;
`;




