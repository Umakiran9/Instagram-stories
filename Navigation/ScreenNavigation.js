import {  createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import Main from '../Components/Main'


const AppNavigator = createStackNavigator({
    LoginForm:Login 
     
    ,
    SignUp : {
        screen:SignUp
    },
    Main:{
      screen:Main
    }
  });
  
  export default createAppContainer(AppNavigator);