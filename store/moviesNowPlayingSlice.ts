import { MoviesNowPlayingValuesTypes } from "@/types/stores";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMoviesNowPlaying = createAsyncThunk(
    "moviesNowPlaying/getMoviesNowPlaying",
    async (args?: { page?: number; }) => {
        console.log(`Bearer ${process.env.EXPO_PUBLIC_TOKEN}`)
        const res = await axios.get(`/movie/now_playing?language=en-US&page=${(args && args.page) || 1}`, {
            headers: {
                Authorization: `Bearer ${process.env.EXPO_PUBLIC_TOKEN}`
            }
        });
        console.log(res)
        return res.data.data;
    }
);

const initialState: MoviesNowPlayingValuesTypes = {
    movies: undefined,
    loading: true,
};

export const moviesNowPlayingSlice = createSlice({
    name: "moviesNowPlaying",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMoviesNowPlaying.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getMoviesNowPlaying.fulfilled, (state, action) => {
            state.movies = action.payload;
            console.log(action.payload)
            state.loading = false;
        });
        builder.addCase(getMoviesNowPlaying.rejected, (state) => {
            state.loading = true;
        });
    },
});

export default moviesNowPlayingSlice.reducer;
