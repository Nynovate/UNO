import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n/i18n.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout.tsx'
import SignInPage from './pages/sign-in.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import LandingPage from './pages/landing.tsx'
import SignUpPage from './pages/sign-up.tsx'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/sign-in",
				element: <SignInPage />
			},
			{
				path: "/sign-up",
				element: <SignUpPage />
			},
			{
				path: "/",
				element: <LandingPage />
			},
			{
				path: "*",
				element: <LandingPage />
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
