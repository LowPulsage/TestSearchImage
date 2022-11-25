import { useMemo } from 'react';

export function useColsSplitter<T>(data: T[], cols: number): T[][] {
  return useMemo(
    () => {
      const arr = Array.from({ length: cols }).map(() => [] as T[])

      data.forEach((el, idx) => {
       arr[idx%cols].push(el); 
      })
      
      return arr;
    },
    [data, cols]
  );
}
