import React from 'react';
import { Container } from '@mui/material';
import SearchBox from './SearchBox';

const HeaderHome: React.FunctionComponent = () => {
	return (
		<Container maxWidth="sm">
			<SearchBox />
		</Container>
	);
};

export default HeaderHome;
