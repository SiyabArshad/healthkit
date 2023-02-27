import { View, Text,SafeAreaView,TextInput,TouchableOpacity,Button,Image ,StyleSheet,ScrollView} from 'react-native'
import * as React from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons,FontAwesome5,Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import Tasks from '../components/Tasks';
import Progress from '../components/Progress';
import { AnimatedFAB, Divider } from 'react-native-paper';

export default function Exercise() {
  return (
    <SafeAreaView style={styles.pardash}>
        
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scr}>
    <View style={{borderBottomWidth:RFPercentage(.2),borderBottomColor:colors.darkgrey,paddingBottom:RFPercentage(1.7),display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Text style={{color:colors.black,width:"70%",textAlign:"center"}}>Follow each Exercise and rest period from top to bottom</Text>
    </View>
{
    [1,2,3].map((item,i)=>(
        <View key={i} style={{marginVertical:RFPercentage(1)}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <Image source={require("../../assets/exercise.jpeg")}  resizeMethod='resize' style={{height:40,width:40}}/>
                    <View style={{marginLeft:RFPercentage(1)}}>
                        <Text style={{fontSize:RFPercentage(2.5),color:colors.black,fontWeight:"400",textTransform:"capitalize"}}>Machine Leg CURLS</Text>
                        <Text style={{fontSize:RFPercentage(2),color:colors.darkgrey,fontWeight:"400"}}>5 sets x 20</Text>
                    </View>
                </View>
                <MaterialCommunityIcons name="dots-vertical" size={24} color={colors.darkgrey}/>
        </View>
        {
            [1,2,3,4,5].map((item,i)=>(
               
        <View key={i} style={{marginBottom:RFPercentage(.5)}}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginVertical:RFPercentage(2)}}>
        <Text style={{fontSize:RFPercentage(2.5),color:colors.black,fontWeight:"700",textTransform:"capitalize",marginHorizontal:RFPercentage(1)}}>Set {item}</Text>
                <TextInput
                value='40'
                keyboardType='decimal-pad'
                style={{height:30,width:30,borderWidth:RFPercentage(.2),borderColor:colors.darkgrey,marginLeft:RFPercentage(2)}}
                />
                  <Text style={{fontSize:RFPercentage(2),color:colors.darkgrey,fontWeight:"400",marginLeft:RFPercentage(.5)}}>Sets x </Text>
                 <TextInput
                 value='25'
                keyboardType='decimal-pad'
                style={{height:30,width:30,borderWidth:RFPercentage(.2),borderColor:colors.darkgrey,marginLeft:RFPercentage(2)}}
                />
                 <Text style={{fontSize:RFPercentage(2),color:colors.darkgrey,fontWeight:"400",marginLeft:RFPercentage(.5)}}>lbs</Text>
        </View>
        
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <TouchableOpacity style={{height:40,width:40,backgroundColor:colors.yellow,display:"flex",justifyContent:"center",alignItems:"center"}} >
                <Ionicons name="ios-hand-right" size={24} color={colors.white} />
                </TouchableOpacity>
                <View style={{marginLeft:RFPercentage(1)}}>
                    <Text style={{fontSize:RFPercentage(2.5),color:colors.black,fontWeight:"300",textTransform:'none'}}>Rest for 60s</Text>
                </View>
            </View>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Ionicons name="timer-outline" size={24} color={colors.blue}/>
                    <Text style={{color:colors.blue,marginLeft:RFPercentage(.5)}}>Start</Text>
            </View>
    </View>
    </View>

            ))
        }
        <Text style={{marginVertical:RFPercentage(1),color:colors.blue,fontSize:RFPercentage(2.5)}}> + Add new</Text>
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