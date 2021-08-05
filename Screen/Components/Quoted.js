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
import {QUOTATION_RECEIVED} from '../utils/quotationinquiry';
const Item = ({detail}) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, height: 200};
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Text style={{fontWeight: 'bold', textAlign: 'left', fontSize: 18}}>
            Target Rate
          </Text>
          <TextInput
            style={styles.inputStyle}
            underlineColorAndroid="#f000"
            placeholder="(₹) Target Rate"
            placeholderTextColor="#7d7d7d"
            keyboardType="numeric"
            returnKeyType="next"
            blurOnSubmit={false}
          />
          <View
            style={{
              padding: 10,
              margin: 4,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button
              mode="outlined"
              style={styles.buttonStyle}
              color="#fff"
              onPress={hideModal}>
              Submit
            </Button>
            <Button
              mode="outlined"
              style={[styles.buttonStyle, {backgroundColor: '#df2424'}]}
              color="#fff"
              onPress={hideModal}>
              Reject
            </Button>
          </View>
        </Modal>
      </Portal>

      <Card style={styles.item}>
        <Card.Content>
          <Title adjustsFontSizeToFit>RFQ ID: {detail.rfq_id}</Title>
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
          <Text>Date: {detail.Date}</Text>
          <View
            style={{
              backgroundColor: '#c7a500',
              justifyContent: 'center',
              height: 30,
            }}>
            <Text style={{color: '#fff', textAlign: 'center'}}>
              Quotation Received &#x20B9;: {detail.quotation}
            </Text>
          </View>
        </Card.Content>
        <Card.Actions
          style={{
            justifyContent: 'flex-end',
            borderTopColor: '#d8d8d9',
            borderTopWidth: 1,
            marginTop: 4,
          }}>
          <Button color="#FF0000" onPress={showModal}>
            Reject
          </Button>
          <Button>Book Now</Button>
        </Card.Actions>
      </Card>
    </Provider>
  );
};

const Quoted = () => {
  const renderItem = ({item}) => <Item detail={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={QUOTATION_RECEIVED}
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
export default Quoted;
