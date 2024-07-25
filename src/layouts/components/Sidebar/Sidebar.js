import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import * as userService from '~/services/userService';
import Menu, { MenuItem } from './Menu';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import config from '~/config';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prev) => [...prev, ...data]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page]);

    const handleSeeAll = () => {
        setPage((prev) => prev + 1);
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    activeIcon={<HomeActiveIcon />}
                    icon={<HomeIcon />}
                    title={'For You'}
                    to={config.routes.home}
                />
                <MenuItem
                    activeIcon={<UserGroupActiveIcon />}
                    icon={<UserGroupIcon />}
                    title={'Following'}
                    to={config.routes.following}
                />
                <MenuItem activeIcon={<LiveActiveIcon />} icon={<LiveIcon />} title={'LIVE'} to={config.routes.live} />
            </Menu>

            <SuggestedAccounts data={suggestedUsers} label={'Suggested Accounts'} onSeeAll={handleSeeAll} />
        </aside>
    );
}

export default Sidebar;
