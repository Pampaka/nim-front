import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router'

import { userService } from 'entities/user'
import { Paths } from 'shared/consts'

import style from './index.module.scss'

export const LogoutButton = () => {
	const navigate = useNavigate()

	const logout = () => {
		userService.signOut().then(() => {
			navigate(Paths.LOGIN)
		})
	}

	return (
		<button className={style.logoutButton} onClick={logout}>
			<FontAwesomeIcon icon={faArrowRightFromBracket} />
		</button>
	)
}
