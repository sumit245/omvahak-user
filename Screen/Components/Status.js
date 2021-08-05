import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Button,
  Modal,
  Portal,
  Provider,
} from 'react-native-paper';
import {STATUS} from '../utils/quotationinquiry';
const Item = ({detail}) => {
  return (
    <Card style={styles.item}>
      <Text
        style={{
          color: detail.status === 'Accepted' ? 'green' : 'red',
          textAlign: 'right',
          fontSize: 16,
          fontWeight: 'bold',
          padding: 4,
        }}>
        {detail.status}
      </Text>
      <Card.Content>
        <Title adjustsFontSizeToFit>RFQ ID: {detail.rfq_id}</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 1,
          }}>
          <Text>Source: {detail.source}</Text>
          <Text>Destination: {detail.destination}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 1,
          }}>
          <Text adjustsFontSizeToFit>Lorry Type: {detail.lorry_type}</Text>
          <Text>Actual Weight: {detail.actual_weight}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 1,
          }}>
          <Text>Mode: {detail.mode}</Text>
          <Text>Distance: {detail.distance}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 1,
          }}>
          <></>
          <Text>Quotation:{detail.quotation}</Text>
          <Text>Target Rate: {detail.target_rate}</Text>
        </View>
        <Text style={{color: '#000', textAlign: 'justify'}}>
          Date: {detail.Date}
        </Text>
      </Card.Content>
      <Card.Actions style={{justifyContent:'flex-end',borderTopColor:'#d8d8d9',borderTopWidth:1,marginTop:4}}>
          <Button color="#FF0000">
              Cancel Order
          </Button>
          <Button>
              Book a Vehicle
          </Button>
      </Card.Actions>
    </Card>
  );
};

const Status = () => {
  const renderItem = ({item}) => <Item detail={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={STATUS}
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
export default Status;
