import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    };
    componentDidMount() {
        console.log('Modal ComponentDidMount');
        window.addEventListener('keydown', this.onKey);
    }
    componentWillUnmount() {
        console.log('Modal ComponentWillUnmount');
        window.removeEventListener('keydown', this.onKey);
    }
    handleClose = event => {
        if (event.target.className === 'Overlay') {
            this.props.onClose();
        }
    };
    onKey = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };
    render() {
        const { handleClose } = this;
        const { src, alt } = this.props;
        return createPortal(
            <div className="Overlay" onClick={handleClose}>
                <div className="Modal">
                    <img src={src} alt={alt} />
                </div>
            </div>,
            modalRoot,
        );
    }
}

export default Modal;
