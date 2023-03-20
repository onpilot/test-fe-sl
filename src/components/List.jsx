import useFetchConvertCurrency from '../useCustomHook/useFetchConvertCurrency';
import './list.css';

// eslint-disable-next-line react/prop-types
export default function List({ currencies, symbol, amount, setList }) {
  const {
    data: rate,
    loading,
    error,
  } = useFetchConvertCurrency(symbol, amount);

  const removeList = (key) => {
    setList((prev) => prev.filter((e) => e !== key));
  };

  return (
    <li className="list">
      <div>
        <div className="list--header">
          <p>{symbol}</p>
          {!loading ? <p>{rate?.result?.toFixed(4)}</p> : 'Loading'}
        </div>
        <p>
          {symbol} - {currencies[symbol].description}
        </p>
        <p>
          1 USD = {symbol}
          <span style={{ marginLeft: 8 }}>
            {!loading ? rate?.info?.rate.toFixed(4) : 'Loading'}
          </span>
        </p>
      </div>
      <div>
        <button type="button" onClick={() => removeList(symbol)}>
          (-)
        </button>
      </div>
    </li>
  );
}
