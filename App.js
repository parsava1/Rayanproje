import React,{useState,useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from './screens/ChatScreen';
import AnimatedSplash from "react-native-animated-splash-screen";
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
export default function App() {
  const[loading,setLoading]=useState(false);
  const Stack = createStackNavigator();

  useEffect(()=> {
    setTimeout(()=>{
      setLoading(true)
    },4000)
  },[]);

  return (
    <AnimatedSplash
    translucent={true}
     isLoaded={loading}
    logoImage={require("./assets/rayanchat.png")}
    backgroundColor={"#262626"}
    logoHeight={2000}
    logoWidth={800}
  >

    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="Chat" component={ChatScreen}/>
    </Stack.Navigator>
</NavigationContainer>
{/*<HomeScreen/>*/}
    </AnimatedSplash>
  );
}

