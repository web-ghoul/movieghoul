import { height, width } from '@/constants';
import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

const TabBarIcon = ({ title, icon, focused }: { title: string; icon: ReactNode; focused: boolean }) => {
    return (
        <View className={`flex flex-cols justify-center items-center`} style={{ width: width * 0.4, top: height * 0.02, gap: 6 }}>
            <View className={`flex justify-center items-center relative ${focused ? "scale-[1.1]" : "scale-[1]"}`}>
                {icon}
            </View>
            <Text className={`text-lg ${focused ? "text-primary" : "text-white"} !font-[600]`}>{title}</Text>
        </View>
    )
}

export default TabBarIcon
