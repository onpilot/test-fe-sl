import { useState, useCallback } from 'react';
import { Input } from 'semantic-ui-react';
import { debounce } from '../helper/debounce';
import useFetchSymbols from '../useCustomHook/useFetchSymbols';
import CurrencyList from './CurrencyList';
import './card.css';

export default function Card() {
  const [amount, setAmount] = useState(10);
  const { data, loading, error } = useFetchSymbols();

  const debounceSetAmount = useCallback(
    debounce((e) => setAmount(e.target.value), 400),
    []
  );

  return (
    <div className="card">
      <div className="card-header">
        <span>USD - United States Dollars</span>
        <div className="card--input">
          <h1>USD</h1>
          <Input size="big" labelPosition="left" className="input">
            <input
              type="number"
              onChange={debounceSetAmount}
              placeholder="10.00"
            />
          </Input>
        </div>
      </div>
      <div className="card-main">
        {!loading && data ? (
          <CurrencyList currencies={data} amount={amount} />
        ) : (
          <div className="ui active inline loader" />
        )}
      </div>
    </div>
  );
}
