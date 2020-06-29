import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PickerModal from 'react-native-picker-modal-view';
import {Icon} from 'react-native-elements';
import {widthPercentageToDP, heightPercentageToDP} from '../styles/responsive';
import _ from 'lodash';

const ListPicker = props => {
  const [currentSelected, setCurrentSelected] = useState(null);

  const handleSelect = selectedItem => {
   
    if (!_.isEmpty(selectedItem)){
       setCurrentSelected(selectedItem);
        //props.onChange()
    }
   
   ;
  };

  const RenderSelectButton = (disabled, selected, showModal) => (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.ButtonStyle, props.containerStyle || {}]}
      onPress={showModal}
      activeOpacity={0.5}>
      {currentSelected ? (
        <Text style={{fontSize: 16, paddingLeft: 5}}>
          {currentSelected.Name}
        </Text>
      ) : (
        <Text style={{fontSize: 16, paddingLeft: 5, color: '#9e9d9d'}}>
          {props.placeHolder || props.title || 'Select..'}
        </Text>
      )}
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
  );


 

  return (
    <View
      style={[{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',

        marginHorizontal: widthPercentageToDP('2%'),
      },props.holderContainerStyle || {}]}>
       {props.hideTitle?null:<Text style={{fontSize: 16, marginRight: 7}}>{props.title}</Text>} 
      <PickerModal
        renderSelectView={RenderSelectButton}
        onSelected={handleSelect}
        //onClosed={() => {}}
        //onBackButtonPressed={() => {}}
        items={props.listData || []}
        showToTopButton={true}
        selectPlaceholderText={'Choose one...'}
        searchPlaceholderText={'Search...'}
        requireSelection={false}
        autoSort={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexGrow: 1,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    paddingVertical: 8,
    marginVertical: heightPercentageToDP('.5%'),
  },
});

export default ListPicker;
