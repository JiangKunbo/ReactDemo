import React, { Component } from 'react';
import {
    View,

} from 'react-native';

import {
    StackNavigator,
    DrawerNavigator
}from 'react-navigation';
import CollectPage from "./CollectPage";
import Translator from "./TranslatorPage";

const DrawerNav1 = DrawerNavigator({
    CollectPage: {
        screen: CollectPage,
        navigationOptions: {
            tabBarLabel:"haha",
            // tabBarIcon:({tintColor}) => (<Image source={require('../img/translate.png')} />),
        }
    },
    Translator: {
        screen: Translator,
        navigationOptions: {
            tabBarLabel:"haha",
            // tabBarIcon:({tintColor}) => (<Image source={require('../img/translate.png')} />),
        }
    },
}, {
    drawerWidth: 200, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: Translator, // 默认页面组件
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    }
});


export default class LeftTab extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <DrawerNav1/>
            </View>
        );
    }
}
module.export = LeftTab;