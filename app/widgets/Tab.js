import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';
import {
    TabNavigator
}from 'react-navigation';
import Collect from './CollectPage'
import Translator from './TranslatorPage'

const Tabs = TabNavigator({
    Collect: {
        screen: Collect,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel:"haha",
        }
    },
    Translator: {
        screen: Translator,
        navigationOptions: {
            tabBarLabel:"haha",
            // tabBarIcon:({tintColor}) => (<Image source={require('../img/translate.png')} />),
        }
    },
    Translator1: {
        screen: Translator,
        navigationOptions: {
            tabBarLabel:" ",
            display:true,
            // tabBarIcon:({tintColor}) => (<Image source={require('../img/translate.png')} />),
        }
    },
    Translator2: {
        screen: Translator,
        navigationOptions: {
            tabBarLabel:" ",
            display:true,
            // tabBarIcon:({tintColor}) => (<Image source={require('../img/translate.png')} />),
        }
    },
}, {
    animationEnabled: false, // 切换页面时是否有动画效果
    headerLeft:true,
    // tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#ff8500', // 文字和图片选中颜色
        headerLeft:'true',
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: false, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 10, // 文字大小
        },
    },
});
export default class TabView extends Component {
    render(){
        return(
            <View style ={{flexDirection:'row',flex:1}}>
                <Tabs/>
            </View>
        );
    }
}

module.export =TabView;