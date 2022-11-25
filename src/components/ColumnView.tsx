import { FC } from 'react';

import { useColsSplitter } from '@/hooks/useColsSplitter';

interface Props<T> {
  data: T[];
  cols: number;
  component: FC<T>;
  columnClassName?: string;
}

export function ColumnView<T>({
  data,
  cols,
  columnClassName,
  component: Component,
}: Props<T>) {
  const colsView = useColsSplitter(data, cols);

  return (
    <>
      {colsView.map((col, colIdx) => (
        <div key={colIdx} className={columnClassName}>
          {col.map((item, itemIdx) => (
            <Component {...item} key={itemIdx} />
          ))}
        </div>
      ))}
    </>
  );
}
