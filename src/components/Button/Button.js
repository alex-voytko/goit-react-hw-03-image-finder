import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ fetch }) => {
    return (
        <>
            <button className="Button" type="button" onClick={fetch}>
                Load more
            </button>
        </>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;
