import { configureStore } from '@reduxjs/toolkit'
import moviesNowPlayingReducer from "./moviesNowPlayingSlice"

export const store = configureStore({
  reducer: {
    moviesNowPlaying: moviesNowPlayingReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch