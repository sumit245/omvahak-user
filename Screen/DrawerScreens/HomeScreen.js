// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const user = AsyncStorage.getItem('user_id');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Load Inquiry',
    url: 'document-outline',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Request Quotation',
    url: 'trending-up-outline',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'My Orders',
    url: 'cart-outline',
  },
  {
    id: '58694a0f-33e1-471f-bd96-145571e29d72',
    title: 'Post Loads',
    url: 'subway-outline',
  },
];

const Item = item => {
  console.log(item);
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => item.navigation.navigate(item.title)}>
        <Icon
          name={item.url}
          size={40}
          style={{alignSelf: 'center', padding: 4}}
        />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item title={item.title} url={item.url} navigation={navigation} />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{justifyContent: 'flex-end', padding: 16}}>
        <Text>Welcome</Text>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    width: width / 2.3,
    height: 100,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#777',
    elevation: 2,
    shadowOpacity: 0.5,
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default HomeScreen;
