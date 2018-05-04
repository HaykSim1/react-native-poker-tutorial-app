import React from "react";
import { NavigationActions } from "react-navigation";
import MaterialTabs from 'react-native-material-tabs';

import { COLOR } from 'react-native-material-ui';

export default class BottomNav extends React.Component{

    _handleTabPress = index => {
        const { jumpToIndex, navigation } = this.props;
        const currentIndex = navigation.state.index;

        if (currentIndex === index) {
            let childRoute = navigation.state.routes[index];
            if (childRoute.hasOwnProperty('index') && childRoute.index > 0) {
                navigation.dispatch(
                    NavigationActions.popToTop({ key: childRoute.key })
                );
            } else {
                // TODO: do something to scroll to top
            }
        } else {
            jumpToIndex(index);
        }
    };

    render() {

        const {
            navigation,
        } = this.props;
        const { routes } = navigation.state;

        return(
            <MaterialTabs
                barColor={COLOR.redA400}
                scrollable={true}
                items={routes.map((route) => route.routeName)}
                selectedIndex={navigation.state.index}
                onChange={(index) => this._handleTabPress(index)}
            />
        )
    }
}