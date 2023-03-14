import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer ,DefaultTheme} from '@react-navigation/native'

import { SignUp } from './screens'
import Tabs from './navigation/tabs'

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:'transparent'
  }
}

const Stack=createStackNavigator()

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{headerShown:false}}
        initialRouteName={'SignUp'}
      >
        <Stack.Screen name='SignUp' component={SignUp} screenOptions={{headerShown:false}}/>

      {/* Tabs */}
      <Stack.Screen name='Home' component={Tabs} screenOptions={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App