import React from "react";
import {StyleSheet, ScrollView, View, Image, Dimensions} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

import { Button, RadioButton } from 'react-native-material-ui';

import { position } from "../../../constants/position";

export default class StartScreen extends React.Component {

    position = [
        {
            label: 'S/B blind',
            value: 'blind',
        },
        {
            label: 'Early Position',
            value: 'early',
        },
        {
            label: 'Middle Position',
            value: 'middle',
        },
        {
            label: 'Late Position',
            value: 'late',
        },
    ];

    constructor(props) {
        super(props);


        this.state = {
            players: 0,
            position: 'blind',
            // checked values: 1 - folded, 2 - called, 3 - raised
            checked: 1
        }
    }


    render() {

        return (
            <ScrollView>
                <View>
                    <Image
                        style={{
                            marginTop: 15,
                            minHeight: 200,
                            width: Dimensions.get('window').width,
                            resizeMode: Image.resizeMode.contain,
                        }}
                        source={{ uri: position }}
                    />
                </View>
                <View style={styles.row}>
                    <Dropdown
                        value='blind'
                        label='Your position'
                        onChangeText={(value) => this.setState({ position: value })}
                        data={this.position}
                    />
                </View>
                <View style={styles.row}>
                    <RadioButton
                        label="Folded"
                        checked={this.state.checked === 1}
                        value="1"
                        onSelect={() => this.setState({ checked: 1 })}
                    />
                    <RadioButton
                        label="Called"
                        checked={this.state.checked === 2}
                        value="2"
                        onSelect={() => this.setState({ checked: 2 })}
                    />
                    <RadioButton
                        label="Raised"
                        checked={this.state.checked === 3}
                        value="3"
                        onSelect={() => this.setState({ checked: 3 })}
                    />
                </View>
                <View style={styles.row}>
                    <Button
                        text={'Continue'}
                        raised
                        accent
                        onPress={() => this.props.navigation.navigate('Hand', this.state)}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    row: {
        margin: 15
    }
});