import { Component, ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

class Stopwatch extends Component {

    constructor(props: any) {
        super(props)
        this.state = {
            isLoading: false
        }
    }

    render(): ReactNode {
        return <View style={styles.container}>
            <View style={{ flex: 5, backgroundColor: 'blue' }}>
                <Text style={{}}></Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'red' }}></View>
        </View>
    }
}

export default Stopwatch