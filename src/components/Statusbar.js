import { StatusBar,View, Text } from 'react-native'
import React from 'react'
import colors from "../constants/colors"
export default function Statusbar() {
  return (
    <StatusBar backgroundColor={colors.blue} barStyle="light-content" />
  )
}