import React from 'react';

import {StyleSheet, Platform, View, StatusBar} from 'react-native';

import { COLOR } from 'react-native-material-ui';

import MainContainer from './containers/main';

import TabNav from './routes';

export default class Main extends React.PureComponent {

    render(){
        return(
            <View style={styles.root}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <View style={styles.container}>
                    <MainContainer>
                        <TabNav/>
                    </MainContainer>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 35 : StatusBar.currentHeight,
        backgroundColor: COLOR.redA200
    },
    container: {
        flex: 1
    }
});