import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import images from '~/assets/images';

const Images = forwardRef(({ alt, fallback = images.noImage, src, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback);
    };

    return <img alt={alt} onError={handleError} ref={ref} src={_fallback || src} {...props} />;
});

Images.propTypes = {
    alt: PropTypes.string,
    fallback: PropTypes.string,
    src: PropTypes.string,
};

export default Images;
