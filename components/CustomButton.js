import React from 'react';
import { StyleSheet,View,TouchableOpacity,Text } from 'react-native'

const CustomButton = ({title,onPress,color="red"}) => {
    return ( 
        <TouchableOpacity style={[styles.button,{backgroundColor:color}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
     );
}
 
export default CustomButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor:"tomato",
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        width:"100%",
        marginVertical:5,
    },
    text:{
        color:"white",
        fontSize:15
    }
})