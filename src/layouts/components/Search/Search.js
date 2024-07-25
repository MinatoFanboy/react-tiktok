import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
import WrapperPopper from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { CircleXIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        if (!debouncedValue.trim()) {
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debouncedValue);
            setSearchResults(result);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                        <WrapperPopper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResults.map((searchResult) => (
                                <AccountItem data={searchResult} key={`AccountItem-${searchResult.id}`} />
                            ))}
                        </WrapperPopper>
                    </div>
                )}
                visible={showResult && searchResults.length > 0}
            >
                <div className={cx('search')}>
                    <input
                        onFocus={() => setShowResult(true)}
                        onChange={handleChange}
                        placeholder={'Search accounts and videos'}
                        ref={inputRef}
                        spellCheck={false}
                        value={searchValue}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                inputRef.current?.focus();
                                setSearchValue('');
                                setSearchResults([]);
                            }}
                        >
                            {/* Clear */}
                            <CircleXIcon />
                        </button>
                    )}
                    {/* Loading */}
                    {loading && <LoadingIcon className={cx('loading')} />}

                    {/* Search */}
                    <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
