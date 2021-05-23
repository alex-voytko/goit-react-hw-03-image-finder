import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ pics, onClick }) => {
    return (
        <>
            {pics.map(({ largeImageURL, webformatURL, tags, id }) => (
                <li className="ImageGalleryItem" key={id}>
                    <img
                        src={webformatURL}
                        alt={tags}
                        className="ImageGalleryItem-image"
                        onClick={() => onClick({ largeImageURL })}
                    />
                </li>
            ))}
        </>
    );
};

ImageGalleryItem.propTypes = {
    pics: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
