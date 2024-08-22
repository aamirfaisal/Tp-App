import React from 'react'
import StackNavigation from './src/navigations/StackNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <StackNavigation />
      </SafeAreaView>
  )
}

export default App