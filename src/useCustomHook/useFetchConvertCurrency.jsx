import { useEffect, useState } from 'react';

export default function useFetchConvertCurrency(symbol = 'IDR', amount = 1) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchConvertCurrency = async (url) => {
    setLoading(true);
    await fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    async function request() {
      const url = `https://api.exchangerate.host/convert?from=USD&to=${symbol}&amount=${amount}`;
      fetchConvertCurrency(url);
    }

    request();
  }, [symbol, amount]);

  return {
    data,
    loading,
    error,
  };
}
