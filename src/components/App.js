import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import ImagesList from './ImageList'

class App extends React.Component {
    state = { images: [] };
    onSearchSubmit= async (term)=>{
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term  },
            headers: {
                Authorization:'Client-ID JV4eHBJwEv8LrsviCD7CkND7JUOk7lzTpQ4N4mwcncw' 
            }
        });

        this.setState({images: response.data.results})
    }

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}> 
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images 
                <ImagesList images={this.state.images}/>
            </div>
        );
    }
}  

export default App;