import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Button, Alert, TouchableHighlight, ScrollView } from 'react-native';
import { Constants } from 'expo';

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

export default class App extends Component {
    _handleButtonPress = () => {
        Alert.alert(
            'Button pressed!',
            'You did it!',
        );
    };

    render() {
        const items = array.map((value) => {
            return <Text > {value} </Text>
        })
        return (

            <View style={styles.container}>
                <TouchableHighlight underlayColor = "#f46b41" onPress={this._handleButtonPress}>
                    <Text style={styles.paragraph}>
                        hello there
                    </Text>
                </TouchableHighlight>


                <ActivityIndicator size="large"
                                   color= "#f46b41"/>

                <Button
                    title="Press me"
                    onPress={this._handleButtonPress}
                    accessibilityLabel="Learn more about this purple button"
                />
                <ScrollView >
                    {items}

                </ScrollView>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});
