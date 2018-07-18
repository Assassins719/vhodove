import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Images, TouchableOpacity } from '../Themes'

export default class DrawerContainer extends React.Component {

  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Image
          style={{ width: '100%', height: 100 }}
          source={Images.menu_logo} />



        <Text
          onPress={() => navigation.navigate('screen1')}
          style={styles.uglyDrawerItem}>
          <Image
            style={{ width: 70, height: 70 }}
            source={Images.home} />
          &nbsp;&nbsp;Home
        </Text>
        <Text
          onPress={() => navigation.navigate('screen2')}
          style={styles.uglyDrawerItem}>
          <Image
            style={{ width: 70, height: 70 }}
            source={Images.check} />
          &nbsp;&nbsp;Check List
        </Text>
        <Text
          onPress={() => navigation.navigate('screen3')}
          style={styles.uglyDrawerItem}>
          <Image
            style={{ width: 70, height: 70 }}
            source={Images.print} />
          &nbsp;&nbsp;Print
        </Text>
        <Text
          onPress={() => navigation.navigate('screen1')}
          style={styles.uglyDrawerItem}>
          <Image
            style={{ width: 70, height: 70 }}
            source={Images.chat} />
          &nbsp;&nbsp;Chat
        </Text>
        <Text
          onPress={() => navigation.navigate('screen1')}
          style={styles.uglyDrawerItem}>
          <Image
            style={{ width: 70, height: 70 }}
            source={Images.call} />
          &nbsp;&nbsp;Call
        </Text>
        <Text
          onPress={() => navigation.navigate('AuthLoading')}
          style={styles.uglyDrawerItem}>
          <Image
            style={{ width: 70, height: 70 }}
            source={Images.logout} />
          &nbsp;&nbsp;Logout
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b333e'
  },
  uglyDrawerItem: {
    fontSize: 20,
    color: '#fff',
    padding: 10,
    paddingLeft: 20,
    // borderRadius: 2,
    // borderColor: '#E73536',
    // borderWidth: 1,
  }
})
