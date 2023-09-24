import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { CheckCircleIcon } from '~/components/Icons';
import Image from '~/components/Image';
import WrapperPopper from '~/components/Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const _renderPreview = (props) => (
        <div tabIndex={-1} {...props}>
            <WrapperPopper>
                <AccountPreview data={data} />
            </WrapperPopper>
        </div>
    );

    return (
        <div>
            <Tippy delay={[800, 0]} interactive offset={[-20, 0]} placement={'bottom'} render={_renderPreview}>
                <div className={cx('account-item')}>
                    <Image alt={data?.nickname} className={cx('avatar')} src={data?.avatar} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data?.nickname}</strong>
                            {data?.tick && <CheckCircleIcon className={cx('check')} />}
                        </p>
                        <p className={cx('name')}>{`${data?.first_name} ${data?.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};

export default AccountItem;
