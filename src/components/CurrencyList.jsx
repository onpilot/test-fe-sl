import { useState } from 'react';
import { defaultCurrencies } from '../data/data';
import List from './List';
import './currency-list.css';

// eslint-disable-next-line react/prop-types
export default function CurrencyList({ currencies, amount }) {
  const [list, setList] = useState([...defaultCurrencies]);
  const [isAddCurrency, setIsAddCurrency] = useState(true);

  const handleClick = () => {
    setIsAddCurrency((prev) => !prev);
  };

  return (
    <div className="wrapper">
      <ul>
        {list.map((e) => {
          return (
            <List
              key={e}
              currencies={currencies}
              symbol={e}
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
            <select id="currency-choice" name="currency-choice">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </label>

          <button type="button">Submit</button>
          <button type="button" onClick={handleClick}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
