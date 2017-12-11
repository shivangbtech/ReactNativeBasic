import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Button, Alert, TouchableHighlight, FlatList } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    _handleButtonPress = () => {
        Alert.alert(
            'Button pressed!',
            'You did it!',
        );
    };


    render() {
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



                <FlatList

                    data = {[
                        {name: 'shivang', i:1},
                        {name: 'shivang1', i:2},
                    ]}

                    renderItem = {({item}) => <Text > {item.name} </Text>}
                    keyExtractor = {item => item.id}
                />


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
