import React, { useState, useEffect, FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, Box, Grid, Link } from '@mui/material';
import CharInfoTable from '../components/CharInfoTable';
import ErrorMessage from '../components/ErrorMessage';

const theme = createTheme();

interface Char{
		name: string | null,
		image: string | null,
		status: string | null,
		species: string | null,
		type: string | null,
		gender: string | null,
		location: {
			name: string | null,
		}
  }

const ProfilePage: React.FunctionComponent = () => {
	const [character, setCharacter] = useState<Char>({
		name: null,
		image: null,
		status: null,
		species: null,
		type: null,
		gender: null,
		location: {
			name: null
		}
	});
	const { characterId } = useParams();


	const aCharacter = gql`
	query {
		character(id: ${characterId}) {
			name
			image
			status
			species
			type
			gender
			location {
				name
			}
		}
	}
`;

	const { loading: characterLoading, error: characterError, data: characterData } = useQuery(aCharacter);

	useEffect(() => {
		if (!characterLoading && characterData) {
			setCharacter(characterData.character);
		}
	}, [characterLoading, characterData]);

  
	document.title = `${character?.name!}'s Profile`;


	if (characterError || !characterData) {
		return (
			<Box mt={4}>
				<ErrorMessage />
			</Box>
		);
	}

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: `url(${character?.image!})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}>
						<CharInfoTable character={character} />
						<Box sx={{ mt: 1 }}>
							<Grid container>
								<Link href={`/`} className='page-link'>Return to Home Page</Link>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default ProfilePage;