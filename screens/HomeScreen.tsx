import HeroSection from "@/sections/HeroSection";
import { getMoviesNowPlaying } from "@/store/moviesNowPlayingSlice";
import { AppDispatch } from "@/store/store";
import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getMoviesNowPlaying())
    }, [dispatch])

    return (
        <View className="flex-1 justify-stretch items-center" style={{ gap: 30 }}>
            <HeroSection />
        </View>
    )
}

export default HomeScreen
