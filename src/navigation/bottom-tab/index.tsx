import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../modules/dashboard/screens/home';
import { Screens } from '../../constant';
import Stopwatch from '../../modules/dashboard/screens/stopwatch';
import { Text, TouchableOpacity, View } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTab() {

    const tabOptions = ({ route }: any) => ({
        headerShown: false,
    });
    return (
        <Tab.Navigator screenOptions={tabOptions} tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name={Screens.home} component={Home} />
            <Tab.Screen name={Screens.stopwatch} component={Stopwatch} />
        </Tab.Navigator>
    );
}

export default BottomTab



function MyTabBar({ state, descriptors, navigation }: any) {
    return (
        <View style={{ flexDirection: 'row', }}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, justifyContent: 'center' }}
                    >
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 15,
                        }}>
                            <Text style={{ color: isFocused ? '#673ab7' : '#222', textDecorationLine: isFocused ? 'underline' : 'none', fontSize: 16 }}>
                                {label}
                            </Text>

                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}