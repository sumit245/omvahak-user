import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Inquiry from './Components/Inquiry';
import Quoted from './Components/Quoted';
import Status from './Components/Status';
const renderScene = SceneMap({
  first: Inquiry,
  second: Quoted,
  third: Status,
});

export default function LoadInquiry() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Quotation Inquiry'},
    {key: 'second', title: 'Quotation Recieved'},
    {key: 'third', title: 'Status'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}