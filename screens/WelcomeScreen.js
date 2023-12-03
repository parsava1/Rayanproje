import React from 'react';
import { View,Text,Button,StyleSheet,Image,ImageBackground } from 'react-native';
import CustomButton from './../components/CustomButton';
const WelcomeScreen = ({navigation}) => {
    return ( 
        <ImageBackground source={require('../assets/bg1.jpg')}
        style={styles.background}
        blurRadius={3}
        >
            <View style={styles.logoContainer}>
                <Image 
                source={require('../assets/rayanchat.png')}
                style={styles.logo}
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton title="ورود" color="blue" onPress={()=>navigation.navigate('Login')} />
                <CustomButton title="ثبت نام" onPress={()=>navigation.navigate('Register')} />
            </View>
        </ImageBackground>
     );
}
 
export default WelcomeScreen;
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    buttonContainer:{
        width:"100%",
        padding:20,
    },
    logo:{
        width:200,
        height:200,
        borderRadius:30
    },
 
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center"
    }
})