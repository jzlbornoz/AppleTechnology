import React from 'react';
import { Layout } from './components/Layout';
import { Home } from './containers/Home';

const App = () => {
    return (
        <Layout>
            <Home />
        </Layout>
    )
}

export { App };