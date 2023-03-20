import { useState } from 'react';
import useFetchSymbols from '../useCustomHook/useFetchSymbols';
import CurrencyList from './CurrencyList';
import './card.css';
import './currency-list.css';

export default function Card() {
  const [input, setInput] = useState(10000);
  const { data, loading, error } = useFetchSymbols();

  console.log('🍌', data);

  return (
    <div className="card">
      <div className="card-header">
        <p>USD - United States Dollars</p>
        <div className="card--input">
          <h1>USD</h1>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      <div className="card-main">
        <CurrencyList />
      </div>
    </div>
  );
}
