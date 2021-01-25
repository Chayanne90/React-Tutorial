import React from 'react';
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

    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar submit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;