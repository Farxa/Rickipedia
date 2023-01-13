import React from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, CardActionArea, Button } from '@mui/material';

import { BsFillCircleFill } from 'react-icons/bs';

type ChildProps = {
	id: number;
	image: string;
	name: string;
	status: string;
};

const CharCard: React.FunctionComponent<ChildProps> = ({ image, name, status, id }) => {
	return (
		<Card sx={{ maxWidth: 360, height: 430 }}>
			<CardMedia component="img" height="260" image={image} alt={'image of' + name} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name + ' '}
					<span>
						<BsFillCircleFill color={status === 'Alive' ? '#4ceb34' : status === 'Dead' ? 'red' : 'grey'} />
					</span>
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant="contained" href={`/profile/${id}`}>
					Profile
				</Button>
			</CardActions>
		</Card>
	);
};

export default CharCard;
