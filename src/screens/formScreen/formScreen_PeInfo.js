import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import DatePicker from '../../common/components/DatePicker'
import CountryPicker from '../../common/components/CountryPicker'

import moment from 'moment';
import MainStyles from '../../common/styles/styles.main';



const formScreen_peInfo = props => {
  const [date, setDate] = useState(new Date());

  const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));
  

  return (
    <View style={MainStyles.container}>
      <View style={{flex: 0.8}}>
        <KeyboardAwareScrollView
        extraScrollHeight={-150}
       

          contentContainerStyle={{flexGrow: 1}}
          enableOnAndroid={true}>
          <Text style={MainStyles.innerTitle}>Your Personal Information</Text>
          <Input
            renderErrorMessage={false}
            containerStyle={{marginTop: 10}}
            inputStyle={Styles.textInputStyle}
            inputContainerStyle={MainStyles.textField}
            placeholder="Fist Name"
            errorMessage=""
          />

          <Input
            containerStyle={Styles.textContainerStyle}
            inputStyle={Styles.textInputStyle}
            renderErrorMessage={false}
            inputContainerStyle={MainStyles.textField}
            placeholder="Last Name"
            errorMessage=""
          />
          <Input
            containerStyle={Styles.textContainerStyle}
            inputStyle={Styles.textInputStyle}
            renderErrorMessage={false}
            inputContainerStyle={MainStyles.textField}
            placeholder="Other Names / Given Names"
            errorMessage=""
          />

          <Input
            containerStyle={Styles.textContainerStyle}
            inputStyle={Styles.textInputStyle}
            renderErrorMessage={false}
            inputContainerStyle={MainStyles.textField}
            placeholder="Email Addresss"
            textContentType="emailAddress"
            errorMessage=""
          />

          <Input
            inputStyle={Styles.textInputStyle}
            renderErrorMessage={false}
            inputContainerStyle={MainStyles.textField}
            placeholder="Phone number (international format)"
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
            errorMessage=""
          />

          <CountryPicker />
          <Text style={MainStyles.innerTitle}>Your Passport Information</Text>
          <Input
            inputStyle={Styles.textInputStyle}
            renderErrorMessage={false}
            containerStyle={{marginTop: 10}}
            inputContainerStyle={MainStyles.textField}
            placeholder="Passport Number"
            errorMessage=""
          />
          <DatePicker  title="Expiry Date:" onChange={(date)=>{}} />
          <CountryPicker title="Country of issue" />

      
          
      
        </KeyboardAwareScrollView>
      </View>

      <View style={[{flex: 0.2, alignItems: 'center'}]}>
        <Button
          onPress={() => props.navigation.navigate('formScreen_trvlInfo')}
          title="NEXT"
          type="outline"
          buttonStyle={MainStyles.button}
          titleStyle={MainStyles.buttonText}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  textInputStyle: {padding: 0},
  textContainerStyle: {marginVertical: 10},
});

export default formScreen_peInfo;
