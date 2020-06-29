import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {Button, Divider, CheckBox} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../common/styles/responsive';
import DatePicker from '../../common/components/DatePicker';
import ListPicker from '../../common/components/ListPicker';

import moment from 'moment';
import MainStyles from '../../common/styles/styles.main';

const HotelItem = props => {
  return props.fieldset.map((itmi, i) => (
    <View key={i}>
      <ListPicker title="Hotel Name:" listData={props.hotelListData} />
      <DatePicker
        title="Check-In:&nbsp;&nbsp;&nbsp;&nbsp;"
        onChange={() => {}}
      />
      <DatePicker title="Check-Out:&nbsp;" onChange={() => {}} />
      <Divider style={{marginVertical:heightPercentageToDP('.7%')}} />
    </View>
  ));
};

const formScreen_Hotels = props => {
  const [hotelItems, setHotelItems] = useState([]);
  const [acceptedCheck, setAcceptedCheck] = useState(false);

  const hotelListData = [
    {
      Name: 'Vila moratuwa',
      Value: 'Vila moratuwa',
      Id: 1,
    },
    {
      Name: 'Yoho shamaz galle',
      Value: 'Yoho shamaz galle',

      Id: 2,
    },
    {
      Name: 'Hotel ebay colombo',
      Value: 'hotel ebay colombo',

      Id: 3,
    },
    {
      Name: 'Oyo fullwhite mathara',
      Value: 'Oyo fullwhite mathara',

      Id: 4,
    },
    {
      Name: 'Hotel Kalifornia Kurunagala',
      Value: 'Hotel Kalifornia Kurunagala',

      Id: 5,
    },
    {
      Name: 'Lulu Apartments Colombo',
      Value: 'Lulu Apartments Colombo',

      Id: 6,
    },
    {
      Name: 'Hotel BlackPerl beruwala',
      Value: 'Hotel BlackPerl beruwala',

      Id: 7,
    },
    {
      Name: 'Hilton Colombo',
      Value: 'Hilton Colombo',

      Id: 8,
    },
  ];

  useEffect(() => {
    setHotelItems([
      ...hotelItems,
      ...[
        {call: 'station one', frequency: '000'},
        {call: 'station two', frequency: '001'},
      ],
    ]);
  }, []);

  //add hotel new hotel detail set
  const addNewHotelset = () => {
    setHotelItems([
      ...hotelItems,
      ...[{call: 'station two', frequency: '001'}],
    ]);
  };

  return (
    <View style={MainStyles.container}>
      <View style={{flex: 0.5}}>
        <KeyboardAwareScrollView
          persistentScrollbar={true}
          extraScrollHeight={-150}
          contentContainerStyle={{flexGrow: 1}}
          enableOnAndroid={true}>
          <Text style={MainStyles.innerTitle}>Your Travel Itinerary</Text>

          <HotelItem hotelListData={hotelListData} fieldset={hotelItems} />
        </KeyboardAwareScrollView>
      </View>

      <View style={[{flex: 0.34, alignItems: 'center'}]}>
        <Button
          onPress={addNewHotelset}
          title="ADD ANOTHER"
          type="outline"
          buttonStyle={[
            MainStyles.button,
            {marginTop: heightPercentageToDP('2%')},
          ]}
          titleStyle={MainStyles.buttonText}
        />
        <View
          style={{
            alignItems: 'center',
            marginTop: heightPercentageToDP('1%'),
          }}>
          <Text style={Styles.centerText}>Itinerary submitted for</Text>
          <Text style={Styles.centerText}>0 of 5 days</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <CheckBox
            center
            title="I confirm that I have paid and made bookings 
            at all the hotels selected above and I confirm that my visa may be cancelled or I may be sent to mandatory quarantine if I deviate from this 
             itinerary"
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
      <View style={{flex:.16, alignSelf: 'stretch',justifyContent:'center'}}>
          <View style={[MainStyles.buttonContainer,]}>
            <Button
              onPress={() => props.navigation.navigate('formScreen_trvlInfo')}
              title="BACK"
              type="outline"
              buttonStyle={[MainStyles.button, {}]}
              titleStyle={MainStyles.buttonText}
            />
            <Button
              onPress={() => props.navigation.navigate('formScreen_tvlagent')}
              title="NEXT"
              type="outline"
              buttonStyle={MainStyles.button}
              titleStyle={MainStyles.buttonText}
            />
          </View>
        </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  centerText: {fontWeight: 'bold', fontSize: 20},
});

export default formScreen_Hotels;
