import React from 'react';
import { Grid, Skeleton, Box, Typography, Container } from '@mui/material';

interface MediaProps {
	loading?: boolean;
}

function Media(props: MediaProps) {
	return (
		<Container sx={{ py: 8 }} maxWidth="md">
			<Grid container spacing={4}>
				{Array.from(new Array(3)).map((item, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						{item ? (
							<img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
						) : (
							<Skeleton variant="rectangular" width={210} height={118} />
						)}
						{item ? (
							<Box sx={{ pr: 2 }}>
								<Typography gutterBottom variant="body2">
									{item.title}
								</Typography>
								<Typography display="block" variant="caption" color="text.secondary">
									{item.channel}
								</Typography>
								<Typography variant="caption" color="text.secondary">
									{`${item.views} • ${item.createdAt}`}
								</Typography>
							</Box>
						) : (
							<Box sx={{ pt: 0.5 }}>
								<Skeleton />
								<Skeleton width="60%" />
							</Box>
						)}
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
const CardLoader: React.FunctionComponent = () => {
	return (
		<Box sx={{ overflow: 'hidden' }}>
			<Media loading />
			<Media loading />
			<Media loading />
		</Box>
	);
};

export default CardLoader;
