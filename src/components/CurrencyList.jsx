import { useState } from 'react';
import { defaultCurrencies } from '../data/data';
import List from './List';
import './currency-list.css';

// eslint-disable-next-line react/prop-types
export default function CurrencyList({ currencies, amount }) {
  const [list, setList] = useState([...defaultCurrencies]);
  const [isAddCurrency, setIsAddCurrency] = useState(true);
  const [code, setCode] = useState(null);

  const handleClick = () => {
    setIsAddCurrency((prev) => !prev);
  };

  const handleSubmit = () => {
    if (code) setList((prev) => [...prev, code]);
    setCode(null);
  };

  const handleSelect = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="wrapper">
      <ul>
        {list.map((e) => {
          return (
            <List
              key={e}
              data={currencies[e]}
              amount={amount}
              setList={setList}
            />
          );
        })}
      </ul>

      {isAddCurrency ? (
        <div className="inner-wrapper">
          <button type="button" onClick={handleClick}>
            (+) Add More Currency
          </button>
        </div>
      ) : (
        <div className="inner-wrapper">
          <label htmlFor="currency-choice">
            Choose a currency:
            <select
              id="currency-choice"
              name="currency-choice"
              onChange={handleSelect}
            >
              {Object.keys(currencies).map((e) => {
                return (
                  <option
                    key={e}
                    value={e}
                    disabled={list.find((l) => l === e)}
                  >
                    {e}
                  </option>
                );
              })}
            </select>
          </label>

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" onClick={handleClick}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
