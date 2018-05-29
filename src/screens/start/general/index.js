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

    beforeYou = [
        {
            label: 'Folded',
            value: 'folded',
        },
        {
            label: 'Called',
            value: 'calles',
        },
        {
            label: 'Raised',
            value: 'raised',
        },
    ];

    constructor(props) {
        super(props);


        this.state = {
            players: 0,
            position: 'blind',
            checked: 'folded'
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
                        value={this.state.position}
                        label='Your position'
                        onChangeText={(position) => this.setState({ position })}
                        data={this.position}
                    />
                </View>
                <View style={styles.row}>
                    <Dropdown
                        value={this.state.checked}
                        label='Before you players are'
                        onChangeText={(checked) => this.setState({ checked })}
                        data={this.beforeYou}
                    />
                </View>
                <View style={styles.row}>
                    <Button
                        text='Continue'
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