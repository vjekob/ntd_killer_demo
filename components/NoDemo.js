import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function NoDemo() {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/Statler_Waldorf_small.png")} style={styles.image}></Image>
            <Text style={styles.loading}>The demo has not started yet.</Text>
            <Text style={styles.loading2}>Stay tuned.</Text>
            <Text style={styles.loading3}>(this screen will refresh automatically)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00c284",
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    image: {
        width: 300,
        height: 330,
        alignSelf: "center"
    },
    loading: {
        fontSize: 18,
        fontWeight: "300",
        color: "white",
        alignSelf: "center",
        marginTop: 20
    },
    loading2: {
        fontSize: 18,
        fontWeight: "300",
        color: "white",
        alignSelf: "center"
    },
    loading3: {
        fontSize: 14,
        fontWeight: "300",
        color: "white",
        alignSelf: "center",
        marginTop: 10
    }
});
