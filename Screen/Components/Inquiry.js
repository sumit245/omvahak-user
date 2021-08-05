import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {QUOTATION_INQUIRY} from '../utils/quotationinquiry';
const Item = ({detail}) => (
  <Card style={styles.item}>
    <Card.Content>
      <Title adjustsFontSizeToFit >RFQ ID: {detail.rfq_id}</Title>
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
      <View style={{backgroundColor:"#ffd600",justifyContent:'center'}}>
        <Text style={{color:"#000",textAlign:"center"}} >Date: {detail.Date}</Text>
      </View>
    </Card.Content>
    <Card.Actions style={{justifyContent:'flex-end',borderTopColor:'#d8d8d9',borderTopWidth:1,marginTop:4}}>
      <Button color="#FF0000">Delete</Button>
      <Button>Edit</Button>
    </Card.Actions>
  </Card>
);

const Inquiry = () => {
  const renderItem = ({item}) => <Item detail={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={QUOTATION_INQUIRY}
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
});
export default Inquiry;
