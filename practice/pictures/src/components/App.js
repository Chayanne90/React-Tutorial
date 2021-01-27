import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


/*
const App = () => {

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar />
        </div>
    );
}*/



class App extends React.Component {

    state = { image: [] }

     onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID fvr_wnAHZYuJF15YQ0Xkd9IMG6T1T7826i59WO0it9w'
            }
        });

        console.log(response.data.results);

        this.setState({ image: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar submit={this.onSearchSubmit} />
                <p>Found: {this.state.image.length} Images.</p>
            </div>
        );
    }
}

export default App;