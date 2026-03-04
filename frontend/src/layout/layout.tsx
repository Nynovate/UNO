import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
	return (
		<div
			className="bg-foreground
			w-full h-screen"
		>
			<Outlet />
		</div>
	)
}

export default Layout;