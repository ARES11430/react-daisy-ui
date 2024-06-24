import ThemeChanger from './components/ThemeChanger';
const NavBar = () => {
	return (
		<nav className='navbar bg-base-200'>
			<div className='flex-1 px-2 lg:flex-none'>
				<a className='text-lg font-bold'>daisyUI</a>
			</div>
			<div className='flex flex-1 justify-end px-2'>
				<ThemeChanger />
			</div>
		</nav>
	);
};

export default NavBar;
