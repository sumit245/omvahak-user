import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import IconButton from 'react-native-vector-icons/Ionicons';

import Loader from './Components/Loader';

const RegisterScreen = props => {
  const [compName, setCompName] = useState('');
  const [contact, setContact] = useState(Array);
  const [compEmail, setCompEmail] = useState('');
  const [compGST, setcompGST] = useState('');
  const [gstimg, setgstImg] = useState('');
  const [compTIN, setcompTIN] = useState('');
  const [tinImg, settinImg] = useState('');
  const [compAddress, setCompAddress] = useState('');
  const [states, setstates] = useState('');
  const [compPIN, setCompPIN] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const emailInputRef = createRef();
  const contactInputRef = createRef();
  const gstRef = createRef();
  const tinRef = createRef();
  const stateInputRef = createRef();
  const addressInputRef = createRef();
  const postalRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!compName) {
      alert('Please fill Company Name');
      return;
    }
    if (!compEmail) {
      alert('Please fill Email');
      return;
    }
    if (!contact) {
      alert('Please fill Contact number');
      return;
    }
    if (!compGST) {
      alert('Please fill Address');
      return;
    }
    //Show Loader
    // setLoading(true);
    var dataToSend = {
      company_name: compName,
      company_email: compEmail,
      contact: contact,
      company_gst: compGST,
      gst_img: gstimg,
      company_tin: compTIN,
      tin_img: tinImg,
      company_address: compAddress,
      state: states,
      postal_code: compPIN,
      password: password,
    };
    console.log(dataToSend);
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + ':' + encodedValue);
    }
    formBody = formBody.join('&');
    console.log(formBody);
    fetch('https://omvahak-temp.herokuapp.com/api/users', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log('Registration Successful. Please Login to proceed');
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Image/success.png')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Text style={styles.successTextStyle}>Registration Successful</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#307ecc'}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Image/aboutreact.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 10,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={data => setCompName(data)}
              underlineColorAndroid="#f000"
              placeholder="Company Name"
              placeholderTextColor="#fff"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                contactInputRef.current && contactInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={mobNo => setContact(mobNo)}
              underlineColorAndroid="#f000"
              placeholder="Mobile Number"
              placeholderTextColor="#fff"
              keyboardType="numeric"
              ref={contactInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
            <IconButton
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 3,
                width: 30,
                height: 30,
                alignSelf: 'center',
                textAlign: 'center',
              }}
              name="add"
              size={24}
              color="#FFF"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setCompEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Email ID"
              placeholderTextColor="#fff"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() => gstRef.current && gstRef.current.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={gst => setcompGST(gst)}
              underlineColorAndroid="#f000"
              placeholder="GST"
              placeholderTextColor="#fff"
              autoCapitalize="sentences"
              ref={gstRef}
              returnKeyType="next"
              onSubmitEditing={() => tinRef.current && tinRef.current.focus()}
              blurOnSubmit={false}
            />
            <IconButton
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 3,
                width: 30,
                height: 30,
                alignSelf: 'center',
                textAlign: 'center',
              }}
              name="image-outline"
              size={24}
              color="#FFF"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={data => setcompTIN(data)}
              underlineColorAndroid="#f000"
              placeholder="TIN"
              placeholderTextColor="#fff"
              autoCapitalize="sentences"
              ref={tinRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                addressInputRef.current && addressInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
            <IconButton
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 3,
                width: 30,
                height: 30,
                alignSelf: 'center',
                textAlign: 'center',
              }}
              name="image-outline"
              size={24}
              color="#FFF"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={data => setCompAddress(data)}
              underlineColorAndroid="#f000"
              placeholder="Address"
              placeholderTextColor="#fff"
              autoCapitalize="sentences"
              ref={addressInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                stateInputRef.current && stateInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={data => setstates(data)}
              underlineColorAndroid="#f000"
              placeholder="State"
              placeholderTextColor="#fff"
              autoCapitalize="sentences"
              ref={stateInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                postalRef.current && postalRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={data => setCompPIN(data)}
              underlineColorAndroid="#f000"
              placeholder="Postal Code"
              placeholderTextColor="#fff"
              autoCapitalize="sentences"
              ref={postalRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={data => setPassword(data)}
              underlineColorAndroid="#f000"
              placeholder="Password"
              placeholderTextColor="#fff"
              autoCapitalize="sentences"
              ref={passwordInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>

          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Checkbox
              uncheckedColor="#FFFFFF"
              color="#7DE24E"
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
              Agree to our terms and conditions
            </Text>
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 2,
    marginHorizontal: 16,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
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
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
