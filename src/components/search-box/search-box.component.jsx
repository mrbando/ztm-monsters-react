import { Component } from 'react';
import './search-box.styles.css';


class SearchBox extends Component {

    render() {
        const { query, onSearchChange } = this.props;

        return (
            <div>
                <input 
                    className='search-box' 
                    type='search'
                    placeholder='search monsters'
                    onChange={onSearchChange}
                    /> 
            </div>
        )
    }
}

export default SearchBox;