import React from 'react'
import axios from 'axios'
import { View, Text, Button } from 'react-native'
import  {API_URL, API_ACCESS_TOKEN} from '@env'

type Props = {
  navigation: any,
}

export default function MovieDetail({ navigation } : Props): React.JSX.Element {
  if (API_ACCESS_TOKEN == null || API_URL == null) {
    throw new Error('ENV not found')
  }
  const fetchData = async() => {
    try {
      const Respon = await axios.get(API_URL , {headers: {'Accept': 'application/json','Authorization': `Bearer ${API_ACCESS_TOKEN}`}});
      console.log("🚀 ~ fetchRespon ~ Respon:", Respon.data)
    } catch (
    err) {
      console.log("🚀 ~ fetchData ~ err:", err) 
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 8 }}>Movie Detail Page</Text>
      <Button
        title="FETCH DATA"
        onPress={() => {
          fetchData()
        }}
      />
    </View>
  )
}