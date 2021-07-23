import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text } from "react-native";
import { Button } from "react-native-paper";

import styles from "../../assets/styles";

export class step4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSteps: "",
            currentStep: ""
        };
    }

    static getDerivedStateFromProps = props => {
        const { getTotalSteps, getCurrentStep } = props;
        return {
            totalSteps: getTotalSteps(),
            currentStep: getCurrentStep()
        };
    };

    render() {
        const { currentStep, totalSteps } = this.state;
        return (
            <View style={[styles.container, styles.step1]}>
                <View>
                    <Text
                        style={styles.currentStepText}
                    >{`Step ${currentStep} of ${totalSteps}`}</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Password"}
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Confirm password"}
                    placeholderTextColor="#000"
                />

                <Button style={{ width: "100%", marginTop: "6%" }} mode="contained" onPress={() => console.log('Pressed')}>
                    Submit Request
                </Button>

            </View>
        );
    }
}

export default step4;
