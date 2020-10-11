import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Loading = () => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Now Loading...</Text>
            </View>
        </SafeAreaView>
    )
}

export default Loading

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: "#FDF6AA",
    },
    container: {
        alignItems: 'center',
        paddingVertical: 30,
    },
    textStyle: {
        fontSize: 20,
    }
})

