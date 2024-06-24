import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// * css
import './index.css';

// * costume
import router from './Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode data-theme='cupcake'>
		<RouterProvider router={router} />
	</React.StrictMode>
);
