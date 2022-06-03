import React, { useState } from 'react';
import { Grid, Container, Box } from '@mui/material';
import CardLoader from './CardLoader';
import ErrorMessage from './ErrorMessage';
import CharCard from './CharCard';
import PageNums from './PageNums';
import { ApolloError } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

type ChildProps = {
	characters: Array<{
		id: number;
		name: string;
		image: string;
		status: string;
	}>;

	charactersListData: {
		characters: {
			info: {
				count: number;
			};
			results: Array<{
				id: number;
				name: string;
				image: string;
				status: string;
			}>;
		};
	};

	charactersListLoading: boolean;
	count: number;

	charactersListError: ApolloError | undefined;
};

const CharsList: React.FunctionComponent<ChildProps> = ({
	characters,
	charactersListData,
	charactersListLoading,
	charactersListError,
	count,
}) => {
	const navigate = useNavigate();

	const [page, setPage] = useState<number>(1);

	const handlePages = (updatePage: number) => {
		setPage(updatePage);
		navigate(`/page/${page}`);
	};

	if (charactersListLoading) {
		return (
			<Box mt={4}>
				<CardLoader />
			</Box>
		);
	}

	if (charactersListError || !charactersListData) {
		return (
			<Box mt={4}>
				<ErrorMessage />
			</Box>
		);
	}

	return (
		<ThemeProvider theme={darkTheme}>
			<Container sx={{ py: 8 }} maxWidth="md">
				<Grid container spacing={4}>
					{characters.map(character => (
						<Grid item key={character.id} xs={12} sm={6} md={4}>
							<CharCard
								image={character.image}
								status={character.status}
								name={character.name}
								id={character.id}
							/>
						</Grid>
					))}
				</Grid>
				<Box padding="50px">
					<PageNums page={page} totalPages={count} handlePagination={handlePages} />
				</Box>
			</Container>
		</ThemeProvider>
	);
};
export default CharsList;
