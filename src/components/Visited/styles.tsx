import styled from 'styled-components/native';


export const VisitedContainer = styled.View`
  background: #fff;
`;

export const Title = styled.Text`
  font-weight: bold;
  padding: 8px 20px;
  margin-bottom: 35px;
`;

export const Img = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 32px;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))``;

export const VisitedInfo = styled.View`
  padding: 16px 22px;

`;

export const VisitedQtd = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #6437D3;
`;

export const Vistitedlabel = styled.Text`
  color: #888;
  font-weight: bold;
  font-size: 12px;
`;