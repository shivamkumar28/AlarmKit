import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Routes, Screens } from "../constant"
import AppStack from "./app-stack"
import NavigationConfig from "../config/navigation-config"


const Stack = createNativeStackNavigator()

const InitialNavigation = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={NavigationConfig}>
            <Stack.Screen name={Routes.appStack} component={AppStack} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default InitialNavigation