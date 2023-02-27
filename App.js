import { StyleSheet, Text, View,Button } from 'react-native';
import Statusbar from './src/components/Statusbar';
import colors from './src/constants/colors';
import Dash from './src/screens/Dash';
import Calender from './src/screens/Calender';
import MealPlan from './src/screens/MealPlan';
import Exercise from './src/screens/Exercise';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather ,Ionicons,Entypo,MaterialCommunityIcons} from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen 
      options={{headerShown:false}}
      name='home' component={BottomTabs} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName='dash'
    tabBarOptions={{
      activeTintColor: colors.blue,
      inactiveTintColor: colors.darkgrey,
      style: {
        backgroundColor: colors.white
      }
    }}
    
    >
       <Tab.Screen name="dash" component={Dash} 
       options={{
        headerTitle: "Dash",
        headerStyle: {
          backgroundColor: colors.blue,
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerRight: () => (
          <Feather name="bell" size={20} color={colors.white} />
        ),
        tabBarIcon:({color,size})=>(
          <Ionicons name="md-rocket-outline" size={size} color={color} />
        ),
        tabBarLabel: () => null,

      }}
      />
      <Tab.Screen name="calender" component={Calender} 
       options={{
        headerTitle: "Calender",
        headerStyle: {
          backgroundColor: colors.blue,
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerRight: () => (
          <View style={{display:"flex",flexDirection:"row"}}>
            <Feather name="calendar" size={20} color={colors.white} />
            <Ionicons name="refresh" size={20} color={colors.white} />
          </View>
        ),
        tabBarIcon:({color,size})=>(
          <Ionicons name="calendar" size={size} color={color} />
        ),
        tabBarLabel: () => null,
      }}
      />
      <Tab.Screen name="exercise" component={Exercise} 
       options={{
        headerTitle:"",
        headerStyle: {
          backgroundColor: colors.blue,
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerLeft:()=>(
          <Text style={{color:colors.white}}>Cancel</Text>
        ),
        headerRight: () => (
          <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Ionicons name="timer-outline" size={20} color={colors.white}/>
            <MaterialCommunityIcons name="comment-outline" size={20} color={colors.white} />
            <Entypo name="dots-three-vertical" size={20} color={colors.white} />
            <Text style={{color:colors.white}}>Save</Text>
          </View>
        ),
        tabBarIcon:({color,size})=>(
<Ionicons name="timer-outline" size={size} color={color} />
        ),
        tabBarLabel: () => null,
      }}
      />
 <Tab.Screen name="mealplan" component={MealPlan} 
       options={{
        headerTitle: "Meal Plan",
        headerStyle: {
          backgroundColor: colors.blue,
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        tabBarIcon:({color,size})=>(
          <MaterialCommunityIcons name="silverware-fork-knife" size={size} color={color} />
        ),
        tabBarLabel: () => null,
      }}
      />
    <Tab.Screen name="dash2" component={Dash} 
       options={{
        headerTitle: "Dash",
        headerStyle: {
          backgroundColor: colors.blue,
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerRight: () => (
          <Feather name="bell" size={20} color={colors.white} />
        ),
        tabBarIcon:({color,size})=>(
          <Entypo name="dots-three-horizontal" size={size} color={color} />
        ),
        tabBarLabel: () => null,

      }}
      />
    </Tab.Navigator>
  );
}