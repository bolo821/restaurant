import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Client_1 from './start.js'
import Client_2 from './favorite.js'
import Client_4 from './profile.js'
import Client_07 from './restaurant.js'
const Stack = createNativeStackNavigator ();
const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false}}>
        <Stack.Screen name = "start" component = {Client_1}/>
        <Stack.Screen name = "favorite" component = {Client_2} />
        <Stack.Screen name = "profile" component = {Client_4} />
        <Stack.Screen name = "restaurant" component = {Client_07} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}
export default App;
