import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

import { COLOR } from 'react-native-material-ui';

export default class Card extends React.Component {
    render() {
        const { name, description, image } = this.props;
        return (
            <View style={styles.items}>
                {image && <Image
                    style={{
                        width: Dimensions.get('window').width - 30,
                        height: 195,
                        resizeMode: Image.resizeMode.contain,
                    }}
                    source={{ uri: image }}
                />}
                <View style={styles.content}>
                    {name && <Text style={styles.header}>{name}</Text>}
                    {description && <Text style={styles.text}>{description}</Text>}
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    items: {
        backgroundColor: 'white',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: COLOR.black,
        shadowOffset: { height: 0, width: 0 },
        margin: 15,
        elevation: 2
    },
    content: {
        marginTop: 15,
        alignItems: 'center'
    },
    header: {
        fontSize: 25,
        marginBottom: 15
    },
    text: {
        fontSize: 16,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10
    }
});