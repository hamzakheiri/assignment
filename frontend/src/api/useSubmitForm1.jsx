import axios from 'axios'
import { useEffect, useState } from 'react';

function useSubmitForm1(submited) {
  const [res, setRes] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    async function submit(source) {
      if (Object.keys(submited).length === 0){
        return;
      }
      try {
        setIsLoading(true);
        const { data } = await axios.post('http://localhost:5000/form-submition/interface1', submited, { cancelToken: source.token });
        setRes(data);
        console.log("form submited: ", data);
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
  }, [submited])

  return [res, isLoading, error];
}

export default useSubmitForm1;