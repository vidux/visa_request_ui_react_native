import React, {useState, useEffect} from 'react';
import {
  Switch,
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, Divider, CheckBox, Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../common/styles/responsive';
import DatePicker from '../../common/components/DatePicker';
import ListPicker from '../../common/components/ListPicker';

import moment from 'moment';
import MainStyles from '../../common/styles/styles.main';

const formScreen_InfoReview = props => {
  const [relationItems, setHotelItems] = useState([]);
  const [acceptedCheck, setAcceptedCheck] = useState(false);

  const [travelWithLk, setTravelWithLk] = useState(false);

  useEffect(() => {}, []);

  return (
    <View style={MainStyles.container}>
      <View style={{flex: 0.4}}>
        <Text style={MainStyles.innerTitle}>Review your information</Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: heightPercentageToDP('3%'),
            flexDirection: 'row',
          }}
        />
        <View>
          <Text>
            Please review below all the information you have entered. If there
            are changes to be done, press the "Back" button below and make the
            necessary changes.
          </Text>
          <Text style={{marginTop: 10}}>
            Once submitted, you will not be able to edit the information but you
            can submit a new application if required.
          </Text>
          <Text style={{marginTop: 10}}>
            Submitting wrong information may result in your visa application
            being rejected by the Department of Immigration and Emigration.
          </Text>
        </View>
      </View>
      <View style={{flex: 0.35}}>
     <ScrollView>
       <Text>Applicant details</Text>
       <View style={{flexDirection:'row'}}>
       <Text>First Name</Text>
       <Text>Jhone</Text>
       </View>
       <View style={{flexDirection:'row'}}>
       <Text>Other Names</Text>
       <Text>Peter</Text>
       </View>
       <View style={{flexDirection:'row'}}>
       <Text>Phone No</Text>
       <Text>9809890890890</Text>
       </View>
     </ScrollView>

        </View>

      <View style={[{flex: 0.25, alignItems: 'center'}]}>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            center
            title="I confirm that all information provided is true and correct
            and that I understand any wrong information provided will
            be a reason for my visa application to be rejected."
            iconType="material-community"
            checkedIcon="check-box-outline"
            uncheckedIcon="checkbox-blank-outline"
            textStyle={{fontWeight: undefined, color: undefined}}
            containerStyle={{backgroundColor: undefined, borderWidth: 0}}
            checked={acceptedCheck}
            checkedColor="black"
            onPress={() => setAcceptedCheck(!acceptedCheck)}
          />
        </View>
      </View>
      <View
        style={{flex: 0.15, alignSelf: 'stretch', justifyContent: 'center'}}>
        <View style={[MainStyles.buttonContainer]}>
          <Button
            onPress={() => props.navigation.navigate('formScreen_SlRelations')}
            title="BACK"
            type="outline"
            buttonStyle={[MainStyles.button, {}]}
            titleStyle={MainStyles.buttonText}
          />
          <Button
            onPress={() => {props.navigation.navigate('formScreen_reference')}}
            title="SUBMIT"
            type="outline"
            buttonStyle={[MainStyles.button,{backgroundColor:'rgb(58, 164, 211)'}]}
            titleStyle={MainStyles.buttonText}
          />
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default formScreen_InfoReview;
