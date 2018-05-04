import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { COLOR } from 'react-native-material-ui';

export default class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: COLOR.white,
        flex: 1,
    },
});
