import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
    constructor(props) {
        super(props);
        this. state = {
            email: '',
            password: ''
         }
    }
  
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>
             {/* <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Login Form</Text> */}
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter User Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () =>{ 
                    if(this.state.email === "Sagi" && this.state.password ==='Sagi'){
                  this.props.navigation.replace('Main')}
                  else{
                      alert("Check")
                  }
                }
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity
             style = {styles.submitButton}
             onPress={
                 ()=>{ this.props.navigation.replace('SignUp')
              
             }}
             >
            <Text style = {styles.submitButtonText}> Register </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      textAlign:'center'
   },
   submitButton: {
      backgroundColor: '#2a92f8',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',

      textAlign:'center'
   }
})