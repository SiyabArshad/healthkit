import { View, Text,SafeAreaView,TextInput,TouchableOpacity,Button ,StyleSheet,ScrollView} from 'react-native'
import * as React from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons,MaterialCommunityIcons,EvilIcons } from '@expo/vector-icons';
import { Divider} from 'react-native-paper';
import colors from '../constants/colors'
export default function Progress() {
  return (
    <View>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:RFPercentage(1)}}>
        <Text style={{fontSize:RFPercentage(2.5),textTransform:"capitalize",fontWeight:"500",color:colors.black}}>My Progress</Text>
        <Ionicons name='settings' size={24} color={colors.blue}/>
      </View>
      <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
        <View style={{width:"48%",height:180,backgroundColor:colors.grey,paddingHorizontal:RFPercentage(3),paddingVertical:RFPercentage(3),borderRadius:RFPercentage(1),margin:RFPercentage(.5)}}>
            <Text style={{fontSize:RFPercentage(3),fontWeight:"300",marginBottom:RFPercentage(1),color:colors.black}}>Steps</Text>
            <Text style={{fontSize:RFPercentage(3),fontWeight:"300",marginBottom:RFPercentage(1),color:colors.black}}>...</Text>
        </View>
        <View style={{width:"48%",height:180,backgroundColor:colors.grey,paddingHorizontal:RFPercentage(3),paddingVertical:RFPercentage(3),borderRadius:RFPercentage(1),margin:RFPercentage(.5)}}>
        <Text style={{fontSize:RFPercentage(3),fontWeight:"300",marginBottom:RFPercentage(1),color:colors.black}}>Sleep</Text>
            <Text style={{fontSize:RFPercentage(3),fontWeight:"300",marginBottom:RFPercentage(1),color:colors.black}}>...</Text>
        </View>
        <View style={{width:"48%",height:180,backgroundColor:colors.grey,paddingHorizontal:RFPercentage(3),
        paddingVertical:RFPercentage(3),borderRadius:RFPercentage(1),margin:RFPercentage(.5),display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            <View>
            <Text style={{fontSize:RFPercentage(3),fontWeight:"300",marginBottom:RFPercentage(1),color:colors.black}}>Body Weight</Text>
            <Text style={{fontSize:RFPercentage(2),fontWeight:"300",color:colors.darkgrey,marginBottom:RFPercentage(1)}}>18 Feb 2023</Text>
            </View>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-end"}}>
                <Text style={{fontWeight:"bold",fontSize:RFPercentage(3),color:colors.black}}>252</Text>
                <Text style={{color:colors.darkgrey,marginLeft:RFPercentage(.5)}}>lbs</Text>
                </View>
        
        </View>
        <View style={{width:"48%",height:180,backgroundColor:colors.grey,paddingHorizontal:RFPercentage(3),paddingVertical:RFPercentage(3),borderRadius:RFPercentage(1),margin:RFPercentage(.5)}}>
        <Text style={{fontSize:RFPercentage(3),fontWeight:"300",marginBottom:RFPercentage(1),color:colors.black}}>Body Fat</Text>
            <Text style={{fontSize:RFPercentage(3),fontWeight:"300",marginBottom:RFPercentage(1),color:colors.black}}>...</Text>
        </View>
        
        <View style={{width:"48%",height:180,backgroundColor:colors.grey,paddingHorizontal:RFPercentage(3),
        paddingVertical:RFPercentage(3),borderRadius:RFPercentage(1),margin:RFPercentage(.5),display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            <View>
            <Text style={{fontSize:RFPercentage(3),fontWeight:"300",marginBottom:RFPercentage(1),color:colors.black}}>Photos</Text>
            </View>
                <View style={{display:"flex",flexDirection:"row"}}>
                <View style={{height:RFPercentage(6),width:RFPercentage(5),borderRadius:RFPercentage(.5),marginRight:RFPercentage(.5),backgroundColor:colors.darkgrey}}></View>
                <View style={{height:RFPercentage(6),width:RFPercentage(5),borderRadius:RFPercentage(.5),marginRight:RFPercentage(.5),backgroundColor:colors.darkgrey}}></View>
                <View style={{height:RFPercentage(6),width:RFPercentage(5),borderRadius:RFPercentage(.5),marginRight:RFPercentage(.5),backgroundColor:colors.darkgrey}}></View>
                </View>
        
        </View>

        <View style={{width:"48%",height:180,backgroundColor:colors.grey,paddingHorizontal:RFPercentage(3),paddingVertical:RFPercentage(3),borderRadius:RFPercentage(1),margin:RFPercentage(.5)}}>
        <Text style={{fontSize:RFPercentage(3),fontWeight:"300",marginBottom:RFPercentage(1),color:colors.black}}>Caloric Intake</Text>
            <Text style={{fontSize:RFPercentage(3),fontWeight:"300",marginBottom:RFPercentage(1),color:colors.black}}>...</Text>
        </View>
      </View>
      
    </View>
  )
}