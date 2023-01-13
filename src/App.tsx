import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/page/:pageNumber" element={<HomePage />} />

				<Route path="/profile/:characterId" element={<ProfilePage />} />

				<Route path="/search" element={<SearchResults />} />
			</Routes>
		</BrowserRouter>
	);
}
