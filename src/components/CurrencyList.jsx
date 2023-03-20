import { useState } from 'react';
import { Button, Icon, Dropdown } from 'semantic-ui-react';
import { defaultCurrencies } from '../data/data';
import List from './List';
import './currency-list.css';

// eslint-disable-next-line react/prop-types
export default function CurrencyList({ currencies, amount }) {
  const [list, setList] = useState([...defaultCurrencies]);
  const [isAddCurrency, setIsAddCurrency] = useState(true);
  const [code, setCode] = useState(null);

  const filteredCurrencies = Object.keys(currencies)
    .filter((c) => list.findIndex((l) => l === c) === -1)
    .map((e) => ({
      key: e,
      text: e,
      value: e,
    }));

  const handleClick = () => {
    setIsAddCurrency((prev) => !prev);
  };

  const handleSubmit = () => {
    if (code) setList((prev) => [...prev, code]);
    setCode(null);
    setIsAddCurrency((prev) => !prev);
  };

  const handleSelect = (e, data) => {
    setCode(data.value);
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
          <Button fluid icon color="twitter" size="large" onClick={handleClick}>
            <Icon name="plus circle" />
            Add More Currency
          </Button>
          {/* Semantic UI Button elm issue: findDOMNode is deprecated in StrictMode */}
          {/* <button type="button" onClick={handleClick}>
            (+) Add More Currency
          </button> */}
        </div>
      ) : (
        <div className="inner-wrapper">
          <Dropdown
            placeholder="Select Currency"
            fluid
            search
            selection
            options={filteredCurrencies}
            onChange={handleSelect}
          />

          <Button.Group className="button-group">
            <Button onClick={handleClick}>Cancel</Button>
            <Button.Or />
            <Button color="twitter" onClick={handleSubmit}>
              Submit
            </Button>
          </Button.Group>
        </div>
      )}
    </div>
  );
}
