import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
    TouchableHighlight,
    Image,
    Dimensions,
    Alert,
    T
} from 'react-native';

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
export default class TranslatorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recordPress: false,
            takePhotoPress: false,
            translatorPress: false,
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput
                    placeholder="输入你要翻译的内容"
                    multiline={true}
                    underlineColorAndroid="transparent"
                    style={{
                        alignSelf:'flex-start',
                        borderWidth: 1,
                        borderColor: '#ffea0a',
                        borderRadius: 5,
                        width: (ScreenWidth * 3 ) / 5,
                        height: ScreenHeight / 6
                    }}>
                </TextInput>
                <FlatList/>
                <View style={styles.transtlator_bottom}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        onHideUnderlay={() => {
                            this.setState({recordPress: false})
                        }}
                        onShowUnderlay={() => {
                            this.setState({recordPress: true})
                        }}>
                        <Image style={{width: ScreenWidth / 5, height: ScreenHeight / 16}}
                               source={this.state.recordPress === false ? require('../img/record_normal.png') : require('../img/record_pressed.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        onHideUnderlay={() => {
                            this.setState({takePhotoPress: false})
                        }}
                        onShowUnderlay={() => {
                            this.setState({takePhotoPress: true})
                        }}>
                        <Image style={{width: ScreenWidth / 5, height: ScreenHeight / 16}}
                               source={this.state.takePhotoPress === false ? require('../img/take_photo_normal.png') : require('../img/take_photo_pressed.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        onHideUnderlay={() => {
                            this.setState({translatorPress: false})
                        }}
                        onShowUnderlay={() => {
                            this.setState({translatorPress: true})
                        }}>
                        <Image style={{width: ScreenWidth / 5, height: ScreenHeight / 16}}
                               source={this.state.translatorPress === false ? require('../img/translate_normal.png') : require('../img/translate_pressed.png')}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    transtlator_bottom: {
        flexDirection: 'row',
    }
});
module.export = TranslatorPage;