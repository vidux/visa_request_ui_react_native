import React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../common/styles/responsive';

export default (App = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'stretch',
              marginTop: heightPercentageToDP('2%'),
            }}>
            <Image
              resizeMode="contain"
              source={require('../../assets/slt_logo.png')}
              style={{
                width: widthPercentageToDP('30%'),
                height: widthPercentageToDP('33%'),
                marginHorizontal: widthPercentageToDP('5%'),
              }}
            />
            <Image
              resizeMode="contain"
              source={require('../../assets/gov_logo.png')}
              style={{
                width: widthPercentageToDP('30%'),
                height: widthPercentageToDP('33%'),
                marginHorizontal: widthPercentageToDP('5%'),
              }}
            />
          </View>

          <View
            style={{
              flex: 0.27,
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'stretch',
              marginTop: heightPercentageToDP('2%'),
            }}>
            <Image
              resizeMode="contain"
              source={require('../../assets/travelers.png')}
              style={{
                width: widthPercentageToDP('80%'),
                height: widthPercentageToDP('50%'),
                marginHorizontal: widthPercentageToDP('5%'),
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.google.com/search?q=travel')}
            style={{
              flex: 0.2,

              justifyContent: 'center',
              alignSelf: 'stretch',
              alignItems: 'center',
              marginTop: heightPercentageToDP('2%'),
              backgroundColor: '#006e8c',
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                fontSize: widthPercentageToDP('6%'),
              }}>
              EXPLORE 
            </Text>

           
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('formScreen')}
            style={{
              flex: 0.2,

              justifyContent: 'center',
              alignSelf: 'stretch',
              alignItems: 'center',
              marginTop: widthPercentageToDP('6%',24),
              backgroundColor: '#006e8c',
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: widthPercentageToDP('6%',24),
                
              }}>
              CREATE YOUR ITINERARY FOR {'\n'}VISA APPLICATION
            </Text>

            <View
              style={{
                borderWidth: 1,
                borderRadius: 7,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ebebeb',
                paddingHorizontal: 10,
                paddingVertical: 4,
                width: widthPercentageToDP('40%'),
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>START</Text>
            </View>
          </TouchableOpacity>
         
        </View>
        
      </SafeAreaView>
    </>
  );
});
