import { Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const Common = {
    platformIOS: Platform.OS === 'ios' ? true : false,
    platformAndroid:  Platform.OS === 'android' ? true : false,
    iosStatusBarHeight: getStatusBarHeight(),
    TRANSLUCENT: false,
}

export default Common