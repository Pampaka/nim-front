import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from 'features/theme-toggle'

export const store = configureStore({
	reducer: {
		themeReducer: themeReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
