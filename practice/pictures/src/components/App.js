import React from 'react';
import unsplash from '../api/unsplash';
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

        const response = await unsplash.get('/search/photos', {
            params: { query: term },

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