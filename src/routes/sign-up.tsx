import { SignUp } from '../app/SignUp';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/sign-up')({
	component: () => {
		return (
			<>
				<SignUp />
			</>
		);
	},
});
