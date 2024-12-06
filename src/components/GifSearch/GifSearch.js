
import React, {Component} from 'react';
import { SearchFormGif, SearchFormbutton, SearchForminput, GifHead } from './GifSearchStyled';

class GifSearch extends Component {
    state = {
        valueInput: "",
    }

    

    handleSubmit = (event) => {  
        event.preventDefault()
        const valueInput = event.target.elements.search.value
        this.props.getValue(valueInput)
    }
    
    render() {
        return(
            <GifHead>
                <SearchFormGif onSubmit={this.handleSubmit}>
                    <SearchForminput type='text' name='search'/>
                    <SearchFormbutton type='submit'>Пошук</SearchFormbutton>
                </SearchFormGif>
            </GifHead>
        )
    }


}

export default GifSearch