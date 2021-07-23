import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { lorryType } from './utils/lorryType';
import { materialType } from "./utils/materialType"

export default function RFQ() {
    const [errortext, setErrortext] = useState('');
    return (
        <View style={{ flex: 1, backgroundColor: '#307ecc' }}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <KeyboardAvoidingView enabled>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            underlineColorAndroid="#f000"
                            placeholder="Loading Address"
                            placeholderTextColor="#fff"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            underlineColorAndroid="#f000"
                            placeholder="Unloading Address"
                            placeholderTextColor="#fff"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <Picker
                            selectedValue="material"
                            style={styles.inputStyle}>
                            {
                                materialType.map((data, key) => {
                                    return (
                                        <Picker.Item label={data.value} value={data.value} key={key} />
                                    )

                                })
                            }
                        </Picker>
                    </View>
                    <View style={styles.SectionStyle}>
                        <Picker
                            selectedValue="material"
                            style={[styles.inputStyle, { borderWidth: 0.5 }]}>
                            {
                                lorryType.map((data, key) => {
                                    return (
                                        <Picker.Item label={data.value} value={data.value} key={key} />
                                    )

                                })
                            }
                        </Picker>
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            underlineColorAndroid="#f000"
                            placeholder="Dimension"
                            placeholderTextColor="#fff"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            underlineColorAndroid="#f000"
                            placeholder="Actual Weight"
                            placeholderTextColor="#fff"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            underlineColorAndroid="#f000"
                            placeholder="Date and Time"
                            placeholderTextColor="#fff"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            underlineColorAndroid="#f000"
                            placeholder="Number of Vehicles"
                            placeholderTextColor="#fff"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            underlineColorAndroid="#f000"
                            placeholder="Contact Person Details"
                            placeholderTextColor="#fff"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            underlineColorAndroid="#f000"
                            placeholder="Payment Mode"
                            placeholderTextColor="#fff"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            underlineColorAndroid="#f000"
                            placeholder="Bill Mode"
                            placeholderTextColor="#fff"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            underlineColorAndroid="#f000"
                            placeholder="Insured"
                            placeholderTextColor="#fff"
                            autoCapitalize="sentences"

                            returnKeyType="next"

                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            underlineColorAndroid="#f000"
                            placeholder="Any Remarks"
                            numberOfLines={4}
                            placeholderTextColor="#FFF"
                            returnKeyType="next"
                            secureTextEntry={true}
                            blurOnSubmit={false}
                        />
                    </View>
                    {errortext != '' ? (
                        <Text style={styles.errorTextStyle}>
                            hello
                        </Text>
                    ) : null}
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                    >
                        <Text style={styles.buttonTextStyle}>SUBMIT</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>

    )
}
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