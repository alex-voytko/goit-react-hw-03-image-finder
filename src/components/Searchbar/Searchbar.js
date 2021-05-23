import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
    state = {
        query: '',
    };
    handleChange = event => {
        this.setState({ query: event.currentTarget.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.resetInput();
    };
    resetInput = () => {
        this.setState({ query: '' });
    };
    render() {
        const { query } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                        value={query}
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;
