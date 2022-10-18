import { useState, useEffect } from 'react';
import SearchInput from './Components/SearchInput/SearchInput';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
import Spinner from './Components/Spinner/Spinner';
import api from './API/Api';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      api.search(searchQuery)
        .then((data) => {
          const results = data.results.map((item) => ({
            id: item.id,
            src: item.urls.regular,
            alt: item.alt_description,
            title: item.description,
            author: item.user.name,
          }));

          setCards(results);
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }
  }, [searchQuery]);

  return (
    <div className="App">
      <h1>My Demo App</h1>
      <div className="App-content">
        <div className="App-search">
          <SearchInput
            placeholder="Enter search string..."
            handleChange={(event) => setInputValue(event.target.value)}
          />
          <Button title="Search" handleClick={ () => setSearchQuery(inputValue) } />
        </div>

        {isLoading ?
          <Spinner />
          :
          <div className="App-cards">
            {cards.map((card) => <Card key={card.id} {...card} />) }
          </div>
        }
      </div>
    </div>
  );
}

export default App;
