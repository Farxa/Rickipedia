import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import CharsList from '../components/CharsList';
import HeaderHome from '../components/HeaderHome';

const theme = createTheme();

const HomePage: React.FunctionComponent = () => {
	const [characters, setCharacters] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const { pageNumber } = useParams();
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCurrentPage(pageNumber ? parseInt(pageNumber, 10) : 1);
	}, [pageNumber]);

	const allCharacters = gql`
    query {
      characters(page: ${currentPage}) {
        results {
          image
          name
          id
          status
        }
        info {
          count: pages
        }
      }
    }`;

	const {
		loading: charactersListLoading,
		error: charactersListError,
		data: charactersListData,
	} = useQuery(allCharacters);

	useEffect(() => {
		if (!charactersListLoading && charactersListData) {
			setCharacters(charactersListData.characters.results);
			setCount(charactersListData.characters.info.count);
		}
	}, [charactersListLoading, charactersListData]);

	document.title = 'Rickipedia';

	return (
		<ThemeProvider theme={theme}>
			<Container
				maxWidth={false}
				sx={{
					pt: 8,
					pb: 6,
					height: 300,
				}}
				className="headerContainer">
				<HeaderHome />
			</Container>
			<CharsList
				characters={characters}
				charactersListLoading={charactersListLoading}
				charactersListError={charactersListError}
				charactersListData={charactersListData}
				count={count}
			/>
		</ThemeProvider>
	);
};

export default HomePage;
