import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AccountItem from './AccountItem';
import styles from './SuggestedAccounts.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ data, label, onSeeAll }) {
    const [isSeeAll, setIsSeeAll] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {data.map((item) => (
                <AccountItem data={item} key={`SuggestedAccount-${item.id}`} />
            ))}

            <p
                className={cx('more-btn')}
                onClick={() => {
                    setIsSeeAll((prev) => !prev);
                    if (!isSeeAll) {
                        onSeeAll();
                    }
                }}
            >
                {isSeeAll ? 'See all' : 'See less'}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    data: PropTypes.array,
    label: PropTypes.string.isRequired,
    onSeeAll: PropTypes.func,
};

export default SuggestedAccounts;
