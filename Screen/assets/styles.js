import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "6%",

    },
    step1: {
        flex: 1
    },
    step2: {
        flex: 1
    },
    step3: {
        flex: 1
    },
    step4: {
        flex: 1
    },
    input: {
        width: "100%",
        borderColor: "#0000FF",
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 8,
        marginTop: "2%",

    },
    input1: {
        width: "100%",
        borderColor: "#0000FF",
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 8,
        marginTop: "2%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"

    },
    btnStyle: {
        borderColor: "#0000ff",
        borderWidth: 2,
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    btnImage: {
        width: "40%",
        height: "40%"
    },
    backBtn: {
        transform: [{ rotate: "180deg" }]
    },
    marginAround: {
        width: "40%",
        justifyContent: "space-between"
    },
    currentStepText: {
        color: "#00f",
        fontSize: 22
    }
});