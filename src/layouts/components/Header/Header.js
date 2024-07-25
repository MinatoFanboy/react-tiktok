import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import {
    CircleQuestionIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    SettingsIcon,
    TikTokIcon,
    UploadIcon,
    UserIcon,
} from '~/components/Icons';
import images from '~/assets/images';
import config from '~/config';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        children: {
            data: [
                {
                    code: 'en',
                    title: 'English',
                    type: 'language',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                    type: 'language',
                },
            ],
            title: 'Language',
        },
        title: 'English',
    },
    {
        icon: <CircleQuestionIcon />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard Shortcuts',
    },
];

function Header() {
    const currentUser = false;

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View Profile',
            to: '/@hoaa',
        },
        {
            icon: <TikTokIcon />,
            title: 'Get Coin',
            to: config.routes.coin,
        },
        {
            icon: <SettingsIcon />,
            title: 'Settings',
            to: config.routes.settings,
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            separate: true,
            title: 'Log out',
            to: config.routes.logout,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link className={cx('logo')} to={config.routes.home}>
                    <img alt={'tiktok'} src={images.logo} />
                </Link>
                {/* Search */}
                <Search />
                {/* Action */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content={'Upload video'} delay={[0, 80]} placement={'bottom'}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content={'Message'} delay={[0, 50]} placement={'bottom'}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content={'Inbox'} delay={[0, 50]} placement={'bottom'}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu
                        hideOnClick={false}
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={(item) => console.log('Item >>:', item)}
                    >
                        {currentUser ? (
                            <Image
                                alt={'Nguyen Van A'}
                                className={cx('user-avatar')}
                                src={
                                    'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/430c42e71795fd4cb0dd6c51a4d43017~c5_100x100.jpeg?x-expires=1693962000&x-signature=t%2BqvOGXLxyemgA4Jus3gF76QGKs%3D'
                                }
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
