import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text>ElevatedCards</Text>
                <ScrollView horizontal={true} style={styles.container}>
                    <View style={[styles.card]}>
                        <Text>RED</Text>
                    </View>
                    <View style={[styles.card]}>
                        <Text>GREEN</Text>
                    </View>
                    <View style={[styles.card]}>
                        <Text>BLUE</Text>
                    </View>
                    <View style={[styles.card]}>
                        <Text>RED</Text>
                    </View>
                    <View style={[styles.card]}>
                        <Text>RED</Text>
                    </View>
                    <View style={[styles.card]}>
                        <Text>RED</Text>
                    </View>
                    <View style={[styles.card]}>
                        <Text>RED</Text>
                    </View>
                    <View style={[styles.card]}>
                        <Text>RED</Text>
                    </View>
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'row'
    },
    card: {
        height: 100,
        width: 100,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    }
})