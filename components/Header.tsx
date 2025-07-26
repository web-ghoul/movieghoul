import { width } from '@/constants';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { ScrollView, Text, TouchableHighlight, View } from 'react-native';

const Header = () => {
    const [active, setActive] = useState(0)
    const categories = ["All", "Romance", "Sport", "Kids", "Action", "Drama", "Herror"]

    return (
        <BlurView intensity={100} tint="dark" className='bg-[#222] rounded-full p-2 top-[40px] m-auto z-[1000] glassy' style={{ width: width * 0.85 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexDirection: 'row' }}
            >
                {
                    categories.map((cat, i) => (
                        <TouchableHighlight key={i} onPress={() => setActive(i)}>
                            <HeaderMenuLink active={i === active} text={cat} />
                        </TouchableHighlight>
                    ))
                }
            </ScrollView>
        </BlurView>
    )
}

const HeaderMenuLink = ({ active, text }: { active?: boolean; text: string }) => {
    return (
        <View className={`rounded-full px-4 py-2 flex justify-center items-center ${active ? "bg-white" : "bg-transparent"}`}>
            <Text className={`text-xl font-ubuntu_regular ${active ? "text-black" : "text-white"}`}>{text}</Text>
        </View>
    )
}

export default Header
