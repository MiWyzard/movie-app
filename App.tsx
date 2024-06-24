import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigations/BottomTabNavigation'

export default function App(): JSX.Element {
  useEffect(() => {

  const saveToken = async (token) => {
    try {
      await Keychain.setGenericPassword('token', token);
      console.log('Token saved successfully');
    } catch (error) {
      console.log('Could not save token', error);
    }
  };
  saveToken();
  },[])
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}