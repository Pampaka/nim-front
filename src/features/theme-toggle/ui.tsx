import { useAppDispatch, useAppSelector } from 'app/hooks'
import { changeTheme, selectTheme } from './model'

export const ThemeToggle = () => {
	const theme = useAppSelector(selectTheme)
	const dispatch = useAppDispatch()

	return (
		<input
			type="checkbox"
			checked={theme === 'dark'}
			onChange={() => dispatch(changeTheme())}
		/>
	)
}
