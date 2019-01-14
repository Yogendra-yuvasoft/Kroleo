import React, {Component} from 'react';
import {
  Alert,
	View,
	Text,
	TextInput,
	ScrollView,
  TouchableOpacity
} from 'react-native';
import componentStyle from './Style'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ActionCreators } from '../../actions';
import { Actions } from 'react-native-router-flux';

class Register extends Component {

  constructor(props){
   super(props);
   this.state = {
       firstName: '',
       lastName: '',
       email: '',
       conformEmail: '',
       password: '',
       conformPassword: '',
       firstNameErrorMsg: '',
       lastNameErrorMsg: '',
       emailErrormessage: '',
       conformEmailErrormessage: '',
       passwordErrorMsg: '',
       conformPaswordErrormessage: ''
   }

  }

  clickOnRegister(data){

    if (this.state.firstName == '' && this.state.lastName == '' && this.state.email == '' && this.state.conformEmail == '' && this.state.password == '' && this.state.conformPassword == ''){
      this.setState({
        firstNameErrormessage: 'First name can not be blank', 
        lastNameErrorMsg: 'Last name can not be blank',
        emailErrormessage: 'Email can not be blank',
        conformEmailErrormessage: 'Conform Email can not be blank',
        passwordErrormessage: 'Password can not be blank',
        conformPaswordErrormessage: 'Conform Password can not be blank'
      })
    } else if (this.state.firstName == ''){
      this.setState({firstNameErrormessage :'First name can not be blank'})
    } else if (this.state.lastName == '') {
      this.setState({lastNameErrorMsg: 'Last name can not be blank'})
    } else if (this.state.email == ''){
      this.setState({emailErrormessage: 'Email can not be blank'})
    } else if (this.state.conformEmail == '') {
      this.setState({conformEmailErrormessage: 'Conform Email can not be blank'})
    } else if (this.state.password == '') {
      this.setState({passwordErrormessage: 'Password can not be blank'})
    } else if (this.state.conformPassword == '') {
      this.setState({passwordErrormessage: 'Conform Password can not be blank'})
    } else if (this.state.email != this.state.conformEmail) {
      this.setState({conformEmailErrormessage: 'Please check email not Match'})
    } else if (this.state.password != this.state.conformPassword) {
      this.setState({conformPaswordErrormessage: 'Conform Password can not be blank'})
    } else {
       
       this.props.userRegistration(data);
    }
  }

	render(){
		return(
           <View style = {componentStyle.container}>
             <ScrollView >
                <View style = {componentStyle.firstNameView}>
                   <Text style = {componentStyle.firstNameText}>First Name</Text>
                   <TextInput style = {componentStyle.firstNameInputField}
                      placeholder = '  Enter first name'
                      placeholderTextColor= 'rgba(137,137,137, 0.44)' 
                           autoCapitalize = 'none'
                           onChangeText = {(value)=>this.setState({
                               firstName : value
                           })}
                   />
                   <Text style={componentStyle.firstNameErrorMsg}>{this.state.firstNameErrormessage}</Text> 
                </View> 

                <View style = {componentStyle.lastNameView}>
                   <Text style = {componentStyle.lastNameText}>Last Name</Text>
                   <TextInput style = {componentStyle.lastNameInputField}
                      placeholder = '  Enter last name'
                      placeholderTextColor= 'rgba(137,137,137, 0.44)'
                           autoCapitalize = 'none'
                           onChangeText = {(value)=>this.setState({
                               lastName : value
                           })}
                   />
                   <Text style={componentStyle.lastNameErrorMsg}>{this.state.lastNameErrorMsg}</Text> 
                </View> 
                
                <View style = {componentStyle.emailView}>
                    <Text style = {componentStyle.emailText}>Email Address</Text> 
                    <TextInput style = {componentStyle.emailInputField} 
                       placeholder = '  Enter email'
                       placeholderTextColor= 'rgba(137,137,137, 0.44)'
                           autoCapitalize = 'none'
                           onChangeText = {(value)=>this.setState({
                               email : value
                           })}
                   /> 
                   <Text style={componentStyle.emailErrorMsg}>{this.state.emailErrormessage}</Text>
                </View> 

                <View style = {componentStyle.reEnterEmailView}>
                    <Text style = {componentStyle.reEnterEmailText}>Re-enter Email address</Text> 
                    <TextInput style = {componentStyle.reEnterEmailInputField} 
                       placeholder = '  Re enter Email Address'
                       placeholderTextColor= 'rgba(137,137,137, 0.44)'
                           autoCapitalize = 'none'
                           onChangeText = {(value)=>this.setState({
                               conformEmail : value
                           })}
                   /> 
                   <Text style={componentStyle.conformEmailErrorMsg}>{this.state.conformEmailErrormessage}</Text>
                </View> 
                
                <View style = {componentStyle.passwordView}>
                    <Text style = {componentStyle.passwordText}>Password</Text> 
                    <TextInput style = {componentStyle.passwordInputField} 
                       placeholder = '  Enter Password'
                       placeholderTextColor= 'rgba(137,137,137, 0.44)'
                           autoCapitalize = 'none'
                           onChangeText = {(value)=>this.setState({
                               password : value
                           })}
                   /> 
                   <Text style={componentStyle.passwordErrorMsg}>{this.state.passwordErrormessage}</Text>
                </View> 
                
                <View style = {componentStyle.reEnterPasswordView}>
                    <Text style = {componentStyle.reEnterPasswordText}>Re-enter Password</Text> 
                    <TextInput style = {componentStyle.reEnterPasswordInputField}
                       placeholder = '  Re enter Password'
                       placeholderTextColor= 'rgba(137,137,137, 0.44)'
                           autoCapitalize = 'none'
                           onChangeText = {(value)=>this.setState({
                               conformPassword : value
                           })}
                   /> 
                   <Text style={componentStyle.conformPasswordErrorMsg}>{this.state.conformPaswordErrormessage}</Text>
                </View> 
                
                <View style = {componentStyle.registerButtonView}>
                    <TouchableOpacity
                        style={componentStyle.registerButtonView}
                        
                        onPress={() => this.clickOnRegister({firstname: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password, accountType:"job_seeker"})}
                        underlayColor='#fff'>
                        <Text style = {{marginTop: 5, textAlign: 'center', color: 'white', fontSize: 12}}>Register Here</Text>
                      </TouchableOpacity>
                </View> 

             </ScrollView>
           </View>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    responseRegister: state.userRegistration
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
