import { Component } from "react";
import { FlatList, ScrollView, Switch, Text, View } from "react-native";
import { decrement, increment } from "../../../../redux/general.slice";
import { connect } from "react-redux";
import { styles } from "./style";
import { colors } from "../../../../constant/colors";

class Home extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false,
            isEnabled: false
        };
    }

    renderHeader = () => (
        <View style={{ flexDirection: 'row', backgroundColor: 'lightblue', padding: 16, justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>{'Alarm'}</Text>
            <View style={{ flexDirection: 'row', columnGap: 10 }}>
                <Text>{'Plus'}</Text>
                <Text>{'3Dots'}</Text>
            </View>
        </View>
    );

    renderList = ({ item, index }: any) => {
        const { isEnabled } = this.state

        return <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.white60, paddingHorizontal: 22, paddingVertical: 22, borderRadius: 26 }}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 26, }}>{'4:50 '}<Text style={{ fontSize: 16 }}>{'am'}</Text></Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{'Every day'}</Text>
                <View style={{ marginLeft: 10 }}>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.setState((prev) => ({ isEnabled: !prev.isEnabled }))}
                        value={isEnabled}
                    />
                </View>
            </View>
        </View>
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    renderItem={this.renderList}
                    nestedScrollEnabled
                    ItemSeparatorComponent={() => <View style={{ width: '100%', height: 16 }}></View>}
                    ListHeaderComponent={this.renderHeader}
                    stickyHeaderIndices={[0]}
                />
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