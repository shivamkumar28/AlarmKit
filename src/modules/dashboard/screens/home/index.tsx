import { Component } from "react";
import { Text, View } from "react-native";
import DeviceInfo from "react-native-device-info";

class Home extends Component {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center' }}>
                <Text>App Name: {DeviceInfo.getApplicationName()}</Text>
                <Text>App Build Id: {`${DeviceInfo.getBundleId()}`}</Text>
            </View>
        )
    }
}

export default Home