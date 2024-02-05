import type { PayloadAction } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/hooks'

export const layoutSlice = createSlice({
	name: 'layout',
	initialState: {
		header: true,
		sideBar: false
	},
	reducers: {
		showHeader: (state, action: PayloadAction<boolean>) => {
			state.header = action.payload
		},
		showSideBar: (state, action: PayloadAction<boolean>) => {
			state.sideBar = action.payload
		}
	}
})

export const layotReducer = layoutSlice.reducer
export const { showHeader, showSideBar } = layoutSlice.actions

type LayoutOptions = {
	header: boolean
	sideBar: boolean
}

export const useLayout = ({ header, sideBar }: LayoutOptions) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (header !== undefined) dispatch(showHeader(header))
		if (sideBar !== undefined) dispatch(showSideBar(sideBar))
	}, [dispatch, header, sideBar])
}
