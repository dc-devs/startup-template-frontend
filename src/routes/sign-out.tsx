import { SignOut } from '../app/SignOut';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/sign-out')({
	component: () => {
		return (
			<>
				<SignOut />
			</>
		);
	},
});
