import { useFetchImages } from '@/hooks/useFetchImages';
import { useLazyLoading } from '@/hooks/useLazyLoading';
import { useScreenSize } from '@/hooks/useScreenSize';

import { Card } from '@/components/card/Card';
import { ColumnView } from '@/components/ColumnView';
import { Loader } from '@/components/Loader';

import { useSearch } from '@/context/search';

function widthToCols(width: number) {
  if (width >= 1280) return 4;
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export function Results() {
  const { text } = useSearch();
  const { isLoading, result, next } = useFetchImages(text);
  const ref = useLazyLoading<HTMLDivElement>(100, next);
  const { width } = useScreenSize();

  if (isLoading && result === null) {
    return <Loader />;
  }

  if (!result) {
    return (
      <div className='flex grow items-center justify-center py-10'>
        <span className='text-xl text-blue-1'>
          Enter a keyword to find images
        </span>
      </div>
    );
  }

  return (
    <>
      <div
        className='mx-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        ref={ref}
      >
        <ColumnView
          data={result}
          cols={widthToCols(width)}
          component={Card}
          columnClassName='flex flex-col gap-8'
        />
      </div>

      {isLoading && <Loader />}
    </>
  );
}
