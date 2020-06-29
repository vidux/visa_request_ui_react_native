import { StyleSheet } from "react-native";
import {widthPercentageToDP, heightPercentageToDP,} from './responsive'
import Colors from "./styles.colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:widthPercentageToDP('6%'),
    },

    buttonText:{color: '#000', fontSize: 15},
    button:{borderColor: 'rgb(170,170,170)',paddingHorizontal:30},
    buttonContainer:{flexDirection:'row',justifyContent:'space-between',marginHorizontal:widthPercentageToDP("10%"),marginTop:heightPercentageToDP('2%')},
    innerTitle:{fontSize: 20},
    textField:{borderWidth:1,borderRadius:5,paddingLeft:10,borderColor:Colors.blackFontColor}

  

});
export default styles;
