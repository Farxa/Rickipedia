import React, { useState, useEffect } from 'react';
import { Box, Grid, Link } from '@mui/material';
import { gql, useQuery } from '@apollo/client';
import CharCards from '../components/CharsList';
import { useSearchParams } from 'react-router-dom';

const SearchResults: React.FunctionComponent = () => {
	const [characters, setCharacters] = useState([]);
	const [count, setCount] = useState(0);
	let [searchParams] = useSearchParams();

	const query = searchParams.get('q');

	const filteredCharacters = gql`
		query getChars($query: String!) {
			characters(filter: { name: $query }) {
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
		}
	`;

	const {
		loading: charactersListLoading,
		error: charactersListError,
		data: charactersListData,
	} = useQuery(filteredCharacters, {
		variables: { query: query },
	});

	useEffect(() => {
		if (!charactersListLoading && charactersListData) {
			setCharacters(charactersListData.characters.results);
			setCount(charactersListData.characters.info.count);
		}
	}, [charactersListLoading, charactersListData]);

	document.title = 'Search Results';

	return (
		<Box>
			<Box sx={{ mt: 1 }}>
				<Grid container>
					<Link href={`/`} className="page-link">
						Return to Home Page
					</Link>
				</Grid>
			</Box>
			<CharCards
				characters={characters}
				charactersListLoading={charactersListLoading}
				charactersListError={charactersListError}
				charactersListData={charactersListData}
				count={count}
			/>
		</Box>
	);
}

export default SearchResults;