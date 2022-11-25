import clsx from 'clsx';
import ImageNext from 'next/image';
import { useState } from 'react';

import Skeleton from '@/components/Skeleton';

interface Props {
  urls: Unspash.Urls;
  height: number;
  width: number;
}

export function CardImage({ urls, height, width }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const resizedHeight = height / (width / 400);

  return (
    <div className='relative'>
      <Skeleton
        className={clsx(
          { hidden: !isLoading },
          'absolute bottom-0 right-0 left-0 top-0'
        )}
      />
      <ImageNext
        onLoadingComplete={() => setIsLoading(false)}
        src={urls.regular}
        alt='image from response'
        className='w-full rounded-xl object-cover'
        width={400}
        height={resizedHeight}
      />
    </div>
  );
}
