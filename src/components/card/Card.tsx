import { ComponentProps } from 'react';

import { CardImage } from '@/components/card/CardImage';
import { CardInfo } from '@/components/card/CardInfo';

interface Props extends ComponentProps<typeof CardImage> {
  user: Unspash.User;
  tags: Unspash.Tag[];
}

export function Card({ urls, tags, user, height, width }: Props) {
  return (
    <div className='flex flex-col gap-4'>
      <CardImage urls={urls} height={height} width={width} />
      <CardInfo description={user.name} tags={tags} />
    </div>
  );
}
