import { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import WrapperPopper from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, hideOnClick = true, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    // Reset to first page
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const _renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    data={item}
                    key={`MenuItem-${index}`}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const _renderResults = (attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
            <WrapperPopper className={cx('menu-popper')}>
                {history.length > 1 && <Header onBack={handleBack} title={current?.title} />}
                <div className={cx('menu-body')}>{_renderItems()}</div>
            </WrapperPopper>
        </div>
    );

    return (
        <Tippy
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            interactive
            offset={[16, 8]}
            onHide={handleReset}
            placement={'bottom-end'}
            render={(attrs) => _renderResults(attrs)}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    item: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
