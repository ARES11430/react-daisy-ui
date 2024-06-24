import { useState, useEffect } from 'react';

const ThemeChanger = () => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	const handleChange = (event: any) => {
		setTheme(event.target.value);
	};

	const themes = [
		{ lable: 'Light', themeValue: 'light' },
		{ lable: 'Dark', themeValue: 'dark' },
		{ lable: 'Cupcake', themeValue: 'cupcake' },
		{ lable: 'Bumblebee', themeValue: 'bumblebee' },
		{ lable: 'Emerald', themeValue: 'emerald' },
		{ lable: 'Corporate', themeValue: 'corporate' },
		{ lable: 'Synthwave', themeValue: 'synthwave' },
		{ lable: 'Retro', themeValue: 'retro' },
		{ lable: 'Cyberpunk', themeValue: 'cyberpunk' },
		{ lable: 'Halloween', themeValue: 'halloween' },
		{ lable: 'Garden', themeValue: 'garden' },
		{ lable: 'Forest', themeValue: 'forest' },
		{ lable: 'Aqua', themeValue: 'aqua' },
		{ lable: 'Lofi', themeValue: 'lofi' },
		{ lable: 'Pastel', themeValue: 'pastel' },
		{ lable: 'Fantasy', themeValue: 'fantasy' },
		{ lable: 'Wireframe', themeValue: 'wireframe' },
		{ lable: 'Black', themeValue: 'black' },
		{ lable: 'Luxury', themeValue: 'luxury' },
		{ lable: 'Dracula', themeValue: 'dracula' },
		{ lable: 'Cmyk', themeValue: 'cmyk' },
		{ lable: 'Autumn', themeValue: 'autumn' },
		{ lable: 'Business', themeValue: 'business' },
		{ lable: 'Acid', themeValue: 'acid' },
		{ lable: 'Lemonade', themeValue: 'lemonade' },
		{ lable: 'Night', themeValue: 'night' },
		{ lable: 'Coffee', themeValue: 'coffee' },
		{ lable: 'Winter', themeValue: 'winter' },
		{ lable: 'Dim', themeValue: 'dim' },
		{ lable: 'Nord', themeValue: 'nord' },
		{ lable: 'Sunset', themeValue: 'sunset' }
	];

	return (
		<div className='dropdown dropdown-end'>
			<select
				value={theme}
				onChange={handleChange}
				className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
			>
				{themes.map((t, index) => (
					<option key={index} value={t.themeValue} className='btn join-item'>
						{t.lable}
					</option>
				))}
			</select>
		</div>
	);
};

export default ThemeChanger;
