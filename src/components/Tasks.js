import { View, Text,SafeAreaView,TextInput,TouchableOpacity,Button ,StyleSheet,ScrollView} from 'react-native'
import * as React from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons,MaterialCommunityIcons,EvilIcons } from '@expo/vector-icons';
import { Divider} from 'react-native-paper';
import colors from '../constants/colors'

export default function Tasks({divider,dividercolor,radiobtncolor,trail,icon}) {
  return (
    <View style={{marginVertical:RFPercentage(1)}}>
    <View style={styles.tcont1}>
      <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <TouchableOpacity style={{height:RFPercentage(3),width:RFPercentage(3),borderRadius:RFPercentage(1.5),borderWidth:RFPercentage(.2),borderColor:radiobtncolor}}></TouchableOpacity>
        <View style={{marginLeft:RFPercentage(2)}}>
                <Text style={{fontSize:RFPercentage(2.2),color:colors.black}}>Legs Hamstring focus</Text>
                {
                    trail&&
                    <Text style={{fontSize:RFPercentage(1.8),marginTop:RFPercentage(.5),color:colors.darkgrey}}>{trail&&trail}</Text>
}        
        </View>
      </View>
      <Ionicons name={icon&&icon} size={24} color={colors.darkgrey} />
    </View>
    {
        divider&&
    <Divider style={{marginTop:RFPercentage(.3),backgroundColor:dividercolor&&dividercolor}} bold={true}/>
}
    </View>
  )
}
const styles=StyleSheet.create({
    tcont1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:RFPercentage(.5)
    }
})