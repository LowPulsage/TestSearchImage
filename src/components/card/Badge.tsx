import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export function Badge({ children }: Props) {
  return (
    <span className='rounded-xl bg-white-10 p-2.5 text-sm text-blue-1'>
      {children}
    </span>
  );
}
