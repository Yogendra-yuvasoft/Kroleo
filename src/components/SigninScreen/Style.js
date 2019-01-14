import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    cotnainer: {
        backgroundColor: 'white',
        flex: 1
    },

    scrollView: {
        flex: 1
    },

    logoView: {
        marginTop: 150,
        width: 100,
        height: 100,
        alignSelf: 'center'
    },

    emailBackgroundView: {
        marginTop: 30,
        width: 280,
        height: 80,
        alignSelf: 'center'
    },

    emailText: {
        fontSize: 17,
        color: 'rgba(67,67,67, 0.72)',
    },

    emailInputField: {
        marginTop: 2,
        width: 280,
        height: 40,
        fontSize: 15,
        borderColor: 'rgba(112,112,112, 0.44)', 
        borderWidth: 1,
    },

    emailErrorMsg: {
        fontSize: 12,
        color: 'black'
    },

    passwordBackgroundView: {
        marginTop: 15,
        width: 280,
        height: 80,
        alignSelf: 'center'
    },

    passwordText: {
        fontSize: 20,
        color: 'rgba(67,67,67, 0.72)',
    },

    passwordInputField: {
        marginTop: 2,
        width: 280,
        height: 40,
        fontSize: 15,
        borderColor: 'rgba(112,112,112, 0.44)',
        borderWidth: 1,
    },

    passwordErrorMsg: {
        fontSize: 12,
        color: 'black'
    },

    loginButtonView: {
        marginTop: 20,
        width: 200,
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'blue',
        borderRadius: 200/5,
        fontSize: 25
    },

    loginButtonText: {
      color: 'white',
      fontSize: 20,
      textAlign:'center',
      paddingTop: 10,
      paddingLeft : 10,
      paddingRight : 10
    },

    registerTextBackgroundView: {
        marginTop: 5,
        width: 300,
        height: 20,
        alignSelf: 'center'
    },

    registerText: {
        alignSelf: 'center',
        color: 'black'
    },

    registerButtonView: {
        marginTop: 20,
        width: 200,
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'blue',
        borderRadius: 200/5,
        fontSize: 25
    },

    registerButtonText: {
      color: 'white',
      fontSize: 20,
      paddingTop: 5,
      textAlign:'center'
    }
});