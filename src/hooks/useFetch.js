import { useState, useEffect, useCallback } from "react";
import { Instance } from "src/api/axiosInstance";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setIsLoading(true);
    Instance.get(url)
      .then(res => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        // console.log(err);
        setError(err);
      })
      .finall(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading: isLoading,
    error
  }
}