import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

function Loading() {
    return <LottieView source={require('../../assets/loadingjs.json')} autoPlay />
}

export default Loading