import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Card(props) {
    return (
        <View style={{
            backgroundColor:'lightgreen',
            borderRadius: 5,
            height: 250,
            padding: 50,
            marginLeft: 25,
            marginRight: 25, }}>
          <Text style={{fontSize: 30}}>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
  
    )
}

// const styles = StyleSheet.create({
//   header: {
//     fontSize: 21,
//     color: theme.colors.primary,
//     fontWeight: 'bold',
//     paddingVertical: 12,
//   },
// })
