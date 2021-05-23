import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class App extends Component {
    render() {
        return (
            <div className="Loader">
                <Loader
                    type="Rings"
                    color="#eca33c"
                    height={200}
                    width={200}
                    timeout={3000} //3 secs
                />
            </div>
        );
    }
}
