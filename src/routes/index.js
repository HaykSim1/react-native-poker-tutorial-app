import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import BottomNav from '../components/bottom-nav';

import { COLOR } from 'react-native-material-ui';

import Positions from '../screens/positions';
import Hands from '../screens/hands';
import BestHands from '../screens/best-hands';

import GeneralNav from '../screens/start/general';
import HandNav from '../screens/start/hand';
import ResultNav from '../screens/start/result';

const StartStack = StackNavigator({
    General: { screen: GeneralNav },
    Hand: { screen: HandNav },
    Result: { screen: ResultNav },
}, {
    headerMode: 'none',
    initialRouteName: 'General',
    cardStyle: {
        backgroundColor: COLOR.white,
    },
});

export default TabNavigator({
    Start: { screen: StartStack },
    Positions: { screen: Positions },
    Hands: { screen: Hands },
    BestHands: { screen: BestHands },
},
{
    tabBarOptions: {
        style: {
            backgroundColor: COLOR.transparent,
        },
    },
    tabBarPosition: 'top',
    tabBarComponent: BottomNav,
    animationEnabled: true,
    swipeEnabled: true,
});