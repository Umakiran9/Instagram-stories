
import React from 'react';
import { StyleSheet,Text,  View } from 'react-native';

import AppNavigator from './Navigation/ScreenNavigation'




export default function App() {
  return (
    <View style={styles.container}>
     
   <Text style={{fontWeight:'bold',fontSize:30,textAlign:'center'}}>Instagram</Text>
   <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:25,marginHorizontal:0,
   
   
    
  },
});
