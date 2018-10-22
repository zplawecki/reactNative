import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class Robot extends Component {
    render() {
        const imageSource = { 
            uri: 'https://images-na.ssl-images-amazon.com/images/I/41oq-2oDKRL._SY300_QL70_.jpg' 
        };
        return (
            <View>
                <Image source={ imageSource }
                        style={{width: 300, height: 300}}  />
            </View>
        );
    }
}