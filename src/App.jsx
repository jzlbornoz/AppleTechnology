import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './containers/Home';
import { NotFound } from './containers/NotFound';
import { CursosPage } from './containers/CursosPage';
import { MarketPage } from './containers/MarketPage';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/cursos" element={<CursosPage />} />
                    <Route exact path="/market" element={<MarketPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>

    )
}

export { App };