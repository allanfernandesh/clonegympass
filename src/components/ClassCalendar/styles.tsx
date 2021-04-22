import styled from 'styled-components/native';


export const Text = styled.Text`
  margin: 32px 0 32px 16px;
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

export const CalendarContainer = styled.View`
  background: #fff;
  padding: 24px 0px;
 

`;


export const CalendarTitle = styled.Text`
  margin-left: 16px;
`;

export const Scroll = styled.ScrollView.attrs(()=>({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  }
}))`
  margin: 32px 0;
`;

export const DayContainer = styled.TouchableOpacity`
  margin-right: 8px;
  align-items: center;
  background: #fff;
  elevation: 5;
  padding: 16px 16px;
  border-radius: 15px;
`;

export const DayWeek = styled.Text`
  font-size: 16px;
  color: #ccc;
  text-transform: uppercase;
`;


export const Day = styled.Text`
  margin: 8px 0 2px;
  font-weight: bold;
  font-size: 20px;
`;


export const Mouth = styled.Text`
  font-size: 16px;
`;

export const AppsContainer = styled.View`
  background: #FDE5E1;
  padding: 24px 0px;
`;


export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 16px;
`;


export const TitleBold = styled.Text`
  color: #EA634E;
  font-weight: bold;
  font-size: 24px;
  margin-left: 16px;
`;

export const AppsTitle = styled(TitleBold)`
  color: #EA634E;
  font-style: italic;
  font-size: 24px;
  font-weight: 500;
  margin-left: 0px;
`;



export const SubTitle = styled.Text`
  color: #aa9a9c;
  width: 60%;
  margin: 16px 0;
  margin-left: 16px;

`;

export const ScrollApp = styled.ScrollView.attrs(()=>({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 16,
  }
}))`
`;

export const App = styled.View`
  flex-direction: row;
  background: #fff;
  border-radius: 15px;
  padding: 16px;
  margin-right: 16px;
`;

export const AppDescription = styled.View`
   padding: 8px;
`;

export const Img = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;


export const AppTitle = styled.Text`
  font-weight: bold;
  margin-bottom: 4px;
`;


export const AppSubtitle = styled.Text`
  color: #888;
`;


