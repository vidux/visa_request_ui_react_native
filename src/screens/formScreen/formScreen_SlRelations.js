import React, {useState, useEffect} from 'react';
import {Switch, View, Text, StyleSheet,ScrollView,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import {Button, Divider, CheckBox, Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../common/styles/responsive';
import DatePicker from '../../common/components/DatePicker';
import ListPicker from '../../common/components/ListPicker';
import DismissKeyboard from '../../common/components/DismissKeyboard';

import MainStyles from '../../common/styles/styles.main';



const HotelItem = props => {
  return props.fieldset.map((itmi, i) => (
    <View key={i} style={{}}>
      <View style={Styles.textrow}>
        <View style={[Styles.inputWrap]}>
          <Input
            containerStyle={Styles.inputContainStyle}
            inputStyle={Styles.textInputStyle}
            renderErrorMessage={false}
            inputContainerStyle={[MainStyles.textField]}
            placeholder="First Name"
            errorMessage=""
          />
        </View>

        <View style={Styles.inputWrap}>
          <Input
            containerStyle={Styles.inputContainStyle}
            inputStyle={Styles.textInputStyle}
            renderErrorMessage={false}
            inputContainerStyle={MainStyles.textField}
            placeholder="Last Name"
            errorMessage=""
          />
        </View>
      </View>
      <View style={Styles.textrow}>
        <View style={[Styles.inputWrap]}>
          <Input
            containerStyle={Styles.inputContainStyle}
            inputStyle={Styles.textInputStyle}
            renderErrorMessage={false}
            keyboardType="phone-pad"
            inputContainerStyle={[MainStyles.textField]}
            placeholder="Phone Number"
            errorMessage=""
          />
        </View>

        <View style={Styles.inputWrap}>
        <ListPicker  placeHolder="Relationship" listData={props.listData} holderContainerStyle={{marginHorizontal:0,marginLeft:2}} hideTitle={true}/>
        </View>
      </View>
      <View style={Styles.textrow}>
        <View style={[Styles.inputWrap]}>
          <Input
            containerStyle={Styles.inputContainStyle}
            inputStyle={Styles.textInputStyle}
            renderErrorMessage={false}
            inputContainerStyle={[MainStyles.textField]}
            placeholder="Passport Number"
            errorMessage=""
          />
        </View>
      </View>
         <View style={Styles.textrow}>
        <View style={[Styles.inputWrap]}>
        <DatePicker
        title="Expiry Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" holderContainerStyle={{marginHorizontal:0,marginLeft:2}}
        onChange={() => {}}
      />
        </View>
      </View>
      <Divider style={{marginVertical:heightPercentageToDP('.7%')}} />
    </View>
  ));
};

const formScreen_SlRelations = props => {
  const [relationItems, setHotelItems] = useState([]);
  const [acceptedCheck, setAcceptedCheck] = useState(false);

  const [travelWithLk, setTravelWithLk] = useState(false);

  const relationsListData = [
    {
      Name: 'Friend',
      Value: 'Friend',
      Id: 1,
    },
    {
      Name: 'Spouse',
      Value: 'Spouse',

      Id: 2,
    },
    {
      Name: 'Girlfriend/Boyfriend',
      Value: 'gobfirend',

      Id: 3,
    },
    {
      Name: 'Father',
      Value: 'Father',

      Id: 4,
    },
    {
      Name: 'Mother',
      Value: 'Mother',

      Id: 5,
    },
    {
      Name: 'Brother',
      Value: 'Brother',

      Id: 6,
    },
    {
      Name: 'Sister',
      Value: 'Sister',

      Id: 7,
    },
    {
      Name: 'ClassMate',
      Value: 'ClassMate',

      Id: 8,
    },
    {
      Name: 'Other Familiy Relative',
      Value: 'ofrelative',

      Id: 9,
    },
    {
      Name: 'Work Relatives',
      Value: 'wrrelatives',

      Id: 10,
    },
    {
      Name: 'Other',
      Value: 'Other',

      Id: 10,
    },

  ];

  useEffect(() => {
    setHotelItems([
      ...relationItems,
      ...[
        {call: 'station one', frequency: '000'},
       
      ],
    ]);
  }, []);

  //add hotel new hotel detail set
  const AddRelationSet = () => {
    setHotelItems([
      ...relationItems,
      ...[{call: 'station two', frequency: '001'}],
    ]);
  };

  return (
    <View style={MainStyles.container}>
      <View style={{flex: 0.4}}>
        <Text style={MainStyles.innerTitle}>
          Are you travelling with a person with this country?
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: heightPercentageToDP('3%'),
            flexDirection: 'row',
          }}>
          <Text>No</Text>
          <Switch
            value={travelWithLk}
            onValueChange={() => setTravelWithLk(!travelWithLk)}
            style={{marginHorizontal: 20}}
          />
          <Text>Yes</Text>
        </View>
        <DismissKeyboard>
        <View >
          <Text>
            If you are travelling with an immediate family member who is a Our country passport holder, please enter their details here.
          </Text>
          <Text style={{marginTop: 10}}>
            <Text style={{fontWeight: 'bold'}}>Note</Text> that your family
            members also have to be staying with you during the trip. If they
            are not, they will be subject to regular quarantine guidelines and
            be sent for 14 days of quarantine as per Ministry of Health
            guidelines.
          </Text>
        </View>
        </DismissKeyboard>
      </View>
      <View style={{flex: 0.35}}>
        <KeyboardAvoidingView>
          <ScrollView persistentScrollbar={true} >
          <HotelItem listData={relationsListData} fieldset={relationItems} />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>

      <View style={[{flex: 0.25, alignItems: 'center'}]}>
        <Button
          onPress={AddRelationSet}
          title="ADD ANOTHER"
          type="outline"
          buttonStyle={[
            MainStyles.button,
            {marginTop: heightPercentageToDP('2%')},
          ]}
          titleStyle={MainStyles.buttonText}
        />

        <View style={{flexDirection: 'row'}}>
          <CheckBox
            center
            title="I confirm that the above mentioned our country
            passport holders will be travelling together with me
            and that they will also be staying at the hotels that
            I have"
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
            onPress={() => props.navigation.navigate('formScreen_tvlagent')}
            title="BACK"
            type="outline"
            buttonStyle={[MainStyles.button, {}]}
            titleStyle={MainStyles.buttonText}
          />
          <Button
            onPress={() => props.navigation.navigate('formScreen_InfoReview')}
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
  textInputStyle: {padding: 0},
  textContainerStyle: {marginVertical: 10},
  inputContainStyle: {alignItems: 'stretch', paddingHorizontal: 2},

  textrow: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 2,
  },
  inputWrap: {
    flex: 1,
    marginBottom: 0,
  },
});

export default formScreen_SlRelations;
