import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import DatePicker from '../../common/components/DatePicker'
import CountryPicker from '../../common/components/CountryPicker'

import moment from 'moment';
import MainStyles from '../../common/styles/styles.main';



const formScreen_trvlInfo = props => {
  const [date, setDate] = useState(new Date());

  const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));
  

  return (
    <View style={MainStyles.container}>
      <ScrollView style={{flex: 1}} >
      
          <Text style={MainStyles.innerTitle}>Your Travel Information</Text>
          <View style={{marginTop:10}} />
          <DatePicker  title="Date of Arrival:" onChange={(date)=>{}} />
          <CountryPicker title="Arriving from (country)" />

          <Input
            containerStyle={Styles.textContainerStyle}
            inputStyle={Styles.textInputStyle}
            renderErrorMessage={false}
            inputContainerStyle={MainStyles.textField}
            placeholder="Arrival flight number"
            errorMessage=""
          />
          <DatePicker  title="Date of Departure:" onChange={(date)=>{}} />

          <Input
            containerStyle={Styles.textContainerStyle}
            inputStyle={Styles.textInputStyle}
            renderErrorMessage={false}
            inputContainerStyle={MainStyles.textField}
            placeholder="Departure flight number"
            errorMessage=""
          />

         

         
            <View style={[MainStyles.buttonContainer]}>
      <Button
          onPress={() => props.navigation.navigate('formScreen_PeInfo')}
          title="BACK"
          type="outline"
          buttonStyle={MainStyles.button}
          titleStyle={MainStyles.buttonText}
        />
        <Button
          onPress={() => props.navigation.navigate('formScreen_hotels')}
          title="NEXT"
          type="outline"
          buttonStyle={MainStyles.button}
          titleStyle={MainStyles.buttonText}
        />
      </View>
      
      </ScrollView>

    
    </View>
  );
};

const Styles = StyleSheet.create({
  textInputStyle: {padding: 0},
  textContainerStyle: {marginVertical: 10},
});

export default formScreen_trvlInfo;
