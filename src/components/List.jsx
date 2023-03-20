import useFetchConvertCurrency from '../useCustomHook/useFetchConvertCurrency';
import './list.css';

// eslint-disable-next-line react/prop-types
export default function List({ data, amount, setList }) {
  // eslint-disable-next-line react/prop-types
  const { description, code } = data;
  const { data: rate, loading, error } = useFetchConvertCurrency(code, amount);

  const removeList = (key) => {
    setList((prev) => prev.filter((e) => e !== key));
  };

  return (
    <li className="list">
      <div>
        <div className="list--header">
          <p>{code}</p>
          {!loading ? <p>{rate?.result?.toFixed(4)}</p> : 'Loading'}
        </div>
        <p>
          {code} - {description}
        </p>
        <p>
          1 USD = {code}
          <span style={{ marginLeft: 8 }}>
            {!loading ? rate?.info?.rate.toFixed(4) : 'Loading'}
          </span>
        </p>
      </div>
      <div>
        <button type="button" onClick={() => removeList(code)}>
          (-)
        </button>
      </div>
    </li>
  );
}
