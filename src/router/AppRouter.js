import React, {Component} from 'react';import {AsyncStorage} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import SignIn from '../components/SigninScreen/Signin.js'
import Register from '../components/RegisterScreen/Register.js'

class Routes extends Component{
constructor(props){
	super(props);
	this.state = {
		isSignIn: false,
		isDashboard: false
	}
}

	componentWillMount(){
		let self = this
		AsyncStorage.getItem('isAlreadySignIn')
	    .then(function (value) {
	    	if (JSON.parse(value) !== null) {
          if (JSON.parse(value) == true) {
	    		
		      self.setState({
		      	isDashboard: true
		      });
	    } else {
	
		    	self.setState({
		      	isSignIn: true
		      });
		   }
		 }
	    })
	}

render(){
	return(
   	<Router>
      <Scene key = "root">
         <Scene key = "SignIn" component = {SignIn} title = "SignIn" initial = {this.state.isSignIn} />
         <Scene key = "Register" component = {Register} title = "Register" initial = {false}/>
      </Scene>
   </Router>
	);
}
}
   
export default Routes