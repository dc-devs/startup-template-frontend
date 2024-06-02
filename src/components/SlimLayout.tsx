export const SlimLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className="relative z-10 flex flex-1 flex-col min-h-full bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
				<main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
					{children}
				</main>
			</div>
		</>
	);
};
