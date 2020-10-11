import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

type propTypes = {
    temp: number;
    condition: string;
    icon: string;
}

const Weather = (weatherInfo: propTypes) => {

    const { temp, condition, icon } = weatherInfo;

    const ICON_KEY = `http://openweathermap.org/img/wn/${icon}@2x.png`

    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={{
                    uri: ICON_KEY
                }}
            />
            <Text style={styles.temp}>{temp}℃</Text>
            <Text style={styles.condition}>Now is {condition}..</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue'
    },
    icon: {
        width: 150,
        height: 150,
    },
    temp: {
        fontSize: 38,
    },
    condition: {
        fontSize: 38,
        fontWeight:'bold',
        marginTop: 150,
    }
})

export default Weather
