import { height, width } from "@/constants"
import { BlurView } from "expo-blur"
import { ImageBackground, View } from "react-native"
import { LinearGradient } from "react-native-linear-gradient"

const HeroSection = () => {
    return (
        <ImageBackground source={require("../assets/images/movie.jpg")} style={{ height: height * 0.5, width: width }} className="relative">
            <View className="absolute bottom-0 left-0 w-full h-1/4 z-[100]">
                <BlurView intensity={50} tint="dark" style={{ flex: 1 }}>
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.6)', 'black']}
                        style={{ flex: 1 }}
                    />
                </BlurView>
            </View>
        </ImageBackground>
    )
}

export default HeroSection
