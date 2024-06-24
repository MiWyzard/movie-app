import React from 'react'
import axios from 'axios'
import { View, Text, Button } from 'react-native'
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM2ZjA1NzE4ODM2OTdkMWVkMmI4YmRjMjU3MzE0YSIsIm5iZiI6MTcxOTE5MTQyNi45MjI4MDcsInN1YiI6IjY2NzhjNWM4MWY3NjAxNTg1OWVkZjY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AgKAzWEgQKH1s6dV6n5cYqiMX-1e2tWFS4EFnXzwVwk'
const URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

type Props = {
  navigation: any,
}

export default function MovieDetail({ navigation } : Props): React.JSX.Element {
  
  const fetchData = async() => {
    try {
      const Respon = await axios.get(URL , {headers: {'Accept': 'application/json','Authorization': `Bearer ${ACCESS_TOKEN}`}});
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