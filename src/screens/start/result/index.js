import React from "react";
import _ from 'lodash';
import { StyleSheet, View, Text } from 'react-native';

import { COLOR, Button } from 'react-native-material-ui';

import { results } from '../../../constants/results';

export default class StartScreen extends React.Component {

    __getAction = () => {
        const { position, checked, first, second } = this.props.navigation.state.params;

        const same = first.suit === second.suit;

        const cards = results[position][checked].cards;

        let action = 'FOLD';
        cards.map(item => {
            if(item.sameSuit === same) {
                const user = [first.key, second.key].sort();
                const server = [item.first.toString(), item.second.toString()].sort();
                console.log('--> user, server', user, server)

                if(_.isEqual(user, server)) {
                    action = item.action;
                }
            }
        });

        return action !== 'call20'
            ? (<View style={styles.textContainer}>
                <Text style={styles.text}>{action.toUpperCase()}</Text>
                <Button text='Reset' raised primary onPress={() => this.props.navigation.navigate('General')}/>
            </View>)
            : (
                <View style={styles.container}>
                    <Text style={styles.text}>{action.toUpperCase()}*</Text>
                    <Button text='Reset' raised primary onPress={() => this.props.navigation.navigate('General')}/>
                    <Text style={styles.bottomText}>
                        *You can call if your stack is more than 20x the amount you have to call
                    </Text>
                </View>
            )
    };

    render() {
        return (
            <View style={styles.container}>
                {this.__getAction()}
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
    },
    bottomText: {
        marginTop: 130,
        color: COLOR.grey600,
        fontSize: 12,
        fontWeight: 'normal',
    }
});