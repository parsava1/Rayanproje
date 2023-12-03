import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ImageBackground } from 'react-native';
import CustomButton from './../components/CustomButton';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Formik} from "formik";
import * as Yup from "yup"
import ErrorMessage from './../components/ErrorMessage';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("این فیلد الزامی می باشد")
        .email("ایمیل معتبر نمی باشد"),
    password: Yup.string()
        .required("این فیلد الزامی می باشد")
        .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
});

const LoginScreen = ({navigation}) => {
    return ( 
        <View style={styles.container}>
           <Image style={styles.logo} source={require("../assets/rayanchat.png")}/>
           <Formik
           initialValues={{email:"",password:""}}
           onSubmit={(values)=>console.log(values)}
           validationSchema={validationSchema}
           >
            {({handleChange,handleSubmit, errors })=>(
 <>
   <View style={{flexDirection:"row",top:"50%",left:10}}>
            <TextInput
            placeholder="ایمیل کاربری"
            autoCompleteType="email"
            autoCorrect={false}
            style={styles.textinput}
            placeholderTextColor="blue"
            onChangeText={handleChange("email")}
            />
            <MaterialCommunityIcons name="email" size={20} color="dodgerblue" style={styles.icon}/>
           </View>
           
           <View style={{flexDirection:"row",top:"55%",left:10}}>
            <TextInput
            placeholder="کلمه عبور"
            autoCompleteType="password"
            style={styles.textinput}
            placeholderTextColor="blue"
            onChangeText={handleChange("password")}
            secureTextEntry
            />
            <MaterialCommunityIcons name="onepassword" size={20} color="dodgerblue" style={styles.icon}/>
           </View>
           <View style={{top:"25%",left:"2%"}}>
           <ErrorMessage error={errors.password} />
           </View>
           <View style={{width:"60%",top:"30%"}}>
            <CustomButton 
            title="ورود کاربر"
            onPress={()=>navigation.navigate("Chat")}
            />
           </View>
</>
            )}
           </Formik>
           
        </View>

            
     );
}
 
export default LoginScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    logo:{
        width:"100%",
        height:200,
        marginTop:20,
        marginBottom:20,
    },
    textinput:{
        width:"80%",
        height:50,
        backgroundColor:"grey",
        borderRadius:10,
        textAlign:"center",
        justifyContent:"center",
        fontSize:18,
        marginBottom:15
    },
    icon:{
        marginLeft:10,
        alignSelf:"center",
        marginBottom:15,
    },
    button:{
        top:"50%"
    }
})
