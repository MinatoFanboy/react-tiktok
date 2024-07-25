import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    classname,
    disabled = false,
    href,
    leftIcon,
    large = false,
    onClick,
    outline = false,
    primary = false,
    rightIcon,
    rounded = false,
    small = false,
    text = false,
    to,
    ...props
}) {
    let Comp = 'button';
    const _props = { onClick, ...props };

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    // Remove event listner when disabled
    if (disabled) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }

    const classes = cx('wrapper', { [classname]: classname, disabled, large, outline, primary, rounded, small, text });

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    classname: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    left: PropTypes.node,
    large: PropTypes.bool,
    onClick: PropTypes.func,
    outline: PropTypes.bool,
    primary: PropTypes.bool,
    right: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    text: PropTypes.bool,
    to: PropTypes.string,
};

export default Button;
