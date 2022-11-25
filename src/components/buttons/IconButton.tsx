import { ComponentProps } from 'react';

import clsxm from '@/lib/clsxm';

import { Button } from '@/components/buttons/Button';

type Props = ComponentProps<typeof Button>;

export function IconButton({ className, ...props }: Props) {
  return (
    <Button className={clsxm('h-12 w-12 rounded-full', className)} {...props} />
  );
}
