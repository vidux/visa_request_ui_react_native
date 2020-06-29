import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {Icon} from 'react-native-elements';
import {widthPercentageToDP, heightPercentageToDP} from '../styles/responsive';

const DatePicker = props => {
  const DATE_FORMAT = props.dateFormat || 'DD/MM/YYYY';
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleDateConfirm = date => {
    hideDatePicker();
    setCurrentDate(date);
    props.onChange(date);
   
  };

  const showDatePicker = () => {
    if (!isDatePickerVisible) {
      setDatePickerVisibility(true);
    }
  };
  const hideDatePicker = () => setDatePickerVisibility(false);

  
  return (
    <View
      style={[{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',

        marginHorizontal: widthPercentageToDP('2%'),
      },props.holderContainerStyle || {}]}>
      <Text style={{fontSize: 16, marginRight: 7}}>{props.title}</Text>

      <TouchableOpacity
        style={[
          {
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
          props.containerStyle || {},
        ]}
        onPress={showDatePicker}
        activeOpacity={0.5}>
        <Text style={{fontSize: 16, paddingLeft: 5}}>
          {moment(currentDate).format(DATE_FORMAT)}
        </Text>
        <View
          style={{
            backgroundColor: '#e4e6e8',
            paddingHorizontal: 3,
            position: 'absolute',
            right: 0,
            paddingVertical: 5,
          }}>
          <Icon name="date-range" type="material" size={30} />
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        date={currentDate}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        
      />
    </View>
  );
};

export default DatePicker;
