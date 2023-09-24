import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { CheckCircleIcon } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image alt={data?.nickname} className={cx('avatar')} src={data?.avatar} />

                <Button classname={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data?.nickname}</strong>
                    {data?.tick && <CheckCircleIcon className={cx('check')} />}
                </p>
                <p className={cx('name')}>{`${data?.first_name} ${data?.last_name}`}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{`${data?.followers_count} `}</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>{`${data?.likes_count} `}</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object,
};

export default AccountPreview;
