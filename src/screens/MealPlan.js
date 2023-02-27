import { View, Text,SafeAreaView,TextInput,TouchableOpacity,Button ,StyleSheet,ScrollView,Image} from 'react-native'
import * as React from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
import colors from '../constants/colors';
import Tasks from '../components/Tasks';
import Progress from '../components/Progress';
import { AnimatedFAB } from 'react-native-paper';

export default function MealPlan() {
  return (
    <SafeAreaView style={styles.pardash}>
        
    <View style={styles.scr}>
    <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Image source={require("../../assets/reader.png")} resizeMode='cover' style={{height:60,width:40}}/>
        <Text style={{marginBottom:RFPercentage(.5)}}>"Stefen - Bulk 2023"</Text>
        <TouchableOpacity style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:colors.blue,fontSize:RFPercentage(2.6)}}>View</Text>
        </TouchableOpacity>
    </View>
    </View>
    <TouchableOpacity style={[styles.fabStyle,{height:50,width:50,borderRadius:30,display:"flex",justifyContent:"center",alignItems:"center"}]}>
                <MaterialCommunityIcons name='plus' size={28} color={colors.white}/>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.fabStyle2,{height:50,width:50,borderRadius:30,display:"flex",justifyContent:"center",alignItems:"center"}]}>
    <FontAwesome5 name="user-alt" size={28} color={colors.darkgrey} />  
    </TouchableOpacity>
</SafeAreaView>
  )
}

const styles=StyleSheet.create({
    pardash:{
        flex:1
    },
    scr:{
        padding:RFPercentage(2),
        flex:1,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    
    fabStyle: {
        bottom: 100,
        right: 16,
        position: 'absolute',
        backgroundColor:colors.blue,
        elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
      },

    fabStyle2: {
        bottom: 32,
        right: 16,
        position: 'absolute',
        backgroundColor:colors.white,
        borderWidth:RFPercentage(.3),
        borderColor:colors.darkgrey,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
})