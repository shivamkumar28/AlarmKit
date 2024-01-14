import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Routes } from "../../constant"
import NavigationConfig from "../../config/navigation-config"
import BottomTab from "../bottom-tab"


const Stack = createNativeStackNavigator()

const AppStack = () => {
    return <Stack.Navigator screenOptions={NavigationConfig}>
        <Stack.Screen name={Routes.bottomTab} component={BottomTab} />
    </Stack.Navigator>
}

export default AppStack