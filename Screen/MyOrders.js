import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Completed from './Components/Completed';
import InTransit from './Components/InTransit';
import POD from './Components/POD';
const renderScene = SceneMap({
  first: InTransit,
  second: Completed,
  third: POD,
});

export default function MyOrders() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'In Transit'},
    {key: 'second', title: 'Completed'},
    {key: 'third', title: 'POD'},
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
