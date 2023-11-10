import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'

export default function home() {
  return (
    <>
      <Header />
      <View>
      <Text style={{ fontSize: 20 }}>Home</Text>
    </View>
    </>
  )
}