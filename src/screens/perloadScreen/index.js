
import React,{useEffect} from 'react';
import {

  ActivityIndicator,
  View,
 
} from 'react-native';


export default  App = (props) => {

  useEffect(() => {
    //load perload fetchs and rederect to start screen
    props.navigation.replace('startScreen');
  }, []);

  return (
    <>
     
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}} >


            <ActivityIndicator animating />
           
     
    
          </View>
        
      
    </>
  );
};

