import axios from 'axios'
import { useEffect, useState } from 'react';

function useGetSubmits() {
  const [res, setRes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    async function submit(source) {
      try {
        setIsLoading(true);
        const { data } = await axios.get('http://localhost:5000/form-submition/', { cancelToken: source.token });
        setRes(data);
      }
      catch (e) {
        setError(true);
      }
      finally {
        setIsLoading(false);
      }
    }

    submit(source);

    return () => {
      source.cancel();
    }
  }, [])

  return [res, isLoading, error];
}

export default useGetSubmits;