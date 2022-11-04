import { Component } from 'react';
import './card-list.styles.css';

class CardList extends Component {

    render() {
        const { monsters } = this.props;

        return (
            <div className="card-list">
                {monsters.map((monster) => (
                    <div className="card-container" key={monster.id}>
                        <img
                         alt={'monster'}
                         src={`https://www.robohash.org/${monster.id}?set=set3&size=180x180`} 
                        />
                        <h1 key={monster.id}>{monster.name}</h1>
                    </div>
                ))}
            </div>
        )
    }
}

export default CardList;