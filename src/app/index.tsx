import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from 'pages'
import './index.scss'

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={'Загрузка...'}>
				<Routing />
			</Suspense>
		</BrowserRouter>
	)
}

export default App
