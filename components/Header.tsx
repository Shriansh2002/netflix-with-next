const headerList = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

function Header() {
	return (
		<header>
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

			<div></div>
		</header>
	);
}

export default Header;
