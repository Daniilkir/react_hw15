import React, { Component } from 'react';
import {  GifGallery, GifItems, Img } from './GifListStyled';

class GifList extends Component {
    state = {
        gifs: [],
    };
    componentDidMount() {
        fetch(
            'https://api.giphy.com/v1/gifs/trending?api_key=HXcBelphjsOPPLP8Rj53WmpL4ZQTJ6kf&limit=10'
        )
            .then((res) => res.json())
            .then((gifs) => {
                this.setState({ gifs: gifs.data }); 
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchingValue !== this.props.searchingValue) {
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=HXcBelphjsOPPLP8Rj53WmpL4ZQTJ6kf&q=${this.props.searchingValue}&limit=10`)
                .then((res) => res.json())
                .then((data) => {
                    this.setState({ gifs: data.data }); 
                })        }
    }

    render() {
        return (
            <GifGallery>
                {this.state.gifs.map((gif) => (
                    <GifItems key={gif.id}>
                        {gif.images?.fixed_height && (
                            <Img
                                src={gif.images.fixed_height.url}
                                alt={gif.title}
                            />
                        )}
                    </GifItems>
                ))}
            </GifGallery>
        );
    }
}

export default GifList;
