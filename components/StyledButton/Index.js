import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from '../CarItem/styles';

const styledButton  = () => {
    return (
        <View style={}>
            <Pressable
            style={styles.button}
            onPress={() => {
                console.warn('Hey there')
            }}
            >
                 <Text>Custom Order</Text>   
            </Pressable>
        </View>
    )
}

export default styledButton;
