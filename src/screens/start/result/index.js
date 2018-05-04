import React from "react";
import _ from 'lodash';
import { StyleSheet, View, Text } from 'react-native';

import { COLOR, Button } from 'react-native-material-ui';

import { results } from '../../../constants/results';

export default class StartScreen extends React.Component {

    __getAction = () => {
        const { position, checked, first, second } = this.props.navigation.state.params;

        const preAction = checked === 1 ? 'folded' : checked === 2 ? 'called' : 'raised';
        const same = first.suit === second.suit;

        const cards = results[position][preAction].cards;

        let action = 'FOLD';

        cards.map(item => {
            if(item.sameSuit === same) {
                const user = [first.key, second.key].sort();
                const server = [item.first, item.second].sort();

                if(_.isEqual(user, server)) {
                    action = item.action;
                }
            }
        });
        return action.toUpperCase();
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{this.__getAction()}</Text>
                </View>
                <Button text='Reset' raised primary onPress={() => this.props.navigation.navigate('General')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textContainer: {
        margin: 15
    },
    text: {
        color: COLOR.blueGrey600,
        fontSize: 30,
        fontWeight: 'bold',
    }
});