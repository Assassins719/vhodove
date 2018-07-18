import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    keybordView: { 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    passwordFrame: { 
        flexDirection: 'row', 
        alignSelf: 'stretch', 
        justifyContent: 'space-between',
        width: width - 48 
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 5,
        width: width-48,
        fontSize:20,
        backgroundColor: '#fff'
        
    },
    textInput1: {
        alignSelf: 'stretch',
        width: width-48,
        padding: 5,
        fontSize:20,
        backgroundColor: '#fff',
    },
    btn: {
        backgroundColor: '#289880',
        padding: 10,
        width: width-48,
        alignItems: 'center',
        marginTop: 30,
    },
    textInputFrame: {        
        borderBottomColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputview: {
        backgroundColor: '#28988055',
        padding: 15,
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        paddingTop:20,
        paddingBottom:30,
        marginTop:50
    }
})