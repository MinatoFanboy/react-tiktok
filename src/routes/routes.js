import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

import { HeaderOnly } from '~/layouts';
import config from '~/config';
import Live from '~/pages/Live/Live';

// Public Routes
const publicRoutes = [
    {
        component: Home,
        path: config.routes.home,
    },
    {
        component: Following,
        path: config.routes.following,
    },
    {
        component: Live,
        path: config.routes.live,
    },
    {
        component: Profile,
        path: config.routes.profile,
    },
    {
        component: Upload,
        layout: HeaderOnly,
        path: config.routes.upload,
    },
];

// Private Routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
