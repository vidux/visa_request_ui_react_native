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

const TravelAgentItem = props => {
  return props.fieldset.map((itmi, i) => (
    <View key={i}>
      <ListPicker title="Agency name:" placeHolder="Certified travel agents list" listData={props.listData} />
      <DatePicker
        title="From:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        onChange={() => {}}
      />
      <DatePicker title="To:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" onChange={() => {}} />
      <Divider style={{marginVertical:heightPercentageToDP('.7%')}} />
    </View>
  ));
};

const formScreen_tvlagent = props => {
  const [traveAgntItems, setTraveAgntItems] = useState([]);
  
  const hotelListData = [
    {
      Name: 'VM Travels',
      Value: 'VM Travels',
      Id: 1,
    },
    {
      Name: 'Norico Lu SL',
      Value: 'Norico Lu SL',

      Id: 2,
    },
    {
      Name: 'Green Travels',
      Value: 'Green Travels',

      Id: 3,
    },
    {
      Name: 'Wonder of Asia Travels',
      Value: 'Wonder of Asia Travels',

      Id: 4,
    },
    {
      Name: 'Miko Norika Travel Agents',
      Value: 'Miko Norika Travel Agents',

      Id: 5,
    },
    {
      Name: 'Nania Osaka Travels',
      Value: 'Nania Osaka Travels',

      Id: 6,
    },
    {
      Name: 'Hotel BlackPerl ',
      Value: 'Hotel BlackPerl ',

      Id: 7,
    },
    {
      Name: 'Black Lotus Travels',
      Value: 'Black Lotus Travels ',

      Id: 8,
    },
  ];

  useEffect(() => {
    setTraveAgntItems([
      ...traveAgntItems,
      ...[
        {call: 'station one', frequency: '000'},
        {call: 'station two', frequency: '001'},
      ],
    ]);
  }, []);

  //add hotel new hotel detail set
  const addNewTAgentSet = () => {
    setTraveAgntItems([
      ...traveAgntItems,
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
          <Text style={MainStyles.innerTitle}>Select your local travel agent</Text>

          <TravelAgentItem listData={hotelListData} fieldset={traveAgntItems} />
        </KeyboardAwareScrollView>
      </View>

      <View style={[{flex: 0.5, alignItems: 'center'}]}>
        <Button
          onPress={addNewTAgentSet}
          title="ADD ANOTHER"
          type="outline"
          buttonStyle={[
            MainStyles.button,
            {marginTop: heightPercentageToDP('2%')},
          ]}
          titleStyle={MainStyles.buttonText}
        />
      

       
        <View style={{alignSelf: 'stretch'}}>
          <View style={[MainStyles.buttonContainer]}>
            <Button
              onPress={() => props.navigation.navigate('formScreen_hotels')}
              title="BACK"
              type="outline"
              buttonStyle={[MainStyles.button, {}]}
              titleStyle={MainStyles.buttonText}
            />
            <Button
              onPress={() => props.navigation.navigate('formScreen_SlRelations')}
              title="NEXT"
              type="outline"
              buttonStyle={MainStyles.button}
              titleStyle={MainStyles.buttonText}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  centerText: {fontWeight: 'bold', fontSize: 20},
});

export default formScreen_tvlagent;
