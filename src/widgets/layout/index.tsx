import { ThemeToggle } from 'features/theme-toggle'
import { Header } from 'shared/header'

export const Layout = () => {
	return <Header end={<ThemeToggle />} />
}
