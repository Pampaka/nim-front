import { layoutSetting } from 'widgets/layout'
import { LoginForm } from 'features/login-form'
import { Card } from 'shared/ui/card'

import style from './index.module.scss'

const LoginPage = () => {
	return (
		<div className={style.page}>
			<Card className={style.card}>
				<h1 className={style.title}>Вход</h1>
				<LoginForm />
			</Card>
		</div>
	)
}

export default layoutSetting(LoginPage)
