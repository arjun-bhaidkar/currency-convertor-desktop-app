import React, {useState, useEffect} from 'react'
import './app.css'
import Header from './components/header/Header'
import CurrencyExchange from './components/currency_exchange/CurrencyExchange'

export default function App() {

  const [currency, setCurrency] = useState(['INR']);
  const [isListLoading, setIsListLoading] = useState(true)

  useEffect( () => {
    setIsListLoading(true);
    fetch("https://currency-exchange.p.rapidapi.com/listquotes", {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            "x-rapidapi-key": "c152ed7c6amsh7f05c7b0911efafp1d3561jsn4a5ce9f755d6"
          }
        })
        .then(response => response.json())
        .then(response => {setCurrency(response);setIsListLoading(false)})
        .catch(err => {
          console.log(err);
        }
    );

  },[])

  return (
    <div className='main-container'>
      <Header />
      <CurrencyExchange currency={currency} isListLoading={isListLoading}/>
    </div>
  )
}