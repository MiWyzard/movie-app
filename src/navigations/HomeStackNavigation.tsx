import React from 'react'
import { View, Text, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MovieDetail from '../screens/MovieDetail'

const Stack = createNativeStackNavigator()

const MovieScreen = ({ navigation }): React.JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 8 }}>Movie Page</Text>
      <Button
        title="PERGI KE MOVIEDETAIL"
        onPress={(): void => {
          navigation.navigate('MovieDetail')
        }}
      />
    </View>
  )
}

const HomeStackNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={{
          title: 'This is MovieScreen',
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          title: 'Movie Detail',
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator