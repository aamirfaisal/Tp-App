
import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Shimmer } from '../reuseables'

export default function Loader() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 60 }}>
            <View>
                <Shimmer style={styles.shimmerTitle} />
                <Shimmer style={styles.shimmerUserId} />
            </View>
            <View>
                <Shimmer style={styles.shimmerImg} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shimmerTitle: {
        height: 20,
        width: '60%',
        marginBottom: 10,
        borderRadius: 5,
    },
    shimmerUserId: {
        height: 20,
        width: '100%',
        borderRadius: 5,
    },
    shimmerImg: {
        height: 50,
        width: 50,
        borderRadius: 100
    }
})