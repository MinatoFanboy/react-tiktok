import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Image from '~/components/Image';
import { CheckCircleIcon } from '~/components/Icons';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link className={cx('wrapper')} to={`/@${data?.nickname}`}>
            <Image alt={'Home'} className={cx('avatar')} src={data.avatar} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data?.full_name}</span>
                    {data?.tick && <CheckCircleIcon className={cx('check')} />}
                </h4>
                <span className={cx('username')}>{data?.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
