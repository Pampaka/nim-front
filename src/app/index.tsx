import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Routing } from 'pages'
import { Layout } from 'widgets/layout'
import { store } from './store'
import './index.scss'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<Suspense fallback={'Загрузка...'}>
						<Routing />
					</Suspense>
				</Layout>
			</BrowserRouter>
		</Provider>
	)
}

export default App
