import { Link } from '@tanstack/react-router';

export const NavLink = ({
	to,
	params,
	search,
	children,
}: {
	to?: string;
	params?: string;
	search?: (prev: Record<string, unknown>) => Record<string, unknown>;
	children: React.ReactNode;
}) => {
	return (
		<Link
			to={to}
			params={params}
			search={search}
			className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
		>
			{children}
		</Link>
	);
};
