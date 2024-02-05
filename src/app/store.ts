import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from 'features/theme-toggle'
import { layotReducer } from 'widgets/layout'

export const store = configureStore({
	reducer: {
		themeReducer: themeReducer,
		layotReducer: layotReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
