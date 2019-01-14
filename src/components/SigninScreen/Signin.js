import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import componentStyle from './Style';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ActionCreators } from '../../actions';
import { Actions } from 'react-native-router-flux';

class Signin extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: () => null
    }
  };

  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
        emailErrormessage: '',
        passwordErrormessage: ''
    }
    this.onClickLoginButton = this.onClickLoginButton.bind(this)
  } 

  componentWillReceiveProps(nextProps){

        var error = nextProps.responseMsg.error

        if (error == true) {
           emailErrormessage = nextProps.responseMsg.login.fields.email
           this.setState({emailErrormessage: emailErrormessage})
        } 
  }

  onClickLoginButton(data){
    if (this.state.email === '' && this.state.password === ''){
      this.setState({
        emailErrormessage: 'Email can not be blank', 
        passwordErrormessage: 'Password can not be blank'
      })
    } else if (this.state.email === '') {
      this.setState({passwordErrormessage: 'Email can not be blank'})
    } else if (this.state.password === ''){
      this.setState({emailErrormessage: ''})
      this.setState({passwordErrormessage: 'Password can not be blank'})
    } else {
        this.setState({passwordErrormessage: ''})
        this.props.userLogin(data);
    }
  }

  onClickRegisterButton(){
     Actions.Register();
  }

     render(){

        return(
            <View style = {componentStyle.cotnainer} >
                   <ScrollView style = {componentStyle.scrollView}>
                      <View style={componentStyle.logoView}>
                         <Image
                              source={require('../../assets/images/logo.png')}>
                          </Image>
                      </View>
                      
                      <View style={componentStyle.emailBackgroundView}>
                        <Text style={componentStyle.emailText}>Email</Text>
                        <TextInput style={componentStyle.emailInputField}
                           placeholder = '  Please Enter email'
                           autoCapitalize = 'none'
                           onChangeText = {(value)=>this.setState({
                               email : value
                           })}
                        /> 
                        <Text style={componentStyle.emailErrorMsg}>{this.state.emailErrormessage}</Text>                       
                      </View>
                    
                      <View style={componentStyle.passwordBackgroundView}>
                      <Text style={componentStyle.passwordText}>Password</Text>
                        <TextInput style={componentStyle.passwordInputField}
                           placeholder = '  Please Enter Password'
                           secureTextEntry={true}
                           onChangeText = {(value)=> this.setState({
                               password : value
                           })}
                        />
                        <Text style={componentStyle.passwordErrorMsg}>{this.state.passwordErrormessage}</Text>
                      </View>
                      
                      <View style={componentStyle.loginButtonBackgroundView}>
                      <TouchableOpacity
                        style={componentStyle.loginButtonView}             
                        onPress={() => this.onClickLoginButton({email: this.state.email, password: this.state.password})}
                        underlayColor='#fff'>
                        <Text style={componentStyle.loginButtonText}>Login</Text>
                      </TouchableOpacity>
                      </View>
                     
                      <View style={componentStyle.loginButtonBackgroundView}>
                      <TouchableOpacity
                        style={componentStyle.registerButtonView}
                        
                        onPress={() => this.onClickRegisterButton()}
                        underlayColor='#fff'>
                        <Text style={componentStyle.loginButtonText}>Register</Text>
                      </TouchableOpacity>
                      </View>
                   
                   </ScrollView>
            </View>
          );
     }
}
``
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    responseMsg: state.userLogin
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
