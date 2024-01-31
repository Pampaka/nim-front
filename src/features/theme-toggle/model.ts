import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'app/store'

type Theme = 'light' | 'dark'

function setThemeToDocument(theme: Theme) {
	localStorage.setItem('theme', theme)
	document.documentElement.setAttribute('theme', theme)
}

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)')
let defaultTheme: Theme = 'light'
const storageTheme = (localStorage.getItem('theme') as Theme) || ''
if (['light', 'dark'].includes(storageTheme)) {
	defaultTheme = storageTheme
} else {
	defaultTheme = isDarkTheme ? 'dark' : 'light'
}
setThemeToDocument(defaultTheme)

const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		theme: defaultTheme
	},
	reducers: {
		changeTheme(state) {
			const theme: Theme = state.theme === 'light' ? 'dark' : 'light'
			setThemeToDocument(theme)
			state.theme = theme
		}
	}
})

export const themeReducer = themeSlice.reducer
export const { changeTheme } = themeSlice.actions
export const selectTheme = (store: RootState) => store.themeReducer.theme
