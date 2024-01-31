import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Routing } from 'pages'
import { store } from './store'
import './index.scss'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Suspense fallback={'Загрузка...'}>
					<Routing />
				</Suspense>
			</BrowserRouter>
		</Provider>
	)
}

export default App
