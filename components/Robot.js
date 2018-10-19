import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class Robot extends Component {
    render() {
        return (
            <View>
                <Image style={{width: 50, height: 50}} source={ {uri: 'https://images-na.ssl-images-amazon.com/images/I/41oq-2oDKRL._SY300_QL70_.jpg'} } />
            </View>
        );
    }
}