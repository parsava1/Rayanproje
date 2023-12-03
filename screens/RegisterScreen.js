import React from 'react';
import { View,Text,TextInput,StyleSheet,Image } from 'react-native';
import CustomButton from './../components/CustomButton';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Formik} from "formik";
import * as Yup from "yup"
import ErrorMessage from './../components/ErrorMessage';

const validationSchema = Yup.object().shape({
    fullname:Yup.string().required("نام و نام خانوادگی الزامی میباشد"),
    email: Yup.string()
        .required("این فیلد الزامی می باشد")
        .email("ایمیل معتبر نمی باشد"),
    password: Yup.string()
        .required("این فیلد الزامی می باشد")
        .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
});

const RegisterScreen = ({navigation}) => {
    return ( 
        <View style={styles.container}>
           <Image style={styles.logo} source={require("../assets/rayanchat.png")}/>
           <Formik
           initialValues={{fullname:"",email:"",password:""}}
           onSubmit={(values)=>console.log(values)}
           validationSchema={validationSchema}
           >
            {({handleChange,handleSubmit, errors })=>(
 <>

  <View style={{flexDirection:"row",top:"30%",left:"2%"}}>
            <TextInput
            placeholder="نام و نام خانواگی"
            autoCorrect={false}
            style={styles.textinput}
            placeholderTextColor="blue"
            onChangeText={handleChange("fullname")}
            />
            <MaterialCommunityIcons name="account-circle" size={20} color="dodgerblue" style={styles.icon}/>
           </View>
           <View style={{top:"20%",left:"2%"}}>
           <ErrorMessage error={errors.fullname} />
           </View>

   <View style={{flexDirection:"row",top:"35%",left:"2%"}}>
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
           <View style={{top:"18%",left:"2%"}}>
           <ErrorMessage error={errors.email} />
           </View>

           <View style={{flexDirection:"row",top:"40%",left:"2%"}}>
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
           <View style={{top:"18%",left:"2%"}}>
           <ErrorMessage error={errors.password} />
           </View>
           <View style={{width:"60%",top:"20%"}}>
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
 
export default RegisterScreen;
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
        width:"75%",
        height:50,
        backgroundColor:"grey",
        borderRadius:10,
        textAlign:"center",
        fontSize:18,
        marginBottom:15
    },
    icon:{
        marginLeft:10,
        alignSelf:"center",
        marginBottom:15,
    }
})
