import { ScrollRestoration } from '@tanstack/react-router';
import { createRootRoute, /*Link,*/ Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { RootLayout } from '../app/RootLayout';

export const Route = createRootRoute({
	component: () => (
		<RootLayout>
			<ScrollRestoration />
			<TanStackRouterDevtools />
			<Outlet />
		</RootLayout>
	),
});
