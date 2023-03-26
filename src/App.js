import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Coin from './components/Coin';


function App() {

  const [input, setInput] = useState("")
  const [result, setResult] = useState([]);

  useEffect(() => {

    axios.get("https://api.coinstats.app/public/v1/coins")
      .then(res => setResult(res.data.coins))
      .catch(err => console.log(err))

  }, [])

  const searchCoin = result.filter(coin => {


    return coin.name.toLowerCase().includes(input.toLowerCase())

  })


  return (
    <div className="App">
      <header>

        <h1>Kriptovaluta Kereső</h1>
        <input type="text" placeholder='Bitcoin' onChange={(change) => {

          setInput(change.target.value);

        }} />
        
      </header>

      <div className='result-container'>

        {
          searchCoin.map(item => {

            return <Coin

              name={item.name}
              price={item.price}
              icon={item.icon}
              symbol={item.symbol}
              websiteUrl={item.websiteUrl}

            />

          })

        }

      </div>


    </div>
  );
}

export default App;
