import { useEffect, useState } from 'react';
import { filterSymbols } from '../helper/helper';

export default function useFetchSymbols() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSymbols = async (url) => {
    setLoading(true);
    await fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((resData) => {
        const symbols = filterSymbols(resData.symbols);
        setData(symbols);
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
      const url = 'https://api.exchangerate.host/symbols';
      fetchSymbols(url);
    }

    request();
  }, []);

  return {
    data,
    loading,
    error,
  };
}
