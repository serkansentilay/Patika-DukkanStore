import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Products from './pages/Products';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Products} options={{
          title: 'Dukkan',
          headerStyle: { backgroundColor: '#64b5f6' },
          headerTitleStyle: { color: 'white' },
        }} />
        <Stack.Screen name="DetailPage" component={Detail} options={{
          title: 'Detay',
          headerStyle: { backgroundColor: '#64b5f6' },
          headerTitleStyle: { color: 'white' },
          headerTintColor: 'white',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router