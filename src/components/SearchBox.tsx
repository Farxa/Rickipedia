import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, TextField } from '@mui/material';

const SearchBox: React.FunctionComponent = () => {
	const [query, setQuery] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();

		navigate(`/search?q=${query}`);
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	return (
		<Box
			component="form"
			sx={{ '& .MuiTextField-root': { width: '100%' }, display: 'grid', gridAutoRows: '49px', gap: 1 }}
			onSubmit={handleSubmit}
			autoComplete="on">
			<Box sx={{ gridColumn: '1', gridRow: '4 / 5' }}>
				<TextField
					id="filled-search"
					value={query}
					onChange={handleSearch}
					label="Search characters"
					type="search"
					variant="filled"
					style={{ backgroundColor: 'white' }}
				/>
			</Box>
		</Box>
	);
};

export default SearchBox;
