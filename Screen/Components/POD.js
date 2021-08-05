import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {Button, Card, Title} from 'react-native-paper';
import {COMPLETED} from '../utils/myorders';
const Item = ({detail}) => {
  return (
    <Card style={styles.item}>
      <Card.Content>
        <Title adjustsFontSizeToFit style={{fontSize: 16}}>
          RFQ ID: {detail.rfq_id}
        </Title>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Source: {detail.source}</Text>
          <Text>Destination: {detail.destination}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text adjustsFontSizeToFit>Lorry Type: {detail.lorry_type}</Text>
          <Text>Actual Weight: {detail.actual_weight}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Mode: {detail.mode}</Text>
          <Text>Distance: {detail.distance}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Quotation: {detail.quotation}</Text>
          <Text>Target Rate: {detail.target_rate}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Vehicle No.: {detail.vehicle_no}</Text>
          <Text>Distance: {detail.distance}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <></>
          <Text>{detail.cn_NO}</Text>
          <Text>{detail.cn_weight}</Text>
          <Text>{detail.extra_expense}</Text>
        </View>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          Date: {detail.Date}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <></>
          <Text>Tracking: Delivered</Text>
          <Text>POD: Pending</Text>
        </View>
      </Card.Content>
      <Card.Actions
        style={{
          justifyContent: 'flex-end',
          borderTopColor: '#d8d8d9',
          borderTopWidth: 1,
          marginTop: 4,
        }}>
        <Button>Download</Button>
        <Button>Pay Now</Button>
      </Card.Actions>
    </Card>
  );
};

const POD = () => {
  const renderItem = ({item}) => <Item detail={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={COMPLETED}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderColor: '#444',
    borderRadius: 4,
    padding: 4,
    margin: 4,
  },
  title: {
    fontSize: 32,
  },
  buttonStyle: {
    backgroundColor: '#1Da24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 6,
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    color: '#000',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#dadae8',
  },
});
export default POD;
