import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Markdown from 'react-native-markdown-display';

import MainStyles from '../../common/styles/styles.main';

export default (formScreen_Terms = props => {
  const copy = `
  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  2. Fusce et metus non diam iaculis sodales sit amet vitae odio. Suspendisse non nulla ex. Morbi vel dui semper mi mollis efficitur.
  3. Nam pellentesque tellus venenatis consequat eleifend. Sed at velit nec justo scelerisque molestie. Morbi sodales enim nec ligula ullamcorper malesuada.
  4. Morbi at molestie justo. Vivamus venenatis finibus cursus. Cras et nulla dui. 
  5. Sed blandit nisl nisi, quis facilisis leo hendrerit vitae. Quisque at blandit mi, a blandit mi.
  6. Pellentesque efficitur enim sit amet hendrerit ullamcorper. Maecenas sed egestas erat. Fusce convallis ante at erat commodo, at lacinia dui sodales. 
  7. Donec euismod vehicula elit, sit amet efficitur leo. Duis ultrices vestibulum erat quis accumsan. Ut volutpat ligula velit, at volutpat tortor ultrices at. 
  8. Praesent blandit ligula et aliquam finibus.
  9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  10. Fusce et metus non diam iaculis sodales sit amet vitae odio. Suspendisse non nulla ex. Morbi vel dui semper mi mollis efficitur.
  11. Nam pellentesque tellus venenatis consequat eleifend. Sed at velit nec justo scelerisque molestie. Morbi sodales enim nec ligula ullamcorper malesuada.
  12. Morbi at molestie justo. Vivamus venenatis finibus cursus. Cras et nulla dui. 
  13. Sed blandit nisl nisi, quis facilisis leo hendrerit vitae. Quisque at blandit mi, a blandit mi.
  14. Pellentesque efficitur enim sit amet hendrerit ullamcorper. Maecenas sed egestas erat. Fusce convallis ante at erat commodo, at lacinia dui sodales. 
  15. Donec euismod vehicula elit, sit amet efficitur leo. Duis ultrices vestibulum erat quis accumsan. Ut volutpat ligula velit, at volutpat tortor ultrices at. 
  16. Praesent blandit ligula et aliquam finibus.
  `;

  return (
    <View style={MainStyles.container}>
      <Text style={{fontSize: 20}}>Terms and Conditions</Text>
      <View style={{flex: 0.8}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{flexGrow: 1}}>
          <Markdown>{copy}</Markdown>
        </ScrollView>
      </View>

      <View style={[{flex: 0.2}, MainStyles.buttonContainer]}>
        <Button
          onPress={() => props.navigation.goBack()}
          title="I Don't Agree"
          type="outline"
          buttonStyle={MainStyles.button}
          titleStyle={MainStyles.buttonText}
        />

        <Button
          onPress={() => props.navigation.navigate('formScreen_PeInfo')}
          title="I Agree"
          type="outline"
          buttonStyle={MainStyles.button}
          titleStyle={MainStyles.buttonText}
        />
      </View>
    </View>
  );
});
