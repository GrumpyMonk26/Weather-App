import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        };
    }

    onInputChange(e) {
        this.setState({
            location: e.target.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    // RENDER FUNCTION IS TRIGGERED WHENEVER UPDATING 
    // THE STATE USING THE SETSTATE FUNCTION

    render() {
        const location = this.state.location;

        return(
            <form onSubmit={(e) => this.onFormSubmit(e) } action="">
                <button type="submit">
                    Search
                </button>
                <input id="search" name="search" value={location} onChange={(e) => this.onInputChange(e)} />
                
            </form>
        )
    }
}

export default SearchBar