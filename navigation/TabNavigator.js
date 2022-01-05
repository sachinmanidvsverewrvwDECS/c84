import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createBottomTabNavigator();
const BottomTabNavigator=()=>{
return(
    <Tab.Navigator
    screenOptions={({route}=({
        tabBarIcon:({Size,color,focused})=>{
            let iconName;
            if(route.name==='Feed'){
                icomName=focused
                ? 'book' 
                :'book-outline'

            }else if(route.name==="CreatePost"){
                iconName=focused
                ? "create" 
                : "create-outline"
            }
            return <Ionicons name={iconName} size={size} color={color}/>
        }
        })
    )}

    tabBarOptions={{
        activeTintColor='tomato',
        inactiveTintColor='grey'

    }}
    
    >
        <Tab.Screen name='Feed' component ={Feed}/>
      <Tab.Screen name="CreatePost" component={CreatePost}/>

    </Tab.Navigator>
)
}

export default BottomTabNavigator();
