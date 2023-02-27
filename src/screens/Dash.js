import { View, Text,SafeAreaView,TextInput,TouchableOpacity,Button ,StyleSheet,ScrollView} from 'react-native'
import * as React from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
import colors from '../constants/colors';
import Tasks from '../components/Tasks';
import Progress from '../components/Progress';
import { AnimatedFAB } from 'react-native-paper';
export default function Dash() {
  return (
    <SafeAreaView style={styles.pardash}>
        
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scr}>
            <View style={styles.cont1}>
                <Text style={styles.cont1text}>Things to do Yesterday</Text>
                <View style={styles.cont2}>
                    <Text style={{color:colors.darkgrey}}>
                        24 Feb 2023
                    </Text>
                    <View style={{display:"flex",flexDirection:"row"}}>
                            <TouchableOpacity style={styles.btnwithicon}>
                                <Text style={{color:colors.blue}}>T</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnwithout,{marginHorizontal:RFPercentage(1)}]}>
                            <MaterialCommunityIcons name="less-than" size={20} color={colors.blue} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnwithout}>
                            <MaterialCommunityIcons name="greater-than" size={20} color={colors.blue} />
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Tasks divider={true} dividercolor={colors.darkgrey} radiobtncolor={colors.blue} trail={"Complete your Scheduled Work"} icon={"md-stopwatch-outline"}/>
            <Tasks divider={false} dividercolor={colors.darkgrey} radiobtncolor={colors.yellow}  icon={"image"}/>
            <Progress/>
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
    cont1:{

    },
    cont1text:{
        fontSize:RFPercentage(2.5),
        textTransform:"uppercase",
    },
    cont2:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:RFPercentage(1)
    },
    btnwithicon:{
        paddingHorizontal:RFPercentage(1),
        paddingVertical:RFPercentage(.4),display:"flex",alignItems:"center",justifyContent:"center",
    borderWidth:RFPercentage(.1),borderColor:colors.blue,borderRadius:RFPercentage(.2)
    },
    btnwithout:{
        paddingHorizontal:RFPercentage(1),
        paddingVertical:RFPercentage(.4),display:"flex",alignItems:"center",justifyContent:"center",
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