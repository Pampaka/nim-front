import { Link } from 'react-router-dom'
import { ThemeToggle } from 'features/theme-toggle'
import { Header } from 'shared/ui/header'
import { Paths } from 'shared/consts/paths'
import style from './index.module.scss'

export const Layout = () => {
	return (
		<div className={style.headWrapper}>
			<Header
				start={
					<Link className={style.logo} to={Paths.MAIN}>
						NiM
					</Link>
				}
				end={<ThemeToggle />}
			/>
		</div>
	)
}
