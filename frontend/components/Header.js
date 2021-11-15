import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 40,
        backgroundColor: 'darkslateblue'
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontFamily: '-apple-system',
        textAlign: 'center',
    },
});


export default Header;