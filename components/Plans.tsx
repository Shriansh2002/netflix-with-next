import Head from 'next/head';
import Link from 'next/link';
import useAuth from '../hooks/useAuth';
import { CheckIcon } from '@heroicons/react/outline';

const Plans = () => {
	const { logout } = useAuth();

	const planDesc = [
		'Watch All you want. Ad-free',
		'Recommendations just for you',
		'Change or cancel your plan Anytime',
	];

	return (
		<div>
			<Head>
				<title>Netflix</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="border-b border-white/10 bg-[#141414]">
				<Link href="/">
					<img
						src="https://rb.gy/ulxxee"
						alt="Netflix"
						width={150}
						height={90}
						className="cursor-pointer object-contain"
					/>
				</Link>
				<button
					className="text-lg font-medium hover:underline"
					onClick={logout}
				>
					Sign Out
				</button>
			</header>

			<main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
				<h1 className="mb-3 text-3xl font-medium">
					Choose the plan that's right for you
				</h1>

				<ul>
					{planDesc.map((plan, index) => (
						<li
							className="flex items-center gap-x-2 text-lg"
							key={index}
						>
							<CheckIcon className="h-7 w-7 text-[#E50914]" />
							{plan}
						</li>
					))}
				</ul>

				<div className="mt-4 flex flex-col space-y-4">
					<div className="flex w-full items-center justify-end self-end md:3/5">
						<div className="planBox">Standard</div>
						<div className="planBox">Standard</div>
						<div className="planBox">Standard</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Plans;
