import React, {useState, useEffect} from 'react';
import {
  Switch,
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Linking,
} from 'react-native';
import {Button, Divider, CheckBox, Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../common/styles/responsive';

import MainStyles from '../../common/styles/styles.main';

const formScreen_reference = props => {
  const [relationItems, setHotelItems] = useState([]);
  const [acceptedCheck, setAcceptedCheck] = useState(false);

  const [travelWithLk, setTravelWithLk] = useState(false);

  useEffect(() => {}, []);

  return (
    <View style={MainStyles.container}>
      <View style={{flex: 0.4}}>
        <Text style={MainStyles.innerTitle}>Thank you</Text>
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
            Thank you for submitting your travel itinerary to apply for a
            tourist visa.
          </Text>
          <Text style={{marginTop: 10}}>
            A copy of the information you submitted together with your reference
            number has also been emailed to you.
          </Text>
          <Text style={{marginTop: 10}}>
            Please proceed to{' '}
            <Text
              style={{color: 'blue'}}
              onPress={() => Linking.openURL('http://www.travelauth.example.com')}>
              http://travelauth
            </Text>{' '}
            and apply for your visa.
          </Text>
          <Text style={{marginTop: 10}}>
            When asked for your itinerary reference number, please enter the
            code given below.
          </Text>
        </View>
      </View>
      <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>Your reference number</Text>
        <Text style={{fontWeight: 'bold', fontSize: 27}}>
          R1-0001-0001-0001
        </Text>
      </View>

      <View style={[{flex: 0.3, alignItems: 'center'}]}>
        <Text>
          We hope you have a pleasant stay in our country during your trip.
        </Text>
        <Text style={{marginTop: 10}}>
          To contact  Tourism Development Authority, email us via{' '}
          <Text
            style={{color: 'blue'}}
            onPress={() => Linking.openURL('mailto:info@yourtravel.co')}>
            info@yourtravel.travel
          </Text> {' '}
          or call us on
          <Text style={{fontWeight: 'bold'}}>
            0087 888 87878 / 0976 887 8898787
          </Text>
          of when in our country dial{' '}
          <Text style={{fontWeight: 'bold'}}>1912</Text> to connect to the 27x7
          tourist hotline.
        </Text>
      </View>
      <View
        style={{flex: 0.15, alignSelf: 'stretch', justifyContent: 'center'}}>
        <View style={[MainStyles.buttonContainer]}>
          <Button
            onPress={() => {}}
            title="Resend email"
            type="outline"
            buttonStyle={[MainStyles.button, {}]}
            titleStyle={MainStyles.buttonText}
          />
          <Button
            onPress={() => {
              props.navigation.navigate('startScreen');
            }}
            title="FINISH"
            type="outline"
            buttonStyle={[MainStyles.button]}
            titleStyle={[MainStyles.buttonText, {fontWeight: 'bold'}]}
          />
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default formScreen_reference;
