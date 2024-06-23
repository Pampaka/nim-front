import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Routing } from 'pages'
import { Layout } from 'widgets/layout'
import { useTheme } from 'features/theme-toggle'

import 'shared/styles'

function App() {
	useTheme()

	return (
		<BrowserRouter>
			<Layout>
				<Suspense fallback={'Загрузка...'}>
					<Routing />
				</Suspense>
			</Layout>
		</BrowserRouter>
	)
}

export default App
