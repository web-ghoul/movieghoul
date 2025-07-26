import { width } from '@/constants'
import { router } from 'expo-router'
import { useEffect } from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'

const MySplashSection = () => {

    useEffect(() => {
        console.log(1111)
    }, [])

    return (
        <View className='flex-1 justify-center items-center' style={{ gap: 20 }}>
            <Image source={require('../assets/images/logo.png')} style={{ width: width * 0.75, height: width * 0.75 }} className='rounded-full overflow-hidden' />
            <Text className='font-ubuntu_bold text-4xl text-primary'>Movie Ghoul</Text>
            <TouchableHighlight onPress={() => router.push("/(tabs)/profile")}>
                <Text className='text-white'>Button</Text>
            </TouchableHighlight>
        </View>
    )
}

export default MySplashSection
