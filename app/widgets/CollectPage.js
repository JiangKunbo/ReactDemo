import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    TouchableHighlight,
    FlatList
} from 'react-native';

let mDataNum = 0;
export default class CollectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPress: false,
            editPress: false,
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{
                        flexDirection: 'row',
                        flex: 1,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#3aff1a',
                        alignSelf: 'center'
                    }}>
                        <Image style={{
                            alignSelf: 'center', marginRight: 5
                        }} source={require('../img/search.png')}/>
                        <TextInput placeholder="输入搜索内容" style={{flex: 1}}/>
                        <TouchableHighlight
                            onPress={() => {
                            }}
                            onHideUnderlay={() => {
                                this.setState({searchPress: false})
                            }}
                            onShowUnderlay={() => {
                                this.setState({searchPress: true})
                            }}>
                            <Image
                                source={this.state.searchPress === false ? require('../img/search_normal.png') : require('../img/search_pressed.png')}/>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        onHideUnderlay={() => {
                            this.setState({editPress: false})
                        }}
                        onShowUnderlay={() => {
                            this.setState({editPress: true})
                        }}>
                        <Image
                            source={this.state.editPress === false ? require('../img/edit_normal.png') : require('../img/edit_pressed.png')}/>
                    </TouchableHighlight>
                </View>
                <Text>共收藏有{mDataNum}条数据</Text>
                <FlatList/>
            </View>
        );
    }
}
module.export = CollectPage;