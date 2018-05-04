import React from "react";
import { ScrollView } from 'react-native';

import Card from '../../components/card';

import { hands } from '../../constants/hands';

export default class StartScreen extends React.Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                {hands.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    );
                })}
            </ScrollView>
        );
    }
}