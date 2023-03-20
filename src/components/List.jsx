import { Button, Icon } from 'semantic-ui-react';
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
          {!loading ? (
            <p>{Number(rate?.result?.toFixed(4)).toLocaleString()}</p>
          ) : (
            <div className="ui active inline loader medium" />
          )}
        </div>
        <span>
          {code} - {description}
        </span>
        <div style={{ display: 'flex', gap: 4 }}>
          1 USD = {code}
          <div>
            {!loading ? (
              Number(rate?.info?.rate.toFixed(4)).toLocaleString()
            ) : (
              <div className="ui active inline loader mini" />
            )}
          </div>
        </div>
      </div>
      <div>
        <Button
          icon
          inverted
          circular
          color="red"
          onClick={() => removeList(code)}
        >
          <Icon name="delete" />
        </Button>
        {/* Semantic UI Button elm issue: findDOMNode is deprecated in StrictMode */}
        {/* <button type="button" onClick={() => removeList(code)}>
          (-)
        </button> */}
      </div>
    </li>
  );
}
