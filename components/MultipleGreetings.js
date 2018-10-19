import React, { Component } from 'react';
import { Text, View } from 'react-native';


class Greeting extends Component {
    render() {
        let greetingString = `
            Hello ${ this.props.name }. How are You ?
        `
        return(
            <Text>{ greetingString }</Text>
        );
    }
}

export default class MultipleGreetings extends Component {
    render() {
        return (
            <View
                style = { {alignItems: 'center'} }
                >
            <Greeting name="Test1 Test1"></Greeting>
            <Greeting name="Test2 Test2"></Greeting>
            </View>
        )
    }
}