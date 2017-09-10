import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageBackground,
    Dimensions,
    Image
} from 'react-native';

import TabView from './widgets/Tab';

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
export default class MainActivity extends Component {
    render(){
        return(
            <View style ={{flex:1}}>
                <StatusBar hidden={true}/>
                <ImageBackground
                    style ={{flex:1,justifyContent:'center',alignItems:'center'}}
                    source={require('./img/bg.png')}>
                    <StatusBar hidder={false}/>
                    <ImageBackground
                        style={{height:(ScreenHeight-40),width:(ScreenWidth-60),alignItems:'center'}}
                        source={require('./img/inner_bg.png')}>
                        <Image style={{width:ScreenWidth/6,height:ScreenHeight/10}} source={require('./img/translate.png')}/>
                        <TabView style={{flex:1}}/>
                    </ImageBackground>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
module.export=MainActivity;