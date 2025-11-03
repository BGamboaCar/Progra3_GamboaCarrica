import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Usuarios from "../screens/Usuarios";
import NuevoPost from "../screens/NuevoPost";

const Tab = createBottomTabNavigator();

function HomeMenu() {
    return(           
            <Tab.Navigator >
                <Tab.Screen name="Home" component={Home} options={{headerShown: false, tabBarIcon: ()=> <AntDesign name="home" size={24} color="black"/>} } />
                <Tab.Screen name="Profile" component={Profile} options={{headerShown: false, tabBarIcon: ()=> <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />}} />
                <Tab.Screen  name="Usuarios" component={Usuarios} options={{headerShown: false, tabBarIcon: ()=> <AntDesign name="user" size={24} color="black" />}}  />
                <Tab.Screen options={
                {
                    headerShown: false,
                    tabBarIcon: () => <AntDesign name="plus" size={24} color="black" />
                }
            }
                name="NuevoPost" component={ NuevoPost } />

            </Tab.Navigator>
        );
}

export default HomeMenu;