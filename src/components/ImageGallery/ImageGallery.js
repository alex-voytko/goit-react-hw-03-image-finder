import React from 'react';
import PropTypes from 'prop-types';

const ImageGallery = ({ children }) => {
    return <ul className="ImageGallery">{children}</ul>;
};

ImageGallery.propTypes = {
    children: PropTypes.any.isRequired,
};

export default ImageGallery;
