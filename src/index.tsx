import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { render } from '@testing-library/react';
import './style.scss';

//test('should render the dog breed', async () => {
	const client = new ApolloClient({
		uri: 'https://rickandmortyapi.com/graphql',
		cache: new InMemoryCache(),
	});

	ReactDOM.render(
		<React.StrictMode>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</React.StrictMode>,
		document.getElementById('root')
	);
//});
