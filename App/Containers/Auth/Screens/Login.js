import React, { Component } from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    Alert,
    NetInfo,
    ActivityIndicator,
    BackHandler,
    Dimensions,
    Keyboard,
} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'


import styles from '../Styles/LoginStyles'
import { Images } from '../../../Themes'
const { width, height } = Dimensions.get('window')
const GLOBAL = require('../../Global')
const options = {
    message: GLOBAL.Wait,
    isCancelable: true
}


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isConnected: true,
            loginEnabled: true,
        };

    }

    componentDidMount() {
        //this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        console.log('_loadInitialState........... ')
        const _email = await AsyncStorage.getItem('email');
        const _password = await AsyncStorage.getItem('password');
        console.log('_email........', _email)
        console.log('_password........', _password)
        if (_email !== null && _email !== null) {
            console.log('Email Exist...........')
            this.setState({ email: _email });
            this.setState({ password: _password });
            fetch("https://br.sgbas.com/api/v2/login?email=" + this.state.email + "&password=" + this.state.password, {
                method: "GET"
            })
                .then((response) => response.json())
                .then((res) => {
                    console.log('Response Result............', res)
                    if (res.status === "1") {
                        AsyncStorage.setItem('uid', res.uid + '');
                        AsyncStorage.setItem('token', res.token);
                        AsyncStorage.setItem('idhash', res.idhash);
                        AsyncStorage.setItem('email', this.state.email);
                        AsyncStorage.setItem('password', this.state.password);
                        //AsyncStorage.setItem('reward', res.asset.MICL);

                        //this.props.navigation.navigate('App');
                    } else {
                        Alert.alert(
                            GLOBAL.Alert,
                            GLOBAL.Unexpected,
                        )
                    }

                }).catch((error) => {
                    console.error('http error...............', error)
                })
                .done();
        }
    }

    login = () => {
        Keyboard.dismiss()
        this.props.navigation.navigate('drawerStack');
        /*if (this.state.email !== '' && this.state.password !== '') {

            this.setState({ loginEnabled: false })
            fetch("https://br.sgbas.com/api/v2/login?email=" + this.state.email + "&password=" + this.state.password, {
                method: "GET"
            })
                .then((response) => response.json())
                .then((res) => {
                    this.setState({ loginEnabled: true })
                    if (res.status === "1") {
                        AsyncStorage.setItem('uid', res.uid + '');
                        AsyncStorage.setItem('token', res.token);
                        AsyncStorage.setItem('idhash', res.idhash);
                        AsyncStorage.setItem('email', this.state.email);
                        AsyncStorage.setItem('password', this.state.password);
                        if ('MICL' in res.asset) {
                            AsyncStorage.setItem('reward', res.asset.MICL);
                        } else {
                            AsyncStorage.setItem('reward', '');
                        }

                        setTimeout(() => {
                            this.props.navigation.navigate('App');
                        }, 300);
                    } else {
                        setTimeout(() => {
                            Alert.alert(
                                GLOBAL.Alert,
                                GLOBAL.Unexpected,
                            )
                        }, 300);
                        
                    }
                })
                .catch((error) => {
                    console.error('http error...............', error)
                    this.setState({ loginEnabled: true })
                })
                .done();
        } else {
            Alert.alert(
                GLOBAL.Alert,
                GLOBAL.FillEmail,
            )
        }
        */
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={Images.background} resizeMode="cover">
                <KeyboardAvoidingView style={styles.keybordView} >
                    <Image
                        source={Images.logo_login}
                    />
                    <View style={styles.inputview}>
                        <Text style={{ color: 'black', fontSize: 20, textAlign: 'left', width: width - 60 }}>{GLOBAL.Email}</Text>
                        <View style={[styles.textInputFrame, { width: width - 48, }]} >
                            <TextInput
                                keyboardType='email-address'
                                style={styles.textInput}
                                onChangeText={(email) => this.setState({ email })}
                                returnKeyType='next'
                                onSubmitEditing={() => this.refs.passwordInput.focus()}
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <Text style={{ color: 'black', textAlign: 'left', width: width - 60, fontSize: 20, marginTop: 20 }}>{GLOBAL.Password}</Text>
                        <View style={[styles.textInputFrame, { width: width - 48, }]} >
                            <TextInput
                                ref='passwordInput'
                                style={styles.textInput1}
                                onChangeText={(password) => this.setState({ password })}
                                secureTextEntry={true}
                                returnKeyType='done'
                                autoCapitalize='none'
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={this.login}>
                            <Text style={{ color: 'white', fontSize: 20 }}>{GLOBAL.Login}</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>

                <Spinner
                    visible={!this.state.loginEnabled}
                    textContent={GLOBAL.Wait}
                    textStyle={{ color: 'white' }}
                />
            </ImageBackground>
        )
    }
}