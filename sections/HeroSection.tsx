import { height, width } from "@/constants"
import { LinearGradient } from "expo-linear-gradient"
import { ImageBackground, View } from "react-native"

const HeroSection = () => {
    return (
        <ImageBackground source={require("../assets/images/movie.jpg")} style={{ height: height * 0.5, width: width }} className="relative">
            <View className="absolute bottom-0 left-0 w-full h-1/4 z-[100] !blur-xl">
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)']}
                    style={{ width: width, height: height * 0.2 }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                />
            </View>
        </ImageBackground>
    )
}

export default HeroSection
