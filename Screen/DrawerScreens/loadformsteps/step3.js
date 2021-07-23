import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text, Switch } from "react-native";

import styles from "../../assets/styles";

export class step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSteps: "",
            currentStep: "",
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
                    placeholder={"Select Date and Time"}
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Number of Vehicles"}
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Contact Person Details"}
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Payment Mode"}
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Bill Mode"}
                    placeholderTextColor="#000"
                />
                <View style={styles.input1}>
                    <Text>{this.state.isSwitchOn ? "Insured" : "Not-Insured"}</Text>
                    <Switch value={this.state.isSwitchOn} onValueChange={this.onToggleSwitch} />
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Any Remarks"}
                    multiline
                    numberOfLines={3}
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
                    <TouchableOpacity onPress={this.props.next} style={styles.btnStyle}>
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

export default step3;