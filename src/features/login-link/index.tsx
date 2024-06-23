import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Paths } from 'shared/consts'
import style from './index.module.scss'

export const LoginLink = () => {
	return (
		<Link className={style.link} to={Paths.LOGIN}>
			<span>Вход</span>
			<FontAwesomeIcon icon={faRightFromBracket} />
		</Link>
	)
}
