import { Link } from '@tanstack/react-router';
import { Button } from '../components/Button';
import { TextField } from '../components/Fields';
import { Logo } from '../components/Logo';
import { SlimLayout } from '../components/SlimLayout';
import { useForm } from '@tanstack/react-form';
import type { FieldApi } from '@tanstack/react-form';

const FieldInfo = ({ field }: { field: FieldApi<any, any, any, any> }) => {
	return (
		<>
			{field.state.meta.touchedErrors ? (
				<em>{field.state.meta.touchedErrors}</em>
			) : null}
			{field.state.meta.isValidating ? 'Validating...' : null}
		</>
	);
};

export const SignIn = () => {
	const form = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		onSubmit: async ({ value }) => {
			// Do something with form data
			console.log('[Form]', value);
		},
	});

	return (
		<SlimLayout>
			<div className="flex justify-center">
				<Link to="/" aria-label="Home">
					<Logo className="h-10 w-auto" />
				</Link>
			</div>
			<h2 className="mt-20 text-lg font-semibold text-gray-900">
				Sign in to your account
			</h2>
			<p className="mt-2 text-sm text-gray-700">
				Don’t have an account?{' '}
				<Link
					to="/sign-up"
					className="font-medium text-blue-600 hover:underline"
				>
					Sign up
				</Link>{' '}
				for a free trial.
			</p>
			<form
				className="mt-10 grid grid-cols-1 gap-y-8"
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
			>
				<div>
					{/* A type-safe field component*/}
					<form.Field
						name="email"
						validators={{
							onChange: ({ value }) =>
								!value
									? 'An email is required'
									: value.length < 3
										? 'email must be at least 3 characters'
										: undefined,
							onChangeAsyncDebounceMs: 500,
							onChangeAsync: async ({ value }) => {
								await new Promise((resolve) =>
									setTimeout(resolve, 1000),
								);
								return (
									value.includes('error') &&
									'No "error" allowed in email'
								);
							},
						}}
						children={(field) => {
							// Avoid hasty abstractions. Render props are great!
							return (
								<>
									<TextField
										label={field.name}
										name={field.name}
										type={field.name}
										autoComplete={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) =>
											field.handleChange(e.target.value)
										}
										required
									/>
									<FieldInfo field={field} />
								</>
							);
						}}
					/>
				</div>
				<div>
					<form.Field
						name="password"
						children={(field) => (
							<>
								<TextField
									label={field.name}
									name={field.name}
									type={field.name}
									autoComplete={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) =>
										field.handleChange(e.target.value)
									}
									required
								/>
							</>
						)}
					/>
				</div>
				<form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
					children={([canSubmit, isSubmitting]) => (
						<div>
							{isSubmitting ? (
								'...'
							) : (
								<Button
									type="submit"
									variant="solid"
									color="blue"
									className="w-full"
								>
									<span>
										Sign in{' '}
										<span aria-hidden="true">&rarr;</span>
									</span>
								</Button>
							)}
						</div>
					)}
				/>
			</form>
		</SlimLayout>
	);
};
