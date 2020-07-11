import React from 'react';
//import axios from 'axios';
import unsplash from './unsplash';
import SeachBox from './searchBox';
import ImageList from './imageList';

class App extends React.Component {
    state = {images : []};
        onSearchSubmit  = async (term) =>{
        const response = await unsplash.get('/search/photos', {
                params: { query : term}
        } );//.then(res => {console.log(res.data.results)});
        
        this.setState({images : response.data.results});
    }
    render() {
        return (
            <div className = "ui container" style = {{marginTop : '20px', marginLeft : '20px'}}>
                <SeachBox  onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;




