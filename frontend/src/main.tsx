import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout.tsx'
import SignInPage from './pages/sign-in.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/sign-in",
				element: <SignInPage />
			}
		]
	}
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
			<RouterProvider router={router} />
		</GoogleOAuthProvider>
	</StrictMode>,
)
