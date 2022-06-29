import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const headerList = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`${isScrolled && 'bg-[#141414]'} `}>
			<div className="flex items-center space-x-2 md:space-x-10">
				<img
					src="https://rb.gy/ulxxee"
					height={100}
					width={100}
					className="cursor-pointer object-contain"
				/>
				<ul className="hidden space-x-4 md:flex">
					{headerList.map((item, index) => (
						<li className="headerLink" key={index}>
							{item}
						</li>
					))}
				</ul>
			</div>

			<div className="flex items-center space-x-4 text-sm font-light">
				<SearchIcon className="hidden h-6 w-6 sm:inline" />
				<p className="hidden lg:inline">Kids</p>
				<BellIcon className="h-6 w-6" />
				<Link href="/account">
					<img
						src="https://rb.gy/g1pwyx"
						className="cursor-pointer rounded"
						alt=""
					/>
				</Link>
			</div>
		</header>
	);
}

export default Header;
