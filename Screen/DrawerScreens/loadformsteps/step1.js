import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text } from "react-native";

import styles from "../../assets/styles";

class step1 extends Component {
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

    nextStep = () => {
        const { next, saveState } = this.props;
        // Save state for use in other steps
        saveState({ name: "samad" });

        // Go to next step
        next();
    };

    goBack() {
        const { back } = this.props;
        // Go to previous step
        back();
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
                    placeholder={"Loading Address 1"}
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Loading Address 2"}
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Loading Address 3"}
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Unloading Address 1"}
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Unloading Address 2"}
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder={"Unloading Address 3"}
                    placeholderTextColor="#000"
                />
                <View style={styles.btnContainer}>
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

export default step1;
