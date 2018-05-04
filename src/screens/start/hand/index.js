import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, ListView, Dimensions } from 'react-native';

import { COLOR, Button } from 'react-native-material-ui';

import { cardsList } from '../../../constants/cards';

export default class StartScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first: {
                key: null,
                suit: null
            },
            second: {
                key: null,
                suit: null
            },
        }
    }

    __getSelected = (current) => {
        const { first, second }  = this.state;
        if(current.key === first.key && current.suit === first.suit) {
            return COLOR.greenA400;
        } else if(current.key === second.key && current.suit === second.suit) {
            return COLOR.greenA400;
        } else {
            return COLOR.blueGrey600;
        }
    };

    __selectCard = (selected) => {
        const { first, second }  = this.state;

        if(selected.key === first.key && selected.suit === first.suit) {
            this.setState({ first: { key: null, suit: null }});
        } else if(selected.key === second.key && selected.suit === second.suit) {
            this.setState({ second: { key: null, suit: null }});
        } else {
            if(!first.key) {
                this.setState({ first: { key: selected.key, suit: selected.suit }});
            } else if(!second.key) {
                this.setState({ second: { key: selected.key, suit: selected.suit }});
            }
        }
    };

    __isDisabled = (card) => {
        const { first, second }  = this.state;

        if(first.key && second.key) {
            if(card.key === first.key && card.suit === first.suit) {
                return false
            } else if(card.key === second.key && card.suit === second.suit) {
                return false
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    render() {
        const { players, position, checked } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Select your hand</Text>
                </View>
                <ScrollView>
                    <View style={styles.mainWrapper}>
                        {cardsList.map((card, index) => {
                            return (
                                <TouchableOpacity key={index}  onPress={() => this.__selectCard(card)} disabled={this.__isDisabled(card)}>
                                    <Image
                                        fadeDuration={0}
                                        style={{
                                            margin: 5,
                                            height: 100,
                                            width: (Dimensions.get('window').width / 4) - 20,
                                            borderWidth: 3,
                                            borderColor: this.__getSelected(card),
                                            resizeMode: Image.resizeMode.contain,
                                        }}
                                        source={{
                                            uri: card.image
                                        }}
                                    />
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
                <View style={{ margin: 20 }}>
                    <Button
                        text='Calculate'
                        accent
                        raised
                        disabled={!(this.state.first.key && this.state.second.key)}
                        onPress={() => this.props.navigation.navigate('Result', { position, players, checked, first: this.state.first, second: this.state.second})}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: COLOR.blueGrey600,
        fontSize: 30,
        fontWeight: 'bold',
    },
    mainWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'red',
        opacity: 0.3
    }
});