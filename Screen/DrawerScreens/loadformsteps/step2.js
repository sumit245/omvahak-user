import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text, Switch } from "react-native";

import styles from "../../assets/styles";

export class step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSteps: "",
            currentStep: "",
            materialType: "",
            isSwitchOn: true
        };
    }

    static getDerivedStateFromProps = props => {
        const { getTotalSteps, getCurrentStep } = props;
        return {
            totalSteps: getTotalSteps(),
            currentStep: getCurrentStep()
        };
    };

    nextStep = () => {
        const { next, saveState } = this.props;
        saveState({ email: "sam@test.com" });
        next();
    };
    onToggleSwitch = () => {
        this.setState(isSwitchOn => {
            isSwitchOn: !isSwitchOn
        })
    }

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
                    placeholder={"Material Type"}
                    placeholderTextColor="#000"
                />
                <View style={styles.input1}>
                    <Text>{this.state.isSwitchOn ? "Speed" : "Normal"}</Text>
                    <Switch value={this.state.isSwitchOn} onValueChange={this.onToggleSwitch} />
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Body Type"}
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Dimension"}
                    placeholderTextColor="#000"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Actual Weight"}
                    placeholderTextColor="#000"
                />
                <View style={[styles.btnContainer, styles.marginAround]}>
                    <TouchableOpacity onPress={this.props.back} style={styles.btnStyle}>
                        <Image
                            source={require("../../assets/arrow.png")}
                            style={[styles.btnImage, styles.backBtn]}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.nextStep} style={styles.btnStyle}>
                        <Image
                            source={require("../../assets/arrow.png")}
                            style={styles.btnImage}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default step2;