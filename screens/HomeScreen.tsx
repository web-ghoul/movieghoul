import HeroSection from "@/sections/HeroSection";
import { getMoviesNowPlaying } from "@/store/moviesNowPlayingSlice";
import { AppDispatch } from "@/store/store";
import { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getMoviesNowPlaying())
    }, [dispatch])

    return (
        <ScrollView>
            <HeroSection />
        </ScrollView>
    )
}

export default HomeScreen
