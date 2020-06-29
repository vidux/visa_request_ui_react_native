import React from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../common/styles/responsive';
import Colors from '../../common/styles/styles.colors';
import MainStyles from '../../common/styles/styles.main';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

////show hide ridge state
import {newRidgeState} from 'react-ridge-state';
export const showHideModal = newRidgeState(false);
///
const Styles = StyleSheet.create({
  OuterTouchble: {
    position: 'absolute',
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%'),
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  shadows: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.44,
    shadowRadius: 8.27,

    elevation: 24,
  },
  buttonContainer: {
    height: 300,
    width: widthPercentageToDP('75%'),
    backgroundColor: Colors.whiteFontColor,
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  btnText: {fontWeight: 'bold', color: Colors.whiteFontColor, fontSize: 12},
});

const CancelModal = props => {
  const [showModal, setShowModal] = showHideModal.use();
  const navigation = useNavigation();

  if (!showModal) {
    return null;
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={Styles.OuterTouchble}
      onPress={() => setShowModal(false)}>
      <TouchableOpacity
        style={[Styles.buttonContainer, Styles.shadows]}
        activeOpacity={1}>
        <View style={{flex: 0.2, alignSelf: 'flex-start'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Are You Sure?</Text>
        </View>
        <View style={{flex: 0.8}}>
          <Text>
            Are you sure you want to cancel? If you cancel now, you will have to
            start again from the beginning.{' '}
          </Text>
          <Text style={{marginTop: 10}}>
            If you need to make an edit, close this warning by clicking "NO" and
            then click on the "Back" button to go back and edit your
            information.{' '}
          </Text>
        </View>
        <View style={{flex: 0.2, flexDirection: 'row', alignSelf: 'flex-end'}}>
          <Button
            onPress={() => {
              setShowModal(false);
            }}
            title="NO"
            type="outline"
            buttonStyle={[MainStyles.button, {marginRight: 5}]}
            titleStyle={MainStyles.buttonText}
          />
          <Button
            onPress={() => {
              setShowModal(false);
              navigation.navigate('startScreen');
            }}
            title="YES"
            type="solid"
            buttonStyle={[
              MainStyles.button,
              {backgroundColor: '#006ce5', marginLeft: 5},
            ]}
            titleStyle={{color: Colors.whiteFontColor}}
          />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CancelModal;
