import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes';
import DefaultLayout from '~/layouts';

function App() {
    return (
        <Router>
            <div className={'App'}>
                <Routes>
                    {publicRoutes.map((publicRoute, index) => {
                        // Layout Default, if null set Fragment else set Layout
                        let Layout = DefaultLayout;

                        if (publicRoute.layout) {
                            Layout = publicRoute.layout;
                        } else if (publicRoute === null) {
                            Layout = Fragment;
                        }

                        const Page = publicRoute.component;

                        return (
                            <Route
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                                key={`Route-${index}`}
                                path={publicRoute.path}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
