import React,{useEffect,useState,useRef} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import io from "socket.io-client";
import { GiftedChat } from 'react-native-gifted-chat';
export default function HomeScreen() {
const[message,setMessage]=useState("rayan");
const[rcvmessage,setRcvmessage]=useState([]);
const socket=useRef(null);

  useEffect(()=>{
    socket.current= io("http://192.168.1.117:3001");
    socket.current.on("message",message=>{
      const testMessage=
      {
        _id: 3,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      };
      testMessage.text=message;
        setRcvmessage(prevState=>GiftedChat.append(prevState,testMessage));
    });
    setRcvmessage([
        {
          _id: 1,
          text: 'سلام وحدانی هستم از رایان',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'به صفحه چت خوش آمدید از دستگاه های مختلف میتوانید چت کنید',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },

      ]);
  },[])


  const onSend=(messages)=>{
    console.log(messages);
    socket.current.emit("message",messages[0].text);
    }
  return (
  <GiftedChat
      messages={rcvmessage}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
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
