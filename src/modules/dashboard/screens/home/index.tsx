import { Component } from "react";
import { Text, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { decrement, increment } from "../../../../redux/general.slice";
import { connect } from "react-redux";

class Home extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center' }}>
                <Text>App Name: {DeviceInfo.getApplicationName()}</Text>
                <Text>App Build Id: {`${DeviceInfo.getBundleId()}`}</Text>
                <Text>Value: {`${this.props?.value || 'No Value'}`}</Text>
            </View>
        )
    }
}
const mapStateToProps = (state: any) => ({
    value: state.general.value,
});

const mapDispatchToProps = {
    increment,
    decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)