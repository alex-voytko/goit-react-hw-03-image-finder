import React, { Component } from 'react';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import galleryApi from './services/gallery-api';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

class App extends Component {
    state = {
        pictures: [],
        page: 1,
        searchQuery: '',
        isLoading: false,
        showModal: false,
        largeImg: '',
        tags: '',
        error: null,
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchPictures();
        }
    }
    openLargeImg = pic => {
        this.setState({
            largeImg: pic.largeImageURL,
        });
        console.dir(pic.largeImageURL);
        this.toggleModal();
    };
    onChangeQuery = ({ query }) => {
        this.setState({
            searchQuery: query,
            page: 1,
            pictures: [],
            error: null,
        });
    };
    fetchPictures = () => {
        const { searchQuery, page } = this.state;
        this.setState({ isLoading: true });
        galleryApi
            .fetchPictures({ searchQuery, page })
            .then(
                pics =>
                    this.setState(preState => ({
                        pictures: [...preState.pictures, ...pics],
                        page: preState.page + 1,
                    })),
                this.scrolling(),
            )
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
    };
    scrolling = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };
    toggleModal = () => {
        this.setState(prevStateModal => ({
            showModal: !prevStateModal.showModal,
        }));
    };
    render() {
        const { pictures, isLoading, showModal, largeImg, tags, error } =
            this.state;
        const { onChangeQuery, fetchPictures, toggleModal, openLargeImg } =
            this;
        const shouldrenderLoadMoreBtn = pictures.length > 0;
        return (
            <>
                <Container>
                    {error && <h1>Oops... error 404</h1>}
                    <Searchbar onSubmit={onChangeQuery} />
                    <ImageGallery>
                        <ImageGalleryItem
                            pics={pictures}
                            onClick={openLargeImg}
                        />
                    </ImageGallery>
                    {isLoading && <Loader />}
                    {shouldrenderLoadMoreBtn && (
                        <Button fetch={fetchPictures} />
                    )}
                    {showModal && (
                        <Modal
                            onClose={toggleModal}
                            src={largeImg}
                            alt={tags}
                        />
                    )}
                </Container>
            </>
        );
    }
}

export default App;
