import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const NewPostScreen = ({navigation, route}) => {
  return ( 
    <View style = {{margin: 10, }}> 
      <TextInput style = {{borderColor: 'white', borderWidth: 1, height: 300}}>
      </TextInput>
        <TouchableOpacity style = {{borderBlockColor: "white", width: 70, height: 30, marginTop: 15, backgroundColor: 'aqua', alignItems: 'center', justifyContent: 'center'}}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NewPostScreen