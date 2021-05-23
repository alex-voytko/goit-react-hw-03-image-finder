import axios from 'axios';

const fetchPictures = ({
    url = 'https://pixabay.com/api',
    searchQuery = '',
    page = 1,
    key = '20635202-2c584497a9a1087bd3447b54e',
    stuff = 'image_type=photo&orientation=horizontal&per_page=12',
}) => {
    return axios
        .get(`${url}/?q=${searchQuery}&page=${page}&key=${key}&${stuff}`)
        .then(response => response.data.hits);
};

export default { fetchPictures };
