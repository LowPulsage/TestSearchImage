import { useEffect, useMemo, useState } from 'react';

import { fetchImages } from '@/api/fetchImages';

export function useFetchImages(query: string) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Unspash.Result[] | null>(null);

  function addNewResult(response: Unspash.Result[]) {
    setResult((prev) => {
      if (Array.isArray(prev)) {
        return [...prev, ...response];
      }
      return response;
    });
  }

  useEffect(() => {
    setResult(null);
  }, [query]);

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);

    fetchImages(query, page)
      .then((res) => {
        if (res.response?.total_pages) {
          setTotalPages(res.response.total_pages);
        }
        if (res.response?.results.length) {
          addNewResult(res.response.results as unknown as Unspash.Result[]);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  const next = useMemo(() => {
    if (totalPages <= page) {
      return null;
    }

    return () => {
      setPage((prev) => prev + 1);
    };
  }, [page, totalPages]);

  return { isLoading, result, next };
}
