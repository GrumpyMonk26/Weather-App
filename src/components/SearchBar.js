import React from 'react'
import { getCurrentWeather } from './../apis/Open-weather-apis'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            temp: ''
        };
    }

    onInputChange(e) {
        this.setState({
            location: e.target.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();

        getCurrentWeather(this.state.location)
        .then((res) => {
            this.setState({
                temp: res.data.main.temp
            });
        });
    }

    // RENDER FUNCTION IS TRIGGERED WHENEVER UPDATING 
    // THE STATE USING THE SETSTATE FUNCTION

    render() {
        const location = this.state.location;
        const temp = this.state.temp;

        return(
            <div>
                <form onSubmit={(e) => this.onFormSubmit(e) } action="">
                <button type="submit">
                    Search
                </button>
                <input id="search" name="search" value={location} onChange={(e) => this.onInputChange(e)} />
                
            </form>
            <p>
                {temp}
            </p>
            </div>
            
        )
    }
}

export default SearchBar