// import React from 'react'
// import { Provider } from 'react-redux'
// import { configureStore as store} from './src/redux/Store'
// import { Provider as PaperProvider } from 'react-native-paper'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { theme } from './src/core/theme'
// import {
//   StartScreen,
//   LoginScreen,
//   RegisterScreen,
//   ResetPasswordScreen,
//   Dashboard,

// } from './src/screens'

// import { default as MainScreen } from './src/screens/MainScreen'
// import { configureStore } from '@reduxjs/toolkit'

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <Provider store={configureStore}>
//       <PaperProvider theme={theme}>
//         <NavigationContainer>
//           <Stack.Navigator
//             initialRouteName="LoginScreen"
//             screenOptions={{
//               headerShown: false,
//             }}
//           >
//             {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
//             <Stack.Screen name="LoginScreen" component={LoginScreen} />
//             <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//             <Stack.Screen name="Dashboard" component={Dashboard} />
//             <Stack.Screen name="MainScreen" component={MainScreen} />
//             <Stack.Screen
//               name="ResetPasswordScreen"
//               component={ResetPasswordScreen}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </PaperProvider>
//     </Provider>

//   )
// }


import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/Store'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,

} from './src/screens'

import { default as MainScreen } from './src/screens/MainScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>

  )
}