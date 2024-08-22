import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"
import * as ui from '../../screens'
import { SCREEN } from '../../enums/AppEnums';

const Stack = createStackNavigator()

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={SCREEN.SPLASH} component={ui.Spalsh} />
                <Stack.Screen name={SCREEN.HOME} component={ui.Home} />
                <Stack.Screen name={SCREEN.DETAILSCREEN} component={ui.DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation