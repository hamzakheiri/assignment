import axios from "axios";
import { useEffect, useState } from "react";

function useSubmitForm3(submited)  {
  const [res, setRes] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const submit = async (source) => {
      if (Object.keys(submited).length === 0) {
        return;
      }
      try {
        setIsLoading(true);
        let data;
        if (submited.type === "personal") {
          data = await axios.post('http://nestjs:5000/form-submition/interface3/personal', {top: {...submited.top}, bottom: {...submited.bottom}}, { cancelToken: source.token });
        }
        else {
          data = await axios.post('http://localhost:5000/form-submition/interface3/company', {top: {...submited.top}, bottom: {...submited.bottom}}, { cancelToken: source.token });
        }
        setRes(data.data);
        console.log("form submited: ", data.data)
      } catch (e) {
        setError(true);
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
    submit(source);
  }, [submited]);

  return [res, isLoading, error];
}

export default useSubmitForm3;