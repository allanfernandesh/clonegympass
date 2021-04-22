import styled from 'styled-components/native';


export const Wrapper = styled.SafeAreaView`
  background: #F6F5FA;
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
`;


export const UserInfoContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 32px 16px;
  height: 100px;
  background: #fff;
  elevation: 8;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

`;

export const Info = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const User = styled.Text`
  font-weight:bold;
  font-size: 18px;
`;


export const Plan = styled.Text`
  font-size: 12px;
  color: #939393;
`;


export const Id = styled(Plan)``;

