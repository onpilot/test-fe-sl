import { useState } from 'react';
import useFetchSymbols from '../useCustomHook/useFetchSymbols';
import CurrencyList from './CurrencyList';
import './card.css';

export default function Card() {
  const [amount, setAmount] = useState(10);
  const { data, loading, error } = useFetchSymbols();
  // console.log('🍌', data);

  return (
    <div className="card">
      <div className="card-header">
        <p>USD - United States Dollars</p>
        <div className="card--input">
          <h1>USD</h1>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="card-main">
        {!loading && data ? (
          <CurrencyList currencies={data} amount={amount} />
        ) : (
          'Loading'
        )}
      </div>
    </div>
  );
}
