import React from 'react';
import { Layout } from './components/Layout';
import { Landing } from './containers/Landing';

const App = () => {
    return (
        <Layout>
            <Landing />
        </Layout>
    )
}

export { App };