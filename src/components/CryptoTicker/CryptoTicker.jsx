/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import Ticker from 'react-ticker';
import DownArrow from '../icons/DownArrow';
import UpArrow from '../icons/UpArrow';
import './crypto-ticker.scss';

const CryptoTicker = () => {
  const [rates, setRates] = useState([]);

  useEffect(async () => {
    const ratesFromAPI = await (await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD')).json();
    setRates(ratesFromAPI.Data);
  }, []);

  return (
    <div>
      {
         rates.length
           ? <Ticker offset="run-in" speed={10}>
             {({ index }) => {
               const symbol = rates[index]?.CoinInfo?.Name;
               const fullName = rates[index]?.CoinInfo?.FullName;
               const price = rates[index]?.DISPLAY?.USD?.PRICE;
               const changePercent = rates[index]?.RAW?.USD?.CHANGEPCT24HOUR.toFixed(2);
               const isPositive = changePercent > 0;

               if (!symbol) {
                 return null;
               }

               return <div className="ticker-container">
                          <span className="ticker-item">{index + 1}. ({ symbol})</span>
                          <span className="ticker-item">{ fullName}</span>
                          <span className="ticker-item">{ price}</span>
                          <span className="ticker-item">{isPositive && '+'}{ changePercent}% </span>
                          <span>{isPositive ? <UpArrow /> : <DownArrow /> }</span>
                      </div>;
             }}
             </Ticker>
           : <div />
      }
    </div>
  );
};

export default CryptoTicker;
