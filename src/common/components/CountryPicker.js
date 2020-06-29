import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Icon} from 'react-native-elements';
import {widthPercentageToDP, heightPercentageToDP} from '../styles/responsive';
import CountryPicker from 'react-native-country-picker-modal'


const DatePicker = props => {

  const [currentCountry, setCurrentCountry] = useState(null);
  const [isCountryPickerVisible, setCountryPickerVisibility] = useState(false);

  const handleConfirm = country => {
    hideCountryPicker();
    
    setCurrentCountry(country.name);
    //props.onChange(date);
   
  };

  const showCountryPicker = () => {
    if (!isCountryPickerVisible) {
      setCountryPickerVisibility(true);
    }
  };
  const hideCountryPicker = () => setCountryPickerVisibility(false);


  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',

        marginHorizontal: widthPercentageToDP('2%'),
      }}>
      
      <TouchableOpacity
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'stretch',
            flexGrow: 1,
            justifyContent: 'space-between',
            borderWidth: 1,
            borderRadius: 5,
            overflow: 'hidden',
            paddingVertical: 8,
            marginVertical: 10,
          },
          props.containerStyle || {},
        ]}
        onPress={showCountryPicker}
        activeOpacity={0.5}>
        
        {currentCountry?<Text style={{fontSize: 16, paddingLeft: 5}}>{currentCountry}</Text>:<Text style={{fontSize: 16, paddingLeft: 5,color:'#9e9d9d'}}>{props.title ||"Country / Nationality" }</Text>}
        <View
          style={{
            backgroundColor: '#e4e6e8',
            paddingHorizontal: 10,
            position: 'absolute',
            right: 0,
            paddingVertical: 12,
          }}>
          <Icon name="caretdown" type="antdesign" size={10} />
        </View>
      </TouchableOpacity>

      <CountryPicker
        placeholder={' '}
        withFilter={true}
        visible={isCountryPickerVisible}
        onClose={hideCountryPicker}
        onSelect={handleConfirm}
        
      />
          
    </View>
  );
};

export default DatePicker;
