import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    Image,
    ImageBackground,
    ActivityIndicator,
    AsyncStorage,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import { Images } from '../../../Themes'
import styles from '../Styles/AuthLoadingStyles'

export default class AuthLoading extends Component {
    componentDidMount() {
        this._loadInitialState().done();
        SplashScreen.hide()
    }

    _loadInitialState = async () => {
        const _email = await AsyncStorage.getItem('email');
        const _password = await AsyncStorage.getItem('password');
        if (_email !== null && _email !== null) {
            fetch("https://br.sgbas.com/api/v2/login?email=" + _email + "&password=" + _password, {
                method: "GET"
            })
                .then((response) => response.json())
                .then((res) => {
                    console.log('login res...........', res)
                    if (res.status === "1") {
                        AsyncStorage.setItem('uid', res.uid + '');
                        AsyncStorage.setItem('token', res.token);
                        AsyncStorage.setItem('idhash', res.idhash);
                        AsyncStorage.setItem('email', _email);
                        AsyncStorage.setItem('password', _password);
                        if ('MICL' in res.asset) {
                            AsyncStorage.setItem('reward', res.asset.MICL);
                        } else {
                            AsyncStorage.setItem('reward', '');
                        }
                        this.props.navigation.navigate('App')
                    } else {
                        this.props.navigation.navigate('Login')
                    }
                }).catch((error) => {
                    this.props.navigation.navigate('Login')
                })
                .done();
        } else {
            this.props.navigation.navigate('Login')
        }
    }


    render() {
        return (
            <ImageBackground style={styles.container} source={Images.background}>
                <Image  source={Images.logo_login} resizeMode="stretch"></Image>
                <ActivityIndicator
                    animating={true}
                    size='large'
                    color='rgba(0, 0, 0, 0.7)' />
            </ImageBackground>
        )
    }
}