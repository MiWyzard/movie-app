import React from 'react'
import { View, Text} from 'react-native'

type Props = {
  route: any,

}

export default function MovieDetail({ route } : Props): React.JSX.Element {
  const {id} = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 8 }}>Movie ID: {id}</Text>
    </View>
  )
}