import { CallToAction } from './components/CallToAction';
import { Faqs } from './components/Faqs';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { PrimaryFeatures } from './components/PrimaryFeatures';
import { SecondaryFeatures } from './components/SecondaryFeatures';
import { Testimonials } from './components/Testimonials';

export function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<PrimaryFeatures />
				<SecondaryFeatures />
				<CallToAction />
				<Testimonials />
				<Pricing />
				<Faqs />
			</main>
			<Footer />
		</>
	);
}

// export const App = () => {
// 	const people = [
// 		{
// 			name: 'Calvin Hawkins',
// 			email: 'calvin.hawkins@example.com',
// 			image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// 		},
// 		{
// 			name: 'Kristen Ramos',
// 			email: 'kristen.ramos@example.com',
// 			image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// 		},
// 		{
// 			name: 'Ted Fox',
// 			email: 'ted.fox@example.com',
// 			image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// 		},
// 	];

// 	return (
// 		<>
// 			<p className="text-3xl font-bold underline">Hello world!</p>
// 			<ul className="divide-y divide-gray-200">
// 				{people.map((person) => (
// 					<li key={person.email} className="py-4 flex">
// 						<img
// 							className="h-10 w-10 rounded-full"
// 							src={person.image}
// 							alt=""
// 						/>
// 						<div className="ml-3">
// 							<p className="text-sm font-medium text-gray-900">
// 								{person.name}
// 							</p>
// 							<p className="text-sm text-gray-500">
// 								{person.email}
// 							</p>
// 						</div>
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// };
