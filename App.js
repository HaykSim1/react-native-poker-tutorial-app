import React from 'react';

import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { ThemeProvider, COLOR } from 'react-native-material-ui';

import Main from './src';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
    palette: {
        primaryColor: COLOR.blue400
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
    checkbox: {
        icon: {
            color: COLOR.redA400,
        },
    }
};


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false
        }
    }

    async componentDidMount() {
        await Expo.Font.loadAsync({
            'Lato': require('./src/assets/fonts/Lato.ttf'),
            'Roboto': require('./src/assets/fonts/Lato.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    __renderLoader = () => {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color={COLOR.redA400} />
            </View>
        )
    }

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                {this.state.fontLoaded ? <Main/> : this.__renderLoader()}
            </ThemeProvider>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})