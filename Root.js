import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { ItemStateManager } from './components/ItemStateManager';
import { bindComponentToAppState } from './redux/appReducer';

class RootUnbound extends Component {
    render() {
        return (
            <>
                <ItemStateManager />
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    <AppNavigator />
                </View>
            </>
        );
    }
}

export default bindComponentToAppState(RootUnbound);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#363636",
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
});
