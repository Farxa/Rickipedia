import React from 'react';
import { Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

type Character = {
	character: {
		name: string | null;
		image: string | null;
		status: string | null;
		species: string | null;
		type: string | null;
		gender: string | null;
		location: {
			name: string | null;
		};
	};
};

const CharInfoTable: React.FunctionComponent<Character> = ({ character }) => {
	return (
		<TableContainer component={Paper}>
			<Table style={{ backgroundColor: '#68f7fc' }} sx={{ minWidth: 300 }}>
				<TableBody>
					<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
						<TableCell component="th" scope="row">
							Name:
						</TableCell>
						<TableCell>{character?.name}</TableCell>
					</TableRow>
					<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
						<TableCell component="th" scope="row">
							Status:
						</TableCell>
						<TableCell>{character?.status}</TableCell>
					</TableRow>
					<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
						<TableCell component="th" scope="row">
							Species:
						</TableCell>
						<TableCell>{character?.species}</TableCell>
					</TableRow>
					<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
						<TableCell component="th" scope="row">
							Type:
						</TableCell>
						<TableCell>{character?.type}</TableCell>
					</TableRow>
					<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
						<TableCell component="th" scope="row">
							Gender:
						</TableCell>
						<TableCell>{character?.gender}</TableCell>
					</TableRow>
					<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
						<TableCell component="th" scope="row">
							Location:
						</TableCell>
						<TableCell>{character?.location.name}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CharInfoTable;
