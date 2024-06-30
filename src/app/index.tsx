import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { RefreshUserProvider } from './providers/refresh-user.provider'
import { Routing } from 'pages'
import { Layout } from 'widgets/layout'
import { useTheme } from 'shared/ui/theme-toggle'

import 'shared/styles'

function App() {
	useTheme()

	return (
		<BrowserRouter>
			<RefreshUserProvider>
				<Layout>
					<Suspense fallback={'Загрузка...'}>
						<Routing />
					</Suspense>
				</Layout>
			</RefreshUserProvider>
		</BrowserRouter>
	)
}

export default App
