import React from 'react'
import { View, Text, Button } from 'react-native'

export default function MovieDetail({ navigation }): React.JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 8 }}>Movie Detail Page</Text>
      <Button
        title="KEMBALI"
        onPress={() => {
          navigation.navigate('MovieScreen')
        }}
      />
    </View>
  )
}