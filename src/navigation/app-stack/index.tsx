import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Screens } from "../../constant"
import Home from "../../modules/dashboard/screens/home"


const Stack = createNativeStackNavigator()

const AppStack = () => {
    return <Stack.Navigator>
        <Stack.Screen name={Screens.home} component={Home} />
    </Stack.Navigator>
}

export default AppStack