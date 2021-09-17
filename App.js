import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react'
import store from './src/redux'
import Navigation from './src/Navigation/index';
const persistor = persistStore(store)

export default function App() {
  return (
    <PersistGate persistor = {persistor}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </PersistGate>
  )
}