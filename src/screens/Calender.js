import { View, Text,SafeAreaView,TextInput,TouchableOpacity,Button ,StyleSheet,ScrollView} from 'react-native'
import * as React from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
import colors from '../constants/colors';
import Tasks from '../components/Tasks';
import Progress from '../components/Progress';
import { AnimatedFAB } from 'react-native-paper';

export default function Calender() {
  return (
    <SafeAreaView style={styles.pardash}>
        
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scr}>
    {
        [1,2,3,4,5,6,76,8,9,10].map((item,i)=>(
            <View key={i} style={{marginBottom:RFPercentage(.5)}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <Text style={{color:colors.darkgrey,fontSize:RFPercentage(2.5),fontWeight:"600"}}>Friday</Text>
            <Text style={{color:colors.darkgrey}}>Tomorrow</Text>
        </View>
        <Tasks divider={true} dividercolor={colors.darkgrey} radiobtncolor={colors.blue} trail={"Complete your Scheduled Work"} icon={"md-stopwatch-outline"}/>
    </View>
        ))
    }
    </ScrollView>
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
        padding:RFPercentage(2)
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