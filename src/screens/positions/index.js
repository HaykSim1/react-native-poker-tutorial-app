import React from "react";
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class PositionsScreen extends React.Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.header}>
                    Early Position
                </Text>
                <Text style={styles.text}>
                    Players in the two blind seats - the small blind (SB) and the big blind (BB) -
                    are considered to be in "early position". Likewise the players in the two seats
                    immediately to the left of the big blind.{"\n"}
                    The first of these, immediately to the left of the big blind, is said to be "under the gun"
                    (UTG) because this player is the first to act in the pre-flop betting round and has no information
                    at all on what his opponents intend to do. The player to his left, also in early position, is UTG+1.
                    {"\n"}Players in early position need to have extremely strong hands to enter a pot. They
                    will be forced to act earliest and will have minimal information from their opponents.
                </Text>
                <Text style={styles.header}>
                    Middle Position
                </Text>
                <Text style={styles.text}>
                    "Middle position" (MP) is defined as those seats between the player UTG+1 and
                    the seat to the the dealer's immediate right. Players in middle position
                    can have marginally looser starting hand requirements than those in early
                    position because there are fewer players to their left to act behind them.
                    {"\n"}However it is still risky to enter a pot from this position
                    as the players in later position will have an advantage.
                </Text>
                <Text style={styles.header}>
                    Late Position
                </Text>
                <Text style={styles.text}>
                    "Late position" is by far the strongest position to be. The seat to
                    the immediate right of the dealer is known as the "cut off" (CO).
                    The dealer is said to be "on the button" (BTN).
                    {"\n"}These are the best seats to have because you can see all the action ahead and can
                    gather the most information. It follows that you can have significantly weaker
                    holdings in these positions because you have the best opportunity to
                    judge the strength of the hands you are facing.
                </Text>
                <Text style={styles.header}>
                    Summary
                </Text>
                <Text style={styles.text}>
                    Position is important because being able to act after other players gives you critical
                    information. If several players have already entered the hand, you know that you need
                    a much stronger holding to play. Conversely, if everyone has folded around to you,
                    any two cards might be enough to raise the blinds.
                    {"\n"}Generally, you should play more hands from late position than from middle
                    position, and more from middle position than from early position.
                    {"\n"}It is also crucial that you understand the relative strength of poker hands, and
                    this lesson about position should be read and understood in conjunction with
                    the starting hands lesson later on in this course.
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 15
    },
    header: {
        fontSize: 25,
        marginBottom: 15
    },
    text: {
        fontSize: 16,
        marginBottom: 15
    }
});