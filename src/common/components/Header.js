import React from 'react';
import {Text, View, TouchableOpacity, Image,Keyboard} from 'react-native';
import {Button} from 'react-native-elements';
import {widthPercentageToDP, heightPercentageToDP} from '../styles/responsive';
import {showHideModal} from '../../screens/formScreen/cancelModal';

const Header = props => {
  const [showModal, setShowModal] = showHideModal.use();

  const onButtonPress =()=>{
    setShowModal(true);
    Keyboard.dismiss();
  }

  return (
    <View
      style={
        props.style || {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: widthPercentageToDP('5%'),
          marginTop: heightPercentageToDP('2%'),
        }
      }>
      <Image
        resizeMode="contain"
        source={require('../../assets/visit_slflat.png')}
        style={{
          width: widthPercentageToDP('55%'),
          height: widthPercentageToDP('11%'),
        }}
      />
      <Button
        onPress={onButtonPress}
        title="CANCEL"
        type="outline"
        buttonStyle={{borderColor: 'rgb(170,170,170)'}}
        titleStyle={{color: '#000', fontSize: 15}}
      />
    </View>
  );
};

export default Header;
