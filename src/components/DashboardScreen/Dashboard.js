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
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import componentStyle from './Style';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ActionCreators } from '../../actions';
import { Actions } from 'react-native-router-flux';

class Signin extends Component {

  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     header: () => null
  //   }
  // };


   render(){

      return(
              <View style={componentStyle.cotnainer}> 
                    
              </View>

        );
   }
}

