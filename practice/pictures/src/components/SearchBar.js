import React from 'react';


class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();


        /* this is how you use the props in a class componente using
        this.props.exmple */
        //console.log(this.state.term);
        this.props.submit(this.state.term);
    }


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;