import { useLayout } from 'widgets/layout'
import { LoginForm } from 'features/login-form'
import { Card } from 'shared/ui/card'
import { Button } from 'shared/ui/button'
import style from './index.module.scss'

const LoginPage = () => {
	useLayout({ header: true, sideBar: false })

	return (
		<div className={style.page}>
			<Card className={style.card}>
				<h1 className={style.title}>Вход</h1>
				<LoginForm />
				<Button className={style.submit}>Войти</Button>
			</Card>
		</div>
	)
}

export default LoginPage
