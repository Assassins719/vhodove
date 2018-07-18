import {
    StackNavigator,
} from 'react-navigation'
import React, { Component } from 'react';
import {
    Image, TouchableOpacity
} from 'react-native';
import { DrawerNavigator } from 'react-navigation'
import { Text, Animated, Easing } from 'react-native'

import AuthLoading from '../Containers/Auth/Screens/AuthLoading'
import Login from '../Containers/Auth/Screens/Login'
import Screen1 from '../Containers/Others/Screen1'
import Screen2 from '../Containers/Others/Screen2'
import Screen3 from '../Containers/Others/Screen3'
import DrawerContainer from '../Containers/DrawerContainer'
import { Images } from '../Themes'

const noTransitionConfig = () => ({
    transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
    }
})

const AuthStack = StackNavigator({
    Login: { screen: Login }

}, {
        initialRouteName: 'Login',
        navigationOptions: {
            gesturesEnabled: false,
        },
        headerMode: 'none'
    })

// drawer stack
const DrawerStack = DrawerNavigator({
    screen1: { screen: Screen1 },
    screen2: { screen: Screen2 },
    screen3: { screen: Screen3 },
}, {
        gesturesEnabled: false,
        contentComponent: DrawerContainer
    })

const drawerButton = (navigation) =>
    <TouchableOpacity onPress={() => {
        if (navigation.state.index === 0) {
            navigation.navigate('DrawerOpen')
        } else {
            navigation.navigate('DrawerClose')
        }
    }
    }>
        <Image
            source={Images.menu}
            style={{ width: 25, height: 25, marginLeft: 10 }}
        />
    </TouchableOpacity>



const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#2b333e' },
            title: 'VHODOVE.BG',
            headerTintColor: 'white',
            gesturesEnabled: false,
            headerLeft: drawerButton(navigation)
        })
    })

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    AuthLoading: AuthLoading,
    Auth: AuthStack,
    drawerStack: { screen: DrawerNavigation }
}, {
        headerMode: 'none',
        initialRouteName: 'AuthLoading',
        transitionConfig: noTransitionConfig
    })

export default PrimaryNav
